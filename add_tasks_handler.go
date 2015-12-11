// Add tasks for parse
// Uses global variable "DB" and "config"
package main

import (
	"fmt"
	"gopkg.in/mgo.v2/bson"
	tm "task-manager"
	"time"
)

func AddTasksHandler() {
	c := db.C("feeds")
	var feeds []Feed

	// try to find feeds to update
	err := c.Find(bson.M{
		"errors": bson.M{"$lt": 3},
		"$or": []interface{}{
			bson.M{"refresh": bson.M{"$lte": time.Now()}},
			bson.M{"refresh": bson.M{"$exists": false}},
		},
	}).Limit(config.Parser.Tasks).All(&feeds)
	if err != nil {
		panic(err)
	}

	// set feeds to work channel
	for i, value := range feeds {
		work := tm.WorkRequest{Id: i, Data: value}
		WorkQueue <- work
	}

	// TODO delete this
	fmt.Printf("\n%d tasks added\n", len(feeds))
}
