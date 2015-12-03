// Feed Parser
// Uses global variable "DB"
package main

import (
	"fmt"
	"github.com/SlyMarbo/rss"
	"github.com/opesun/goquery"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"strings"
	tm "task-manager"
	"time"
)

func FeedParseHandler(work tm.WorkRequest) {
	c := db.C("feeds")
	n := db.C("news")

	// check that work.Data equal Feed interface
	if feed, ok := work.Data.(Feed); ok {
		// try to get data from rss url
		result, err := rss.Fetch(feed.UpdateURL)
		if err != nil {
			c.Update(bson.M{"_id": feed.Id}, bson.M{"$set": bson.M{"errors": feed.Errors + 1}})
			return
		}

		// fill and insert items to db
		var checksum []string
		var isupdated bool = false
		for _, value := range result.Items {
			item := new(Item)
			item.Title = value.Title
			item.Content = value.Content
			item.Summary = value.Summary
			item.Date = value.Date
			item.Link = value.Link
			item.Feed = mgo.DBRef{
				Collection: "feeds",
				Id:         feed.Id,
			}

			x, err := goquery.ParseString(value.Content)
			if err == nil {
				// trying to find img
				if img := x.Find("img"); img != nil {

					item.Image = &Image{
						Title: value.Title,
						Url:   img.Attr("src"),
					}
				}

				// clearing content
				item.Content = strings.TrimSpace(x.Text())
			}

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

		// TODO refactor this
		// this part tries to decide how often we need to update this feed
		if isupdated == false {
			period = period * 2
		}

		if period == 0 {
			period = 15 * time.Minute
		}

		// update feed info
		c.Update(bson.M{"_id": feed.Id}, bson.M{"$set": bson.M{
			"title":       result.Title,
			"description": result.Description,
			"link":        result.Link,
			"image": bson.M{
				"title": result.Title,
				"url":   result.Image.Url,
			},
			"updated":  updated,
			"refresh":  updated.Add(period),
			"period":   period,
			"checksum": checksum,
		}})

		// TODO delete this
		fmt.Printf("\t- Parse feed %s finished\n", feed.Id)
	}
}
