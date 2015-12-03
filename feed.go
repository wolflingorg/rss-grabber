// Structure of Feed
package main

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

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
