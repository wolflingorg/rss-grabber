// Add tasks for parse
// Uses global variable "DB" and "config"
package main

import (
	"gopkg.in/mgo.v2/bson"
	tm "task-manager"
	"time"
)

func AddTasksHandler() {
	c := db.C("feeds")
	var feeds []Feed

	// try to find feeds to update
	limit := config.Parser.Tasks - tm.GetTasksCount()
	if limit <= 0 {
		LogInfo.Printf("Tasks didnt add. %d active tasks count\n", tm.GetTasksCount())
		return
	}

	err := c.Find(bson.M{
		"errors": bson.M{"$lt": 3},
		"_id":    bson.M{"$nin": tm.GetTasksIds()},
		"$or": []interface{}{
			bson.M{"refresh": bson.M{"$lte": time.Now()}},
			bson.M{"refresh": bson.M{"$exists": false}},
		},
	}).Limit(limit).All(&feeds)
	if err != nil {
		LogError.Fatalf("Couldnt get mongodb result %s\n", err)
	}

	// set feeds to work channel
	for _, value := range feeds {
		work := tm.WorkRequest{Id: value.Id, Data: value}
		tm.NewWork(work)
	}

	LogInfo.Printf("%d tasks added\n", len(feeds))
}
