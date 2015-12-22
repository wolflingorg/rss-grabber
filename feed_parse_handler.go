// Feed Parser
// Uses global variable "DB"
package main

import (
	"fmt"
	"github.com/SlyMarbo/rss"
	"gopkg.in/mgo.v2/bson"
	tm "task-manager"
	"time"
)

func FeedParseHandler(work tm.WorkRequest, worker_id int) {
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

		// prepare items
		var checksum []string
		var isupdated bool = false
		for _, value := range result.Items {
			item := NewItemFromRSS(value, &feed)

			if stringInSlice(item.Checksum, feed.Checksum) == false {
				n.Insert(&item)
				isupdated = true
			}

			checksum = append(checksum, item.Checksum)
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
