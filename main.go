// main.go
package main

import (
	"crypto/md5"
	"encoding/hex"
	"flag"
	"fmt"
	"github.com/SlyMarbo/rss"
	"gopkg.in/ini.v1"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"strings"
	tm "task-manager"
	"time"
)

var (
	CONFIG_PATH string // PATH to ini file
)

type Config struct {
	Workers int
	Db      []string
}

var config = new(Config)

// Data Base
var db *mgo.Database

// A buffered channel that we can send work requests on
var WorkQueue = make(chan tm.WorkRequest, 100)

// feed parser
func ParseFeed(work tm.WorkRequest) {
	c := db.C("feeds")
	n := db.C("news")

	if feed, ok := work.Data.(Feed); ok {
		result, err := rss.Fetch(feed.UpdateURL)
		if err != nil {
			c.Update(bson.M{"_id": feed.Id}, bson.M{"$set": bson.M{"errors": feed.Errors + 1}})
			return
		}

		// fill items
		var checksum []string
		var isupdated bool = false
		for _, value := range result.Items {
			item := new(Item)
			item.Title = value.Title
			item.Content = value.Content
			item.Summary = value.Summary
			item.Date = value.Date
			item.Link = value.Link
			item.FeedId = feed.Id

			var item_checksum = item.Checksum()

			// insert item
			if stringInSlice(item_checksum, feed.Checksum) == false {
				n.Insert(&item)
				isupdated = true
			}

			checksum = append(checksum, item_checksum)
		}
		
		var updated time.Time = time.Now()
		var period time.Duration = feed.Period
		if period == 0 {
			period = 15*time.Minute
		}
		
		if isupdated == false {
			period = period*2
		}

		// update feed info
		c.Update(bson.M{"_id": feed.Id}, bson.M{"$set": bson.M{
			"title":       result.Title,
			"description": result.Description,
			"link":        result.Link,
			"image": bson.M{
				"title":  result.Image.Title,
				"url":    result.Image.Url,
				"height": result.Image.Height,
				"width":  result.Image.Width,
			},
			"updated":  updated,
			"refresh": updated.Add(period)
			"period": period
			"checksum": checksum,
		}})

		fmt.Println(feed.Id)
	}
}

type Feed struct {
	Id          bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Title       string
	Description string
	Link        string
	UpdateURL   string
	GroupName   string
	Image       *Image
	Errors      uint
	Updated     time.Time
	Refresh     time.Time
	Period      time.Duration
	Checksum    []string
}

type Item struct {
	Id      bson.ObjectId `json:"id" bson:"_id,omitempty"`
	FeedId  bson.ObjectId `json:"feed_id" bson:"_feed_id,omitempty"`
	Title   string
	Summary string
	Content string
	Link    string
	Image   *Image
	Date    time.Time
}

func (this *Item) Checksum() string {
	hasher := md5.New()
	hasher.Write([]byte(this.Title))
	return hex.EncodeToString(hasher.Sum(nil))
}

type Image struct {
	Title  string
	Url    string
	Height uint32
	Width  uint32
}

// Check if string exists in slice
func stringInSlice(str string, list []string) bool {
	for _, v := range list {
		if v == str {
			return true
		}
	}
	return false
}

func main() {
	// get flags
	flag.StringVar(&CONFIG_PATH, "c", "", "PATH to ini file")
	flag.Parse()

	// parse config file
	err := ini.MapTo(config, CONFIG_PATH)
	if err != nil {
		panic("Could parse config file")
	}

	// connect to db
	session, err := mgo.Dial(strings.Join(config.Db, ","))
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	db = session.DB("rss")

	// start task manager
	tm.StartDispatcher(10, WorkQueue, ParseFeed)

	// get feeds
	c := db.C("feeds")
	var feeds []Feed
	//err = c.Find(bson.M{"_id": bson.ObjectIdHex("565e012cc321d3be0004ef0b")}).Limit(1).All(&feeds)
	err = c.Find(bson.M{}).Limit(10).All(&feeds)
	if err != nil {
		panic(err)
	}

	// parse feeds
	for i, value := range feeds {
		work := tm.WorkRequest{Id: i, Data: value}
		WorkQueue <- work
	}

	var input string
	fmt.Scanln(&input)
}
