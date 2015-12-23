package main

import (
	"flag"
	"gopkg.in/mgo.v2"
	"log"
	"os"
	"strings"
	tm "task-manager"
	"time"
)

var (
	CONFIG_PATH string        // PATH to ini file
	config      = new(Config) // Config struct
	db          *mgo.Database // Data Base
	LogError    *log.Logger   // Error logger
	LogInfo     *log.Logger   // Info logger
)

func main() {
	// get flags
	flag.StringVar(&CONFIG_PATH, "c", "", "PATH to ini file")
	flag.Parse()

	// config
	LoadConfig(config, CONFIG_PATH)

	// log file
	f, err := os.OpenFile(config.LogPath, os.O_APPEND|os.O_CREATE|os.O_RDWR, 0666)
	if err != nil {
		log.Fatalf("Error opening log file: %s\n", err)
	}

	// loggers
	LogInfo = log.New(f,
		"INFO: ",
		log.Ldate|log.Ltime)
	LogError = log.New(f,
		"ERROR: ",
		log.Ldate|log.Ltime|log.Lshortfile)

	// connect to db
	session, err := mgo.Dial(strings.Join(config.Db.Host, ","))
	if err != nil {
		LogError.Fatalf("Couldnt connect to mongodb server %s", err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)
	db = session.DB("rss")

	// start task manager
	tm.StartDispatcher(config.Parser.Workers, FeedParseHandler)

	// parse feeds
	for {
		select {
		case <-time.After(config.Parser.Interval):
			AddTasksHandler()
		}
	}
}
