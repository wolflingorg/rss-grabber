// Structure of Item
package main

import (
	"crypto/md5"
	"encoding/hex"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Item struct {
	Id      bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Feed    mgo.DBRef
	Title   string
	Summary string
	Content string
	Link    string
	Image   *Image
	Date    time.Time
}

// Calculate item checksum
func (this *Item) Checksum() string {
	hasher := md5.New()
	hasher.Write([]byte(this.Title))
	return hex.EncodeToString(hasher.Sum(nil))
}
