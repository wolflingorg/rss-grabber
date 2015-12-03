package main

import (
	"flag"
	"gopkg.in/mgo.v2"
	"strings"
	tm "task-manager"
	"time"
)

var (
	CONFIG_PATH string              // PATH to ini file
	config      = new(Config)       // Config struct
	db          *mgo.Database       // Data Base
	WorkQueue   chan tm.WorkRequest // A buffered channel that we can send work requests on
)

func main() {
	// get flags
	flag.StringVar(&CONFIG_PATH, "c", "", "PATH to ini file")
	flag.Parse()

	// config
	LoadConfig(config, CONFIG_PATH)

	// channel for tasks
	WorkQueue = make(chan tm.WorkRequest, 10*config.Parser.Tasks)

	// connect to db
	session, err := mgo.Dial(strings.Join(config.Db.Host, ","))
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	db = session.DB("rss")

	// start task manager
	tm.StartDispatcher(config.Parser.Workers, WorkQueue, FeedParseHandler)

	// parse feeds
	for {
		select {
		case <-time.After(config.Parser.Interval):
			AddTasksHandler(config)
		}
	}
}
