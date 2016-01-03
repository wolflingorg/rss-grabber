// Structure of Item
package main

import (
	"crypto/md5"
	"encoding/hex"
	"github.com/SlyMarbo/rss"
	"github.com/opesun/goquery"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"strings"
	"time"
)

type Item struct {
	Id       bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Feed     mgo.DBRef
	Title    string
	Summary  string
	Content  string
	Link     string
	Image    *Image
	Date     time.Time
	Checksum string
	Lang     string
	Status   uint
	Errors   uint
	Category string
	Country  string
}

// Calculate item checksum
func (this *Item) calcChecksum() {
	hasher := md5.New()
	hasher.Write([]byte(this.Title))
	this.Checksum = hex.EncodeToString(hasher.Sum(nil))
}

// Create new Item
func NewItemFromRSS(rss_item *rss.Item, feed *Feed) Item {
	var item Item

	item.Lang = feed.Lang
	item.Title = rss_item.Title
	item.Content = rss_item.Content
	item.Summary = rss_item.Summary
	item.Date = time.Now()
	item.Link = rss_item.Link
	item.Feed = mgo.DBRef{
		Collection: "feeds",
		Id:         feed.Id,
	}
	item.Status = 1
	item.Errors = 0
	item.Country = feed.Country
	item.Category = feed.Category

	x, err := goquery.ParseString(rss_item.Content)
	if err == nil {
		// trying to find img
		if img := x.Find("img"); img != nil {

			item.Image = &Image{
				Url: img.Attr("src"),
			}
		}

		// clearing content
		item.Content = strings.TrimSpace(x.Text())
	}

	item.calcChecksum()

	return item
}
