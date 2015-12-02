
/** feeds indexes **/
db.getCollection("feeds").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** feeds records **/
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0077c321d3be0004e2d3"),
  "title": "USATODAY.com Travel",
  "groupname": "USATODAY.com",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomTravel-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0077c321d3be0004e2d4"),
  "title": "USATODAY.com Sports",
  "groupname": "USATODAY.com",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomSports-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2d5"),
  "title": "CNN - Technology",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_technology.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2d6"),
  "title": "cnn - Science &amp; Space",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_space.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2d8"),
  "title": "CNN-World Business",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2d9"),
  "title": "cnn - Entertainment",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2da"),
  "title": "cnn - World Sport",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2db"),
  "title": "cnn - Middle East",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_meast.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2dc"),
  "title": "cnn - Europe",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_europe.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2dd"),
  "title": "cnn - Travel",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_travel.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2df"),
  "title": "BBC-News",
  "groupname": "BBC-News",
  "updateurl": "http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e0"),
  "title": "Fox-news - politics",
  "groupname": "Fox-news",
  "updateurl": "http://feeds.foxnews.com/foxnews/politics?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e1"),
  "title": "time.com-since",
  "groupname": "time.com",
  "updateurl": "http://feeds2.feedburner.com/time/scienceandhealth",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e2"),
  "title": "businessweek",
  "groupname": "businessweek",
  "updateurl": "http://www.businessweek.com/rss/bwdaily.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e3"),
  "title": "time.com - entertainment",
  "groupname": "time.com",
  "updateurl": "http://feeds2.feedburner.com/time/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e4"),
  "title": "Washington post - politics",
  "groupname": "Washington post",
  "updateurl": "http://feeds.washingtonpost.com/rss/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e5"),
  "title": "cbsnews",
  "groupname": "cbsnews",
  "updateurl": "http://feeds.cbsnews.com/CBSNewsWorld?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2e6"),
  "title": "New York Times - local",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/US",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2e7"),
  "title": "New York Times - World",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/World",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2e8"),
  "title": "New York Times - Business",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/Business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2e9"),
  "title": "New York Times - Sports",
  "groupname": "New York Times",
  "updateurl": "http://feeds1.nytimes.com/nyt/rss/Sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2ea"),
  "title": "New York Times - Science",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/Science",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2eb"),
  "title": "New York Times - Health",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/Health",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2ec"),
  "title": "AJC Atlanta News - world",
  "groupname": "AJC Atlanta News",
  "updateurl": "http://www.ajc.com/section-rss.do?source=nation-world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2ed"),
  "title": "New York Times - Lifestyle art&amp;design",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/ArtandDesign",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2ee"),
  "title": "New York Times - Lifestyle art&amp;design",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/ArtandDesign",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2ef"),
  "title": "New York Times - Travel",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/Travel",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f0"),
  "title": "Wall Street Journal - world",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7085.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f1"),
  "title": "Wall Street Journal - Nee York",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7730.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f2"),
  "title": "Wall Street Journal - Busines",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7014.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f3"),
  "title": "Wall Street Journal - tehnology",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7455.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f4"),
  "title": "Wall Street Journal - lifestyle",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7201.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f5"),
  "title": "cbsnews - politics",
  "groupname": "cbsnews",
  "updateurl": "http://feeds.cbsnews.com/CBSNewsPolitics?tag=contentMain%3bcontentBody",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f6"),
  "title": "cbsnews - business",
  "groupname": "cbsnews",
  "updateurl": "http://feeds.cbsnews.com/CBSNewsBusiness?tag=contentMain%3bcontentBody",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f7"),
  "title": "cbsnews - local",
  "groupname": "cbsnews",
  "updateurl": "http://feeds.cbsnews.com/CBSNewsNational?tag=contentMain%3bcontentBody",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0079c321d3be0004e2f8"),
  "title": "politico.com",
  "groupname": "politico",
  "updateurl": "http://feeds.politico.com/politico/rss/congress",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2f9"),
  "title": "usatoday - politics",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomWashington-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2fa"),
  "title": "usatoday - world",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomWorld-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2fb"),
  "title": "usatoday - health",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomHealth-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2fc"),
  "title": "usatoday - local politics",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/TP-OnPolitics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2fd"),
  "title": "usatoday - sports",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomSports-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2fe"),
  "title": "usatoday - sports NBA",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomNba-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e2ff"),
  "title": "usatoday - sports boxing",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomBoxing-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e300"),
  "title": "usatoday - tehnology",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/usatoday-TechTopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e301"),
  "title": "usatoday - scince",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomScienceAndSpace-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e302"),
  "title": "usatoday - tehnology",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/TP-TechnologyLive",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e303"),
  "title": "usatoday - travel",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/UsatodaycomTravel-TopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e304"),
  "title": "usatoday - entertainment",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/usatoday-LifeTopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e305"),
  "title": "usatoday - entertainment books",
  "groupname": "usatoday",
  "updateurl": "http://rssfeeds.usatoday.com/usatoday-LifeTopStories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e306"),
  "title": "Daily News - News",
  "groupname": "Daily News",
  "updateurl": "http://feeds.feedburner.com/nydnrss/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e307"),
  "title": "detroitnews - business",
  "groupname": "detroitnews",
  "updateurl": "http://www.detroitnews.com/apps/pbcs.dll/section?category=rss21&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e308"),
  "title": "detroitnews - lifestile",
  "groupname": "detroitnews",
  "updateurl": "http://www.detroitnews.com/apps/pbcs.dll/section?category=rss32&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e309"),
  "title": "detroitnews - health",
  "groupname": "detroitnews",
  "updateurl": "http://www.detroitnews.com/apps/pbcs.dll/section?category=rss34&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ac321d3be0004e30a"),
  "title": "reuters - business",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/businessNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e30b"),
  "title": "reuters - business travel",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/ReutersBusinessTravel?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e30c"),
  "title": "reuters - entertainment",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e30d"),
  "title": "reuters - health",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/healthNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e30e"),
  "title": "reuters - lifestile",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/lifestyle?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e30f"),
  "title": "reuters - finance",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/USpersonalfinanceNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e310"),
  "title": "reuters - politics",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/Reuters/PoliticsNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e311"),
  "title": "reuters - scinence",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/scienceNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e312"),
  "title": "reuters - sports",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/sportsNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e313"),
  "title": "reuters - tecnology",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/reuters/technologyNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e314"),
  "title": "New York Times - politics",
  "groupname": "New York Times",
  "updateurl": "http://feeds.nytimes.com/nyt/rss/Politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e315"),
  "title": "reuters - U.S.",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/Reuters/domesticNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e316"),
  "title": "reuters - world",
  "groupname": "reuters",
  "updateurl": "http://feeds.reuters.com/Reuters/worldNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e317"),
  "title": "suntime - Chicago",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/news/cityhall",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e318"),
  "title": "suntime - sport",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e319"),
  "title": "suntime - business",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e31a"),
  "title": "suntime - lifestile",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/lifestyles",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007bc321d3be0004e31b"),
  "title": "suntime - entertainment",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e31c"),
  "title": "guardian - world",
  "groupname": "guardian",
  "updateurl": "http://www.guardian.co.uk/world/usa/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e31d"),
  "title": "guardian - sports",
  "groupname": "guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/sport/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e31e"),
  "title": "guardian - business",
  "groupname": "guardian",
  "updateurl": "http://www.guardian.co.uk/business/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e31f"),
  "title": "guardian - lifestyle",
  "groupname": "guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/lifeandstyle/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e320"),
  "title": "Los Angeles times- natinonal politics",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e321"),
  "title": "Los Angeles times- california politics",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/news/local/politics/cal/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e322"),
  "title": "Los Angeles times- business",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e323"),
  "title": "Los Angeles times- scienes",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/news/science",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e324"),
  "title": "Los Angeles times- technology",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e325"),
  "title": "Los Angeles times- world",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/news/nationworld/world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e326"),
  "title": "Los Angeles times- world news",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/middleeast",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e327"),
  "title": "Los Angeles times- world latinamerica",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/latinamerica",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e328"),
  "title": "Los Angeles times- world europe",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/europe",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e329"),
  "title": "Los Angeles times- sports",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e32a"),
  "title": "Los Angeles times- entertainment",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.feedburner.com/latimes/entertainment/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e32b"),
  "title": "Los Angeles times- health",
  "groupname": "Los Angeles times",
  "updateurl": "http://feeds.latimes.com/latimes/features/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007cc321d3be0004e32c"),
  "title": "financial times",
  "groupname": "financial times",
  "updateurl": "http://www.ft.com/rss/home/us",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e32d"),
  "title": "kansascity.com - local news",
  "groupname": "kansascity.com",
  "updateurl": "http://www.kansascity.com/news/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e32e"),
  "title": "kansascity.com - local news technology",
  "groupname": "kansascity.com",
  "updateurl": "http://www.kansascity.com/business/technology/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e32f"),
  "title": "kansascity.com - world",
  "groupname": "kansascity.com",
  "updateurl": "http://www.kansascity.com/news/world/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e330"),
  "title": "kansascity.com -  sports",
  "groupname": "kansascity.com",
  "updateurl": "http://www.kansascity.com/sports/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e331"),
  "title": "kansascity.com -  entertainment",
  "groupname": "kansascity.com",
  "updateurl": "http://www.kansascity.com/entertainment/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e332"),
  "title": "espn - sports nba",
  "groupname": "espn",
  "updateurl": "http://sports.espn.go.com/espn/rss/nba/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e333"),
  "title": "espn - sports nfl",
  "groupname": "espn",
  "updateurl": "http://sports.espn.go.com/espn/rss/nfl/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e334"),
  "title": "espn College Basketball",
  "groupname": "espn",
  "updateurl": "http://sports.espn.go.com/espn/rss/ncb/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e335"),
  "title": "philly.com - news",
  "groupname": "philly.com",
  "updateurl": "http://www.philly.com/philly_news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e336"),
  "title": "msnbc - local  news",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3032524/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e337"),
  "title": "msnbc - world",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3032506/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e338"),
  "title": "msnbc - politics",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3032552/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e339"),
  "title": "msnbc - spports",
  "groupname": "msnbc",
  "updateurl": "http://rss.nbcsports.msnbc.com/id/3032112/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e33a"),
  "title": "msnbs - business",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3032071/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e33b"),
  "title": "msnbc - entertainment",
  "groupname": "msnbc",
  "updateurl": "http://today.msnbc.msn.com/id/3032083/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e33c"),
  "title": "msnbc - health",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3088327/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007dc321d3be0004e33d"),
  "title": "msnbc - tecnology",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3032117/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e33e"),
  "title": "msnbc - travel",
  "groupname": "msnbc",
  "updateurl": "http://rss.msnbc.msn.com/id/3032122/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e33f"),
  "title": "AJC Atlanta News - local sport",
  "groupname": "AJC Atlanta News",
  "updateurl": "http://www.ajc.com/genericList-rss.do?source=61510",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e340"),
  "title": "Accessatlanta - entertainment",
  "groupname": "Accessatlanta",
  "updateurl": "http://www.accessatlanta.com/section-rss.do?source=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e341"),
  "title": "AJC Atlanta News - local travel",
  "groupname": "AJC Atlanta News",
  "updateurl": "http://www.ajc.com/genericList-rss.do?source=61542",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e342"),
  "title": "AJC Atlanta News - business",
  "groupname": "AJC Atlanta News",
  "updateurl": "http://www.ajc.com/genericList-rss.do?source=94547",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e343"),
  "title": "AJC Atlanta News - lifestyle",
  "groupname": "AJC Atlanta News",
  "updateurl": "http://www.ajc.com/section-rss.do?source=lifestyle",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e344"),
  "title": "sfgate",
  "groupname": "",
  "updateurl": "http://feeds.sfgate.com/sfgate/rss/feeds/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e345"),
  "title": "newsmax - science",
  "groupname": "newsmax",
  "updateurl": "http://www.newsmax.com/SciTech/SuperBowl-LiveStream/2012/02/07/id/428740",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e346"),
  "title": "examiner.com -  local politics",
  "groupname": "examiner.com",
  "updateurl": "https://www.examiner.com/rss/recent/birmingham",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e347"),
  "title": "new york post",
  "groupname": "new york post",
  "updateurl": "http://www.nypost.com/rss/all_section.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e348"),
  "title": "newsmax - politix",
  "groupname": "newsmax",
  "updateurl": "http://www.newsmax.com/rss/Politics/1.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e349"),
  "title": "npr - local news",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e34a"),
  "title": "npr - politics",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1014",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e34b"),
  "title": "npr - local politics",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1003",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e34d"),
  "title": "npr - scienes",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1007",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e34e"),
  "title": "npr - lifestyle",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1008",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e34f"),
  "title": "npr - technology",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1019",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e351"),
  "title": "Wired.com - technology",
  "groupname": "Wired.com",
  "updateurl": "http://feeds.wired.com/wired/index",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e352"),
  "title": "Access Hollywood - entertainment",
  "groupname": "Access Hollywood",
  "updateurl": "http://www.accesshollywood.com/content/xml/rss/movies-originals.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e353"),
  "title": "Voanews - Middle East",
  "groupname": "Voanews",
  "updateurl": "http://www.voanews.com/templates/Articles.rss?sectionPath=/english/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e354"),
  "title": "voanews - local politics",
  "groupname": "voanews",
  "updateurl": "http://www.voanews.com/templates/Articles.rss?sectionPath=/english/news/usa",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e355"),
  "title": "voanews - entertainment",
  "groupname": "voanews",
  "updateurl": "http://www.voanews.com/templates/Articles.rss?sectionPath=/english/news/arts-and-entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e356"),
  "title": "voanews - economy",
  "groupname": "voanews",
  "updateurl": "http://www.voanews.com/templates/Articles.rss?sectionPath=/english/news/economy-and-business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e357"),
  "title": "mercury news local news",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200735.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e358"),
  "title": "mercury news - world",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200737.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e359"),
  "title": "mercury news - politics",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200740.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e35a"),
  "title": "mercury news - health",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200743.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e35b"),
  "title": "mercury news - business",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200222.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e35c"),
  "title": "mercury news - financial",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200768.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e35d"),
  "title": "mercury news - sports",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200223.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e35e"),
  "title": "mercury news - entertainment",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200733.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e35f"),
  "title": "mercury news - lifestyle",
  "groupname": "mercury news",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200948.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e360"),
  "title": "chicagotribune -  local news",
  "groupname": "chicagotribune",
  "updateurl": "http://feeds.chicagotribune.com/chicagotribune/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e361"),
  "title": "chicagotribune - world",
  "groupname": "chicagotribune",
  "updateurl": "http://feeds.chicagotribune.com/chicagotribune/news/nationworld/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e362"),
  "title": "chicagotribune - business",
  "groupname": "chicagotribune",
  "updateurl": "http://feeds.feedburner.com/chicagotribune/chicagobreakingbusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e363"),
  "title": "chicagotribune -  entertainment",
  "groupname": "chicagotribune",
  "updateurl": "http://feeds.chicagotribune.com/chicagotribune/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e364"),
  "title": "chicagotribune -  travel",
  "groupname": "chicagotribune",
  "updateurl": "http://feeds.chicagotribune.com/chicagotribune/travel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e365"),
  "title": "chicagotribune -  health",
  "groupname": "chicagotribune",
  "updateurl": "http://feeds.feedburner.com/chicagotribune/health",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e366"),
  "title": "dispatch.com - local news",
  "groupname": "dispatch.com",
  "updateurl": "http://www.dispatch.com/content/syndication/news_local-state.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e367"),
  "title": "dispatch.com - business",
  "groupname": "dispatch.com",
  "updateurl": "http://www.dispatch.com/content/syndication/news_business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e368"),
  "title": "dispatch.com - health",
  "groupname": "dispatch.com",
  "updateurl": "http://www.dispatch.com/content/syndication/news_health.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e369"),
  "title": "dispatch.com - scienes",
  "groupname": "dispatch.com",
  "updateurl": "http://www.dispatch.com/content/syndication/news_science.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e36a"),
  "title": "huffingtonpost - politics",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/politics/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e36b"),
  "title": "huffingtonpost - business",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/business/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e36c"),
  "title": "huffingtonpost - entertainment",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/entertainment/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e36d"),
  "title": "huffingtonpost - world",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/world/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e36e"),
  "title": "huffingtonpost - travel",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/travel/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e36f"),
  "title": "huffingtonpost - technology",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/technology/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e370"),
  "title": "huffingtonpost - sports",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/sports/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0080c321d3be0004e371"),
  "title": "huffingtonpost - sciness",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/science/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e372"),
  "title": "huffingtonpost - lifestyle",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/stylelist/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e373"),
  "title": "huffingtonpost - lifestyle weddings",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/weddings/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e374"),
  "title": "huffingtonpost - locsl news Detroit",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/detroit/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e375"),
  "title": "huffingtonpost - locsl news Miami",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/miami/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e376"),
  "title": "huffingtonpost - lifestyle kitchen",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/kitchendaily/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e377"),
  "title": "huffingtonpost - lifestyle home",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/stylelist-home/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e378"),
  "title": "huffingtonpost - local  small business",
  "groupname": "huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/small-business/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e379"),
  "title": "usnews - local USA news",
  "groupname": "usnews",
  "updateurl": "http://www.usnews.com/rss/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e37a"),
  "title": "usnews - health",
  "groupname": "usnews",
  "updateurl": "http://www.usnews.com/rss/health-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e37c"),
  "title": "usnews - scines",
  "groupname": "usnews",
  "updateurl": "http://www.usnews.com/rss/science",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e37d"),
  "title": "usnews - education",
  "groupname": "usnews",
  "updateurl": "http://www.usnews.com/rss/education",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e380"),
  "title": "Atlantic - politics",
  "groupname": "Atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticPoliticsChannel",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e381"),
  "title": "Atlantic - business",
  "groupname": "Atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticBusinessChannel",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e382"),
  "title": "Atlantic - entertainment",
  "groupname": "Atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticCulture",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e383"),
  "title": "atlantic world",
  "groupname": "atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticInternational",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e384"),
  "title": "atlantic technology",
  "groupname": "atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticScienceAndTechnology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e385"),
  "title": "Atlantic - national",
  "groupname": "Atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticNational",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e386"),
  "title": "Atlantic - health",
  "groupname": "Atlantic",
  "updateurl": "http://feeds.feedburner.com/AtlanticFood?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e387"),
  "title": "chron.com local news",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/rss/feed/News-270.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e388"),
  "title": "chron.com local politic",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/rss/feed/Politics-275.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e389"),
  "title": "chron.com local sport",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/sports/headlines/collectionRss/Sports-Headlines-Staff-Stories-10767.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e38a"),
  "title": "chron.com business",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/rss/feed/Business-287.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e38b"),
  "title": "chron.com entertainment",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/rss/feed/Entertainment-293.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e38c"),
  "title": "chron.com life",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/rss/feed/Life-297.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e38d"),
  "title": "chron.com science",
  "groupname": "chron.com",
  "updateurl": "http://www.chron.com/rss/feed/AP-Technology-and-Science-266.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e38e"),
  "title": "cnet - technology",
  "groupname": "cnet.",
  "updateurl": "http://news.cnet.com/2547-1001_3-0-5.xml?tag=txt",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e38f"),
  "title": "cnet -  technology for health",
  "groupname": "cnet.",
  "updateurl": "http://news.cnet.com/8300-27083_3-247.xml?tag=txt",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e390"),
  "title": "nj.com - local news",
  "groupname": "nj.com",
  "updateurl": "http://blog.nj.com/ledgerupdates_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e391"),
  "title": "nj.com - entertainment",
  "groupname": "nj.com",
  "updateurl": "http://blog.nj.com/entertainment_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e392"),
  "title": "washingtontimes -  world",
  "groupname": "washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/news/world/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0082c321d3be0004e393"),
  "title": "nj.com - sports",
  "groupname": "nj.com",
  "updateurl": "http://blog.nj.com/realtimesports_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e394"),
  "title": "washingtontimes -  entertainment",
  "groupname": "washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/culture/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e395"),
  "title": "washingtontimes -  health",
  "groupname": "washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/culture/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e396"),
  "title": "washingtontimes -  travel",
  "groupname": "washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/culture/travel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e397"),
  "title": "washingtontimes -  technology",
  "groupname": "washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/culture/technology/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e398"),
  "title": "wasingtontimes - local news",
  "groupname": "washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e399"),
  "title": "timesunion - business",
  "groupname": "timesunion",
  "updateurl": "http://www.timesunion.com/business/feed/Business-Verve-RSS-213.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e39a"),
  "title": "timesunion - local news",
  "groupname": "timesunion",
  "updateurl": "http://www.timesunion.com/news/feed/Local-News-193.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e39b"),
  "title": "timesunion - sports",
  "groupname": "timesunion",
  "updateurl": "http://www.timesunion.com/default/feed/timesunion-com-Sports-Headlines-64.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e39c"),
  "title": "timesunion - world",
  "groupname": "timesunion",
  "updateurl": "http://www.timesunion.com/news/feed/World-Verve-RSS-212.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e39d"),
  "title": "timesunion - entertainment",
  "groupname": "timesunion",
  "updateurl": "http://www.timesunion.com/entertainment/feed/Entertainment-Verve-RSS-214.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e39e"),
  "title": "Washingtontimes - business",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/news/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e39f"),
  "title": "Washingtontimes - politics",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e3a0"),
  "title": "Washingtontimes - economy",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/news/economy/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e3a1"),
  "title": "Washingtontimes - foottball sport",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/football/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e3a2"),
  "title": "Washingtontimes - hockey sport",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/hockey/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e3a3"),
  "title": "Washingtontimes - olimpics sport",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/olympics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0083c321d3be0004e3a4"),
  "title": "Washingtontimes - basketball sport",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/basketball/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3a5"),
  "title": "Washingtontimes - Tennis sport",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/tennis/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3a6"),
  "title": "Washingtontimes - local sport",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/washington-nationals/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3a7"),
  "title": "Washingtontimes - news ncaa",
  "groupname": "Washingtontimes",
  "updateurl": "http://www.washingtontimes.com/rss/headlines/sports/ncaa/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3a8"),
  "title": "Startribune - local news",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3a9"),
  "title": "Startribune - world news",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/world/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3aa"),
  "title": "Startribune - nation news",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/nation/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3ab"),
  "title": "Startribune - sports",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3ac"),
  "title": "Startribune - business",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3ad"),
  "title": "Startribune - economy",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/business/economy/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3ae"),
  "title": "Startribune - politics",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3af"),
  "title": "Startribune - lifestyle",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/lifestyle/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3b0"),
  "title": "Startribune - Travel",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/lifestyle/travel/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3b1"),
  "title": "Startribune - entertainment",
  "groupname": "Startribune",
  "updateurl": "http://www.startribune.com/entertainment/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3b2"),
  "title": "Sacbee.com -  business",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/business/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3b3"),
  "title": "Sacbee.com -  state news",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/state/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3b4"),
  "title": "Sacbee.com -  local news",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/local/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0084c321d3be0004e3b5"),
  "title": "Sacbee.com -  world news",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/830/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3b6"),
  "title": "Sacbee.com -  fitness &amp; health",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/273/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3b7"),
  "title": "Sacbee.com -  travel",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/273/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3b8"),
  "title": "Sacbee.com -  entertainmenet music news",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/music/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3b9"),
  "title": "Sacbee.com -  entertainmenet books &amp; media news",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/books/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3ba"),
  "title": "Sacbee.com -  entertainmenet teatre news",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/onstage/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3bb"),
  "title": "Sacbee.com -  golf sport",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/golf/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3bc"),
  "title": "Sacbee.com -  baseball sport",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/baseball/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3bd"),
  "title": "Sacbee.com -  basketball sport",
  "groupname": "Sacbee.com",
  "updateurl": "http://www.sacbee.com/kings/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c4"),
  "title": "Stltoday - local news",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=news%2Flocal&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c6"),
  "title": "Freep.com local news",
  "groupname": "Freep.com",
  "updateurl": "http://www.freep.com/apps/pbcs.dll/section?category=news&amp;template=rss&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3c7"),
  "title": "Freep.com business",
  "groupname": "Freep.com",
  "updateurl": "http://www.freep.com/apps/pbcs.dll/section?category=business&amp;template=rss&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3c8"),
  "title": "Freep.com sports",
  "groupname": "Freep.com",
  "updateurl": "http://www.freep.com/apps/pbcs.dll/section?category=sports&amp;template=rss&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3c9"),
  "title": "Asbury Park Press - sports",
  "groupname": "Asbury Park Press",
  "updateurl": "http://www.app.com/section/SPORTS&amp;template=rss_app",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3ca"),
  "title": "Asbury Park Press - local New Jersey news",
  "groupname": "Asbury Park Press",
  "updateurl": "http://www.app.com/section/NEWS03&amp;template=rss_app",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3cb"),
  "title": "Asbury Park Press - Business",
  "groupname": "Asbury Park Press",
  "updateurl": "http://www.app.com/section/BUSINESS&amp;template=rss_app",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3cc"),
  "title": "Asbury Park Press - entertainment",
  "groupname": "Asbury Park Press",
  "updateurl": "http://www.app.com/section/ENT&amp;template=rss_app",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3cd"),
  "title": "Modbee.com local news",
  "groupname": "Modbee.com",
  "updateurl": "http://www.modbee.com/local/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3ce"),
  "title": "Modbee.com world news",
  "groupname": "Modbee.com",
  "updateurl": "http://www.modbee.com/world/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3cf"),
  "title": "Modbee.com national news",
  "groupname": "Modbee.com",
  "updateurl": "http://www.modbee.com/news/national/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d0"),
  "title": "Modbee.com local sports",
  "groupname": "Modbee.com",
  "updateurl": "http://www.modbee.com/sports/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d1"),
  "title": "Modbee.com national sports",
  "groupname": "Modbee.com",
  "updateurl": "http://www.modbee.com/sports/national/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d2"),
  "title": "Onenewsnow - local news",
  "groupname": "Onenewsnow",
  "updateurl": "http://www.onenewsnow.com/rss/your_world.aspx?id=526",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d3"),
  "title": "Newsday - local news",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1250338",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d4"),
  "title": "Newsday - entertainment",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1250364",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d5"),
  "title": "Newsday - travel",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1252092",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0086c321d3be0004e3d6"),
  "title": "Newsday - sports",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1250359",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3d7"),
  "title": "Newsday - world",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1284874",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3d8"),
  "title": "Newsday - business",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1251986",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3d9"),
  "title": "Newsday - Health",
  "groupname": "Newsday",
  "updateurl": "http://www.newsday.com/cmlink/1.1250343",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3da"),
  "title": "Onenewsnow - world",
  "groupname": "Onenewsnow",
  "updateurl": "http://www.onenewsnow.com/rss/your_world.aspx?id=528",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3db"),
  "title": "Onenewsnow - Business",
  "groupname": "Onenewsnow",
  "updateurl": "http://www.onenewsnow.com/rss/your_world.aspx?id=500",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3dc"),
  "title": "Onenewsnow - Politics",
  "groupname": "Onenewsnow.",
  "updateurl": "http://www.onenewsnow.com/rss/your_world.aspx?id=554",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3dd"),
  "title": "Onenewsnow - sports",
  "groupname": "Onenewsnow",
  "updateurl": "http://www.onenewsnow.com/rss/your_world.aspx?id=538",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3de"),
  "title": "Cleveland.com - realtimenews",
  "groupname": "Cleveland.com",
  "updateurl": "http://blog.cleveland.com/realtimenews/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3df"),
  "title": "Cleveland.com - health",
  "groupname": "Cleveland.com",
  "updateurl": "http://blog.cleveland.com/health_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e0"),
  "title": "Cleveland.com - business",
  "groupname": "Cleveland.com",
  "updateurl": "http://blog.cleveland.com/business_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e1"),
  "title": "Cleveland.com - sports",
  "groupname": "Cleveland.com",
  "updateurl": "http://blog.cleveland.com/sports_impact/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e2"),
  "title": "Springfieldnewssun - local news",
  "groupname": "Springfieldnewssun",
  "updateurl": "http://www.springfieldnewssun.com/section-rss.do?source=local-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e3"),
  "title": "Springfieldnewssun - business",
  "groupname": "Springfieldnewssun",
  "updateurl": "http://www.springfieldnewssun.com/section-rss.do?source=business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e4"),
  "title": "Springfieldnewssun - local &amp; national news",
  "groupname": "Springfieldnewssun",
  "updateurl": "http://www.springfieldnewssun.com/section-rss.do?source=local-news&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e5"),
  "title": "Realclearpolitics",
  "groupname": "Realclearpolitics",
  "updateurl": "http://www.realclearpolitics.com/video/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0087c321d3be0004e3e6"),
  "title": "King5.com - business",
  "groupname": "King5.com",
  "updateurl": "http://www.king5.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3e7"),
  "title": "King5.com - local news",
  "groupname": "King5.com",
  "updateurl": "http://www.king5.com/news/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3e8"),
  "title": "King5.com - Politics",
  "groupname": "King5.com",
  "updateurl": "http://www.king5.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3e9"),
  "title": "King5.com - sports 1",
  "groupname": "King5.com",
  "updateurl": "http://www.king5.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3ea"),
  "title": "King5.com - seattle news",
  "groupname": "King5.com",
  "updateurl": "http://www.king5.com/news/cities/seattle/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3eb"),
  "title": "Salon.com - politics",
  "groupname": "Salon.com",
  "updateurl": "http://politics.salon.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3ec"),
  "title": "Salon.com - entertainment",
  "groupname": "Salon.com",
  "updateurl": "http://entertainment.salon.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3ee"),
  "title": "Newshour - local sports",
  "groupname": "",
  "updateurl": "http://www.pbs.org/newshour/rss/sports.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3ef"),
  "title": "Newshour - local news",
  "groupname": "Newshour",
  "updateurl": "http://feeds.feedburner.com/NewshourHeadlines?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f0"),
  "title": "Newshour - world",
  "groupname": "Newshour",
  "updateurl": "http://feeds.feedburner.com/NewshourWorld?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f1"),
  "title": "Newshour - scines",
  "groupname": "Newshour",
  "updateurl": "http://www.pbs.org/newshour/rss/science.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f2"),
  "title": "Globegazette local news",
  "groupname": "Globegazette",
  "updateurl": "http://globegazette.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f3"),
  "title": "Globegazette national news",
  "groupname": "Globegazette",
  "updateurl": "http://globegazette.com/search/?f=rss&amp;t=article&amp;c=news/national&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f4"),
  "title": "Globegazette world news",
  "groupname": "Globegazette",
  "updateurl": "http://globegazette.com/search/?f=rss&amp;t=article&amp;c=news/world&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f5"),
  "title": "Globegazette local sports",
  "groupname": "Globegazette",
  "updateurl": "http://globegazette.com/search/?f=rss&amp;t=article&amp;c=sports&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3f6"),
  "title": "Seattlepi.com local news",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/local/feed/seattlepi-com-Local-News-218.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3f7"),
  "title": "Seattlepi.com business",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/business/collectionRss/Business-Heds-Index-9144.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3f8"),
  "title": "Seattlepi.com sports Mariners-MLB",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/sports/baseball/collectionRss/Sports-Mariners-MLB-Heds-9207.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3f9"),
  "title": "Seattlepi.com Sports-Seahawks-NFL",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/sports/football/collectionRss/Sports-Seahawks-NFL-Heds-9211.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3fa"),
  "title": "Seattlepi.com Life-Heds",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/lifestyle/collectionRss/Life-Heds-Index-9217.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3fb"),
  "title": "Seattlepi.com -Health",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/lifestyle/health/collectionRss/Life-Health-Heds-Index-9204.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3fc"),
  "title": "Seattlepi.com - entertainment",
  "groupname": "Seattlepi.com",
  "updateurl": "http://www.seattlepi.com/ae/collectionRss/A-E-Heds-9147.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3fd"),
  "title": "Entertainment Weekly",
  "groupname": "Entertainment Weekly",
  "updateurl": "http://feeds.ew.com/entertainmentweekly/latest",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3fe"),
  "title": "Entertainment Weekly - popwatch",
  "groupname": "Entertainment Weekly",
  "updateurl": "http://feeds.ew.com/ew/popwatch",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e3ff"),
  "title": "Thehill.com -  politics",
  "groupname": "Thehill.com",
  "updateurl": "http://thehill.com/index.php?option=com_rss-syndicator&amp;feed_id=5",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e400"),
  "title": "Thehill.com -  politics 2",
  "groupname": "Thehill.com",
  "updateurl": "http://thehill.com/index.php?option=com_rss-syndicator&amp;feed_id=29",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e401"),
  "title": "News-leader.com - business",
  "groupname": "News-leader.com",
  "updateurl": "http://www.news-leader.com/apps/pbcs.dll/section?category=RSS03&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e402"),
  "title": "News-leader.com - entertainment",
  "groupname": "News-leader.com",
  "updateurl": "http://www.news-leader.com/apps/pbcs.dll/section?category=RSS04&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e403"),
  "title": "News-leader.com - sports",
  "groupname": "News-leader.com",
  "updateurl": "http://www.news-leader.com/apps/pbcs.dll/section?category=RSS02&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e404"),
  "title": "Courant - politics",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-politics?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e405"),
  "title": "Courant-business",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e406"),
  "title": "Courant - Health",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-health",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e407"),
  "title": "Courant-nation-world",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-nation-world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0089c321d3be0004e408"),
  "title": "Courant-sports",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e409"),
  "title": "Courant-entertainment",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e40a"),
  "title": "Courant home-garden",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-home-garden",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e40b"),
  "title": "Courant-food",
  "groupname": "Courant",
  "updateurl": "http://feeds.feedburner.com/courant-food",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e40c"),
  "title": "Orlandosentine - local news",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds2.feedburner.com/orlandosentinelbreakingnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e40d"),
  "title": "Orlandosentinel - business",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e40e"),
  "title": "Orlandosentinel news",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e40f"),
  "title": "Orlandosentinel news state",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/news/local/state",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e410"),
  "title": "Orlandosentinel - technology",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e411"),
  "title": "Orlandosentinel entertainment",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e412"),
  "title": "Orlandosentine - sports miaimi dolphins",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/dolphins",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e413"),
  "title": "Orlandosentine - sports",
  "groupname": "Orlandosentine",
  "updateurl": "http://feeds.feedburner.com/orlandosentinel/sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e414"),
  "title": "Morningcall news local",
  "groupname": "Morningcall",
  "updateurl": "http://feeds.feedburner.com/morningcall/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e415"),
  "title": "Morningcall sports",
  "groupname": "Morningcall",
  "updateurl": "http://feeds.feedburner.com/morningcall/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e416"),
  "title": "Morningcall - entertainment",
  "groupname": "Morningcall",
  "updateurl": "http://feeds.feedburner.com/morningcall/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e417"),
  "title": "Morningcall - business",
  "groupname": "Morningcall",
  "updateurl": "http://feeds.feedburner.com/morningcall/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e418"),
  "title": "Dailypress - entertainment",
  "groupname": "Dailypress",
  "updateurl": "http://feeds.feedburner.com/hrdailypress/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e419"),
  "title": "Dailypress - news",
  "groupname": "Dailypress",
  "updateurl": "http://feeds2.feedburner.com/Dailypresscom-HamptonRoadsBreakingNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ac321d3be0004e41a"),
  "title": "Dailypress - world news",
  "groupname": "Dailypress",
  "updateurl": "http://feeds.feedburner.com/hrdailypress/news/nationworld",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e41b"),
  "title": "Dailypress - politics",
  "groupname": "Dailypress",
  "updateurl": "http://www.dailypress.com/news/politics/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e41c"),
  "title": "Dailypress - local business news",
  "groupname": "Dailypress",
  "updateurl": "http://feeds2.feedburner.com/hrdailypress/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e41d"),
  "title": "Dailypress - sports",
  "groupname": "Dailypress",
  "updateurl": "http://feeds2.feedburner.com/hrdailypress/sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e41e"),
  "title": "Baltimoresun local news",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e41f"),
  "title": "Baltimoresun - world",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/news/nation-world/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e420"),
  "title": "Baltimoresun - sports",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/sports/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e421"),
  "title": "Baltimoresun local politics",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/news/maryland/politics/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e422"),
  "title": "Baltimoresun - entertainment",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/entertainment/celebrities/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e423"),
  "title": "Baltimoresun entertainment music",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/entertainment/music/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e424"),
  "title": "Baltimoresun - health",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/health/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e425"),
  "title": "Baltimoresun - lifestyle home-garden",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/features/home-garden/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e426"),
  "title": "Baltimoresun - business",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/business/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e427"),
  "title": "Baltimoresun - technology",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/business/technology/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e428"),
  "title": "Baltimoresun - travel",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/travel/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e429"),
  "title": "Baltimoresun - entertainment",
  "groupname": "Baltimoresun",
  "updateurl": "http://www.baltimoresun.com/entertainment/arts/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008bc321d3be0004e42a"),
  "title": "Seattletimes - local news",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/localnews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e42b"),
  "title": "Seattletimes - sports",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/sports.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e42c"),
  "title": "Seattletimes - world",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/nationworld.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e42d"),
  "title": "Seattletimes - politics",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/politics.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e42e"),
  "title": "Seattletimes - entertainment",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e42f"),
  "title": "Seattletimes - travel",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/travel.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e430"),
  "title": "Seattletimes - health",
  "groupname": "Seattletimes",
  "updateurl": "http://seattletimes.nwsource.com/rss/health.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e431"),
  "title": "Star-telegram - local news",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/local/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e432"),
  "title": "Star-telegram - politics",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/politics/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e433"),
  "title": "Star-telegram - world",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/468/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e434"),
  "title": "Star-telegram - U.S.",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/462/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e435"),
  "title": "Star-telegram - 2012 Presidential Campaign",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/1242/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e436"),
  "title": "Star-telegram - `Texas news",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/texas/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e437"),
  "title": "Star-telegram - Golf sport",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/333/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e438"),
  "title": "Star-telegram - Boxing sport",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/boxing/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e439"),
  "title": "Star-telegram - Teniss sport",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/536/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e43a"),
  "title": "Star-telegram - Socer sport",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/549/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e43b"),
  "title": "Star-telegram  business",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/461/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008cc321d3be0004e43c"),
  "title": "Star-telegram  business airlines and aviation",
  "groupname": "Star-telegram",
  "updateurl": "http://www.star-telegram.com/857/index.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e43d"),
  "title": "SlashGear",
  "groupname": "SlashGear",
  "updateurl": "http://feeds.slashgear.com/slashgear?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e43e"),
  "title": "Wboy.com - local news",
  "groupname": "Wboy.com",
  "updateurl": "http://www.wboy.com/category/215885/home?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e43f"),
  "title": "Tampabay.com - local news",
  "groupname": "Tampabay.com",
  "updateurl": "http://projects.tampabay.com/munger/feeds/v2/local-news/rss2/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e440"),
  "title": "Tampabay.com - sports",
  "groupname": "Tampabay.com",
  "updateurl": "http://www.tampabay.com/site/feeds/csl/mrss/partial/1118450/feed.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e441"),
  "title": "Tampabay.com - business",
  "groupname": "Tampabay.com",
  "updateurl": "http://projects.tampabay.com/munger/feeds/v2/business/rss2/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e443"),
  "title": "Rapidcityjournal - sports",
  "groupname": "Rapidcityjournal",
  "updateurl": "http://rapidcityjournal.com/search/?f=rss&amp;t=article&amp;c=sports&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e446"),
  "title": "Manhattan.ny1.com - local news",
  "groupname": "Manhattan.ny1.com",
  "updateurl": "http://manhattan.ny1.com/Rss/PubFeeds.aspx?SecID=1000&amp;RegionCookie=5",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e447"),
  "title": "Brooklyn.ny1.com - local",
  "groupname": "Brooklyn.ny1.com",
  "updateurl": "http://brooklyn.ny1.com/Rss/PubFeeds.aspx?SecID=1000&amp;RegionCookie=7",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e448"),
  "title": "Ynn.com - local centralny news",
  "groupname": "Ynn.com",
  "updateurl": "http://centralny.ynn.com/Rss/PubFeeds.aspx?SecID=1001&amp;RegionCookie=1013",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e449"),
  "title": "Ynn.com - local capital region news",
  "groupname": "Ynn.com",
  "updateurl": "http://capitalregion.ynn.com/Rss/PubFeeds.aspx?SecID=1&amp;RegionCookie=12",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e44a"),
  "title": "Ynn.com - local watertown news",
  "groupname": "Ynn.com",
  "updateurl": "http://watertown.ynn.com/Rss/PubFeeds.aspx?SecID=1001&amp;RegionCookie=1052",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e44b"),
  "title": "Lohud.com - local",
  "groupname": "Lohud.com",
  "updateurl": "http://www.lohud.com/section/UPDATERSS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e44c"),
  "title": "Brookings.edu",
  "groupname": "Brookings.edu",
  "updateurl": "http://webfeeds.brookings.edu/brookingsrss/topics/uspolitics?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e44d"),
  "title": "Khou.com - business",
  "groupname": "Khou.com",
  "updateurl": "http://www.khou.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e44e"),
  "title": "Khou.com - politics",
  "groupname": "Khou.com",
  "updateurl": "http://www.khou.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e44f"),
  "title": "Khou.com - sports",
  "groupname": "Khou.com",
  "updateurl": "http://www.khou.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e450"),
  "title": "Khou.com - travel",
  "groupname": "Khou.com",
  "updateurl": "http://www.khou.com/great-day/videos/travel/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e451"),
  "title": "Khou.com - world",
  "groupname": "Khou.com",
  "updateurl": "http://www.khou.com/news/world/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e452"),
  "title": "Tennessean.com - world",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2067&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=NEWS%20NATION%20&amp;%20WORLD",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e455"),
  "title": "Tennessean.com - politics",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=1972&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=NEWS%20GOVERNMENT%20&amp;%20POLITICS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e456"),
  "title": "Computerworld.com",
  "groupname": "Computerworld.com",
  "updateurl": "http://rss.computerworld.com/computerworld/s/feed/keyword/MattHamblen",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e457"),
  "title": "Khou.com - entertainment",
  "groupname": "Khou.com",
  "updateurl": "http://www.khou.com/great-day/videos/entertainment/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e458"),
  "title": "Statesman.com - local news",
  "groupname": "Statesman.com",
  "updateurl": "http://www.statesman.com/section-rss.do?source=news&amp;includeSubSections=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e459"),
  "title": "Statesman.com - business",
  "groupname": "Statesman.com",
  "updateurl": "http://www.statesman.com/section-rss.do?source=business&amp;includeSubSections=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e45a"),
  "title": "Statesman.com - sports",
  "groupname": "Statesman.com",
  "updateurl": "http://www.statesman.com/section-rss.do?source=sports&amp;includeSubSections=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e45b"),
  "title": "Statesman.com - lifestyle",
  "groupname": "Statesman.com",
  "updateurl": "http://www.statesman.com/section-rss.do?source=life&amp;includesubsection=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e45c"),
  "title": "Sportingnews.com",
  "groupname": "Sportingnews.com",
  "updateurl": "http://aol.sportingnews.com/rss/author/6/sean-deveney",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e45d"),
  "title": "Space.com",
  "groupname": "Space.com",
  "updateurl": "http://www.space.com/home/feed/site.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e45e"),
  "title": "Thenewstribune.com - local",
  "groupname": "Thenewstribune.com",
  "updateurl": "http://www.thenewstribune.com/news/updates/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e45f"),
  "title": "Thenewstribune.com - sport",
  "groupname": "Thenewstribune.com",
  "updateurl": "http://www.thenewstribune.com/sports/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e460"),
  "title": "Thenewstribune.com - entertainment",
  "groupname": "Thenewstribune.com",
  "updateurl": "http://www.thenewstribune.com/ae/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e461"),
  "title": "Thenewstribune.com - business",
  "groupname": "Thenewstribune.com",
  "updateurl": "http://www.thenewstribune.com/business/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e462"),
  "title": "Mailtribune.com local",
  "groupname": "Mailtribune.com",
  "updateurl": "http://www.mailtribune.com/apps/pbcs.dll/section?Category=rss01&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e463"),
  "title": "Mailtribune.com sports",
  "groupname": "Mailtribune.com",
  "updateurl": "http://www.mailtribune.com/apps/pbcs.dll/section?Category=rss03&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e464"),
  "title": "Mailtribune.com sports",
  "groupname": "Mailtribune.com",
  "updateurl": "http://www.mailtribune.com/apps/pbcs.dll/section?Category=rss03&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e465"),
  "title": "Mailtribune.com business",
  "groupname": "Mailtribune.com",
  "updateurl": "http://www.mailtribune.com/apps/pbcs.dll/section?Category=rss05&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e466"),
  "title": "Mailtribune.com lifestyle",
  "groupname": "Mailtribune.com",
  "updateurl": "http://www.mailtribune.com/apps/pbcs.dll/section?Category=rss09&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e467"),
  "title": "Desmoinesregister - business",
  "groupname": "Desmoinesregister",
  "updateurl": "http://feeds.feedburner.com/desmoinesregister/Business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e468"),
  "title": "watertowndailytimes - local news",
  "groupname": "Watertowndailytimes",
  "updateurl": "http://www.watertowndailytimes.com/section/iatom_news?omniture=0&amp;mime=application%2Fatom%2Bxml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e469"),
  "title": "Watertowndailytimes - sport",
  "groupname": "Watertowndailytimes",
  "updateurl": "http://www.watertowndailytimes.com/section/iatom_sports?omniture=0&amp;mime=application%2Fatom%2Bxml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e46a"),
  "title": "Heraldnews - local",
  "groupname": "Heraldnews",
  "updateurl": "http://www.heraldnews.com/news/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e46b"),
  "title": "Timesdispatch.com - local news",
  "groupname": "Timesdispatch.com",
  "updateurl": "http://www2.timesdispatch.com/list/feed/rss/news-archive/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e46c"),
  "title": "Timesdispatch.com - business",
  "groupname": "Timesdispatch.com",
  "updateurl": "http://www2.timesdispatch.com/list/feed/rss/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e46d"),
  "title": "Timesdispatch.com - politics",
  "groupname": "Timesdispatch.com",
  "updateurl": "http://www2.timesdispatch.com/list/feed/rss/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e46e"),
  "title": "Timesdispatch.com - national news",
  "groupname": "Timesdispatch.com",
  "updateurl": "http://www2.timesdispatch.com/list/feed/rss/national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008fc321d3be0004e46f"),
  "title": "Buffalonews - sports",
  "groupname": "Buffalonews",
  "updateurl": "http://www.buffalonews.com/sports/24-sports-news/?widget=rssfeed&amp;view=feed&amp;contentId=77944",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e470"),
  "title": "Buffalonews - sports",
  "groupname": "Buffalonews",
  "updateurl": "http://www.buffalonews.com/sports/bills-nfl/?widget=rssfeed&amp;view=feed&amp;contentId=77944",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e471"),
  "title": "Buffalonews - entertainment",
  "groupname": "Buffalonews",
  "updateurl": "http://www.buffalonews.com/entertainment/?widget=rssfeed&amp;view=feed&amp;contentId=77944",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e472"),
  "title": "Buffalonews - business",
  "groupname": "Buffalonews",
  "updateurl": "http://www.buffalonews.com/business/?widget=rssfeed&amp;view=feed&amp;contentId=77944",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e473"),
  "title": "Palmbeachpost - local news",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.palmbeachpost.com/section-rss.do?source=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e474"),
  "title": "Palmbeachpost - local state news",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.palmbeachpost.com/section-rss.do?source=state",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e475"),
  "title": "Palmbeachpost - sport",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.palmbeachpost.com/genericList-rss.do?source=1300",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e476"),
  "title": "Palmbeachpost - entertainment",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.pbpulse.com/feed/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e477"),
  "title": "Palmbeachpost - money",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.palmbeachpost.com/genericList-rss.do?source=16350",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e478"),
  "title": "Palmbeachpost - Health",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.palmbeachpost.com/genericList-rss.do?source=17932",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e479"),
  "title": "Palmbeachpost - travel",
  "groupname": "Palmbeachpost",
  "updateurl": "http://www.palmbeachpost.com/genericList-rss.do?source=5228",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e47a"),
  "title": "Nationaljournal - politics",
  "groupname": "Nationaljournal",
  "updateurl": "http://www.nationaljournal.com/?rss=1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e47b"),
  "title": "Azstarnet.com local news",
  "groupname": "Azstarnet.com",
  "updateurl": "http://azstarnet.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e47c"),
  "title": "Azstarnet.com national news",
  "groupname": "Azstarnet.com",
  "updateurl": "http://azstarnet.com/search/?f=rss&amp;t=article&amp;c=news/national&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e47d"),
  "title": "Azstarnet.com world news",
  "groupname": "Azstarnet.com",
  "updateurl": "http://azstarnet.com/search/?f=rss&amp;t=article&amp;c=news/world&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e47e"),
  "title": "Azstarnet.com business",
  "groupname": "Azstarnet.com",
  "updateurl": "http://azstarnet.com/search/?f=rss&amp;t=article&amp;c=business&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e47f"),
  "title": "Wtae.com - entertainment",
  "groupname": "Wtae.com",
  "updateurl": "http://www.wtae.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0090c321d3be0004e480"),
  "title": "Upi.com - local news",
  "groupname": "Upi.com",
  "updateurl": "http://pheed.upi.com/news/news_rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e481"),
  "title": "Upi.com business",
  "groupname": "Upi.com",
  "updateurl": "http://pheed.upi.com/news/business_news_rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e482"),
  "title": "Upi.com - entertainment",
  "groupname": "Upi.com",
  "updateurl": "http://pheed.upi.com/news/entertainment_news_rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e483"),
  "title": "Upi.com - sports",
  "groupname": "Upi.com",
  "updateurl": "http://pheed.upi.com/news/sports_news_rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e484"),
  "title": "Upi.com - health",
  "groupname": "Upi.com",
  "updateurl": "http://pheed.upi.com/news/health_news_rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e485"),
  "title": "Upi.com - science",
  "groupname": "Upi.com",
  "updateurl": "http://pheed.upi.com/news/science_news_rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e487"),
  "title": "Tennessean.com - politics",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=1972&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=NEWS%20GOVERNMENT%20&amp;%20POLITICS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e48c"),
  "title": "Nbc sports",
  "groupname": "Nbc sports",
  "updateurl": "http://rss.nbcsports.msnbc.com/id/3032112/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e48d"),
  "title": "Nbc sports - basebal",
  "groupname": "Nbc sports",
  "updateurl": "http://rss.nbcsports.msnbc.com/id/3032824/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e48e"),
  "title": "Sentinelandenterprise.com - Pro sports",
  "groupname": "Sentinelandenterprise.com",
  "updateurl": "http://feeds.sentinelandenterprise.com/mngi/rss/CustomRssServlet/106/233740.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e48f"),
  "title": "Nbc sports - NHL",
  "groupname": "Nbc sports",
  "updateurl": "http://rss.nbcsports.msnbc.com/id/3032802/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e490"),
  "title": "Nbc sports - tenis",
  "groupname": "Nbc sports",
  "updateurl": "http://rss.nbcsports.msnbc.com/id/3032985/device/rss/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e491"),
  "title": "Lasvegassun - local news",
  "groupname": "Lasvegassun",
  "updateurl": "http://www.lasvegassun.com/feeds/headlines/breakingnews/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e492"),
  "title": "Lasvegassun - arts &amp; entertainment",
  "groupname": "Lasvegassun",
  "updateurl": "http://www.lasvegassun.com/feeds/headlines/ae/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e493"),
  "title": "lasvegassun - busuness",
  "groupname": "lasvegassun",
  "updateurl": "http://www.lasvegassun.com/feeds/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e494"),
  "title": "Lasvegassun - politics",
  "groupname": "Lasvegassun",
  "updateurl": "http://www.lasvegassun.com/feeds/headlines/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e495"),
  "title": "Lasvegassun - sports",
  "groupname": "Lasvegassun",
  "updateurl": "http://www.lasvegassun.com/feeds/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e496"),
  "title": "Wtae.com - national news",
  "groupname": "Wtae.com",
  "updateurl": "http://www.wtae.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e497"),
  "title": "Coloradoan.com - local news",
  "groupname": "Coloradoan.com",
  "updateurl": "http://www.coloradoan.com/section/rss&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e498"),
  "title": "Coloradoan.com - entertainment",
  "groupname": "Coloradoan.com",
  "updateurl": "http://www.coloradoan.com/section/ENTERTAINMENT&amp;template=rss_gd_subcats",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e499"),
  "title": "Pcworld.com - tehnologes",
  "groupname": "Pcworld.com",
  "updateurl": "http://feeds.pcworld.com/pcworld/latestnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e49a"),
  "title": "Neontommy - local news",
  "groupname": "Neontommy",
  "updateurl": "http://feeds.feedburner.com/neontommy/hTJi",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e49b"),
  "title": "Wired.com",
  "groupname": "Wired.com",
  "updateurl": "http://www.wired.com/about/rss_feeds/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e49c"),
  "title": "Wtae.com - sports",
  "groupname": "Wtae.com",
  "updateurl": "http://www.wtae.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e49d"),
  "title": "Wlky.com - local news",
  "groupname": "Wlky.com",
  "updateurl": "http://www.wlky.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e49e"),
  "title": "Wlky.com - national news",
  "groupname": "Wlky.com",
  "updateurl": "http://www.wlky.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e49f"),
  "title": "Wlky.com - sports",
  "groupname": "Wlky.com",
  "updateurl": "http://www.wlky.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e4a0"),
  "title": "Wboy.com - entertainment",
  "groupname": "Wlky.com",
  "updateurl": "http://www.wlky.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e4a1"),
  "title": "Wlky.com - money",
  "groupname": "Wlky.com",
  "updateurl": "http://www.wlky.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e4a2"),
  "title": "Wtae.com - health",
  "groupname": "Wtae.com",
  "updateurl": "http://www.wtae.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0092c321d3be0004e4a3"),
  "title": "Wxii12.com - sports",
  "groupname": "Wxii12.com",
  "updateurl": "http://www.wxii12.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4a4"),
  "title": "Wxii12.com - national news",
  "groupname": "Wxii12.com",
  "updateurl": "http://www.wxii12.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4a5"),
  "title": "Wxii12.com - entertainment",
  "groupname": "Wxii12.com",
  "updateurl": "http://www.wxii12.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4a6"),
  "title": "Wxii12.com - money",
  "groupname": "Wxii12.com",
  "updateurl": "http://www.wxii12.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4a7"),
  "title": "Wxii12.com - health",
  "groupname": "Wxii12.com",
  "updateurl": "http://www.wxii12.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4a8"),
  "title": "Floridatoday - local news",
  "groupname": "Floridatoday",
  "updateurl": "http://www.floridatoday.com/section/news01&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4a9"),
  "title": "Floridatoday - sports",
  "groupname": "Floridatoday",
  "updateurl": "http://www.floridatoday.com/section/sports&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4aa"),
  "title": "Floridatoday - business",
  "groupname": "Floridatoday",
  "updateurl": "http://www.floridatoday.com/section/business&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4ab"),
  "title": "Floridatoday - life news",
  "groupname": "Floridatoday",
  "updateurl": "http://www.floridatoday.com/section/life&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4ac"),
  "title": "Semissourian.com",
  "groupname": "Semissourian.com",
  "updateurl": "http://www.semissourian.com/feed/rss/all/today.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4ad"),
  "title": "Pnj.com- local news",
  "groupname": "Pnj.com",
  "updateurl": "http://www.pnj.com/section/news01&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4ae"),
  "title": "Pnj.com- sports",
  "groupname": "Pnj.com",
  "updateurl": "http://www.pnj.com/section/sports&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4af"),
  "title": "Pnj.com- business",
  "groupname": "Pnj.com",
  "updateurl": "http://www.pnj.com/section/business&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4b0"),
  "title": "Bostonherald - business",
  "groupname": "Bostonherald",
  "updateurl": "http://feeds.feedburner.com/bostonherald/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4b1"),
  "title": "Bostonherald - entertainment",
  "groupname": "Bostonherald",
  "updateurl": "http://feeds.feedburner.com/bostonherald/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4b2"),
  "title": "Bostonherald - world",
  "groupname": "Bostonherald",
  "updateurl": "http://feeds.feedburner.com/bostonherald/news/international/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4b3"),
  "title": "Necn.com - politics",
  "groupname": "Necn.com",
  "updateurl": "http://www.necn.com/common/dynrss/dynrss_4212_landing_.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4b4"),
  "title": "Necn.com - sciness&amp;technology",
  "groupname": "Necn.com",
  "updateurl": "http://www.necn.com/common/dynrss/dynrss_4213_landing_.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0093c321d3be0004e4b5"),
  "title": "Necn.com - health",
  "groupname": "Necn.com",
  "updateurl": "http://www.necn.com/common/dynrss/dynrss_4210_landing_.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4b6"),
  "title": "Newsok - local news",
  "groupname": "Newsok",
  "updateurl": "http://feeds.feedburner.com/newsok/home?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4b7"),
  "title": "Post-gazette.com - local state news",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/localstate.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4b8"),
  "title": "Post-gazette.com -  enetertainment",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/people.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4b9"),
  "title": "Post-gazette.com - business",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4ba"),
  "title": "Post-gazette.com - `sciness",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/healthscience.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4bb"),
  "title": "Post-gazette.com -  lifestyle",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/generallifestyle.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4bc"),
  "title": "Post-gazette.com -  nationworld",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/nationworld.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4bd"),
  "title": "Post-gazette.com -  golf sport",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/golf.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4be"),
  "title": "Post-gazette.com -  politics",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/politics.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4bf"),
  "title": "Post-gazette.com -  election",
  "groupname": "Post-gazette.com",
  "updateurl": "http://www.post-gazette.com/rss/elections.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c0"),
  "title": "Deseretnews - world",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/world-nation/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c1"),
  "title": "Deseretnews - business",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/business/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c2"),
  "title": "Deseretnews - entertainment",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/entertainment/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c3"),
  "title": "Deseretnews - sciness",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/life/science-tech/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c4"),
  "title": "Deseretnews - sports",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/sports/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c5"),
  "title": "Deseretnews - travel",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/life/travel/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c6"),
  "title": "Deseretnews - technology",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/business/technology-and-innovation/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0094c321d3be0004e4c7"),
  "title": "Deseretnews - finance",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/business/money-and-politics/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4c8"),
  "title": "Deseretnews - home life",
  "groupname": "Deseretnews",
  "updateurl": "http://www.deseretnews.com/family-life/home-life/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4c9"),
  "title": "Nationalreview - politics",
  "groupname": "Nationalreview",
  "updateurl": "http://www.nationalreview.com/articles/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4ca"),
  "title": "Mydesert.com - business",
  "groupname": "Mydesert.com",
  "updateurl": "http://www.mydesert.com/apps/pbcs.dll/section?category=RSS02&amp;template=rss_gd_biz",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4cb"),
  "title": "Mydesert.com - sports",
  "groupname": "Mydesert.com",
  "updateurl": "http://www.mydesert.com/apps/pbcs.dll/section?category=RSS03&amp;template=rss_gd_sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4cc"),
  "title": "Mydesert.com -entertainment",
  "groupname": "Mydesert.com",
  "updateurl": "http://www.mydesert.com/apps/pbcs.dll/section?category=RSS04&amp;template=rss_gd_ent",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4cd"),
  "title": "Mydesert.com - health",
  "groupname": "Mydesert.com",
  "updateurl": "http://www.mydesert.com/apps/pbcs.dll/section?category=LIFESTYLES03&amp;template=rss_gd_gen",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4cf"),
  "title": "Clickondetroit.com - National news",
  "groupname": "Clickondetroit.com",
  "updateurl": "http://www.clickondetroit.com/-/1719524/4984642/-/format/rss_2.0/view/asFeed/-/qo3s0pz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d0"),
  "title": "Clickondetroit.com - technology",
  "groupname": "Clickondetroit.com",
  "updateurl": "http://www.clickondetroit.com/-/1719524/4907340/-/format/rss_2.0/view/asFeed/-/tnxtd7z/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d1"),
  "title": "Wyff4.com - local news",
  "groupname": "Wyff4.com",
  "updateurl": "http://www.http://www.wyff4.com/news/topstory.rss/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d2"),
  "title": "Wyff4.com - national news",
  "groupname": "Wyff4.com",
  "updateurl": "http://www.wyff4.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d3"),
  "title": "Wyff4.com - sports",
  "groupname": "Wyff4.com",
  "updateurl": "http://www.wyff4.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d4"),
  "title": "Wyff4.com - sports",
  "groupname": "Wyff4.com",
  "updateurl": "http://www.wyff4.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d5"),
  "title": "Wyff4.com - lifestyle",
  "groupname": "Wyff4.com",
  "updateurl": "http://www.wyff4.com/mylife/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d6"),
  "title": "Myfoxchicago.com - national news",
  "groupname": "Myfoxchicago.com",
  "updateurl": "http://www.myfoxchicago.com/feeds/rssFeed?siteId=1010&amp;obfType=RSS_FEED&amp;categoryId=10001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d7"),
  "title": "Myfoxchicago.com - politics",
  "groupname": "Myfoxchicago.com",
  "updateurl": "http://www.myfoxchicago.com/feeds/rssFeed?siteId=1010&amp;obfType=RSS_FEED&amp;categoryId=20060",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d8"),
  "title": "Myfoxchicago.com - world news",
  "groupname": "Myfoxchicago.com",
  "updateurl": "http://www.myfoxchicago.com/feeds/rssFeed?siteId=1010&amp;obfType=RSS_FEED&amp;categoryId=20056",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4d9"),
  "title": "Myfoxchicago.com - sports",
  "groupname": "Myfoxchicago.com",
  "updateurl": "http://www.myfoxchicago.com/feeds/rssFeed?siteId=1010&amp;obfType=RSS_FEED&amp;categoryId=10004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4da"),
  "title": "Myfoxchicago.com - money",
  "groupname": "Myfoxchicago.com",
  "updateurl": "http://www.myfoxchicago.com/feeds/rssFeed?siteId=1010&amp;obfType=RSS_FEED&amp;categoryId=10007",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4db"),
  "title": "Myfoxchicago.com - entertainment",
  "groupname": "Myfoxchicago.com",
  "updateurl": "http://www.myfoxchicago.com/feeds/rssFeed?siteId=1010&amp;obfType=RSS_FEED&amp;categoryId=10008",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4dc"),
  "title": "Newspressnow.com - local",
  "groupname": "Newspressnow.com",
  "updateurl": "http://www.newspressnow.com/localnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4dd"),
  "title": "Newspressnow.com - national world",
  "groupname": "Newspressnow.com",
  "updateurl": "http://www.newspressnow.com/nation-and-world/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4de"),
  "title": "Newspressnow.com - business",
  "groupname": "Newspressnow.com",
  "updateurl": "http://www.newspressnow.com/business/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4df"),
  "title": "Newspressnow.com - entertainment",
  "groupname": "Newspressnow.com",
  "updateurl": "http://www.newspressnow.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e0"),
  "title": "Newspressnow.com - sports",
  "groupname": "Newspressnow.com",
  "updateurl": "http://www.newspressnow.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e1"),
  "title": "Ozarksfirst.com - politics",
  "groupname": "Ozarksfirst.com",
  "updateurl": "http://ozarksfirst.com/common/site_rss.php?feedname=news&amp;cat=85",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e2"),
  "title": "Ozarksfirst.com - health",
  "groupname": "Ozarksfirst.com",
  "updateurl": "http://ozarksfirst.com/common/site_rss.php?feedname=news&amp;cat=265",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e3"),
  "title": "Ozarksfirst.com - finance",
  "groupname": "Ozarksfirst.com",
  "updateurl": "http://ozarksfirst.com/common/site_rss.php?feedname=news&amp;cat=275",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e4"),
  "title": "Ozarksfirst.com - local news",
  "groupname": "Ozarksfirst.com",
  "updateurl": "http://ozarksfirst.com/common/site_rss.php?feedname=news&amp;cat=345",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e5"),
  "title": "Todaysthv.com - local state news",
  "groupname": "Todaysthv.com",
  "updateurl": "http://feeds.feedburner.com/Kthv-ThvHeadlines?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e6"),
  "title": "Todaysthv.com - world news",
  "groupname": "Todaysthv.com",
  "updateurl": "http://feeds.feedburner.com/Kthv-TodaysthvcomNational/internationalNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e7"),
  "title": "Todaysthv.com - sports",
  "groupname": "Todaysthv.com",
  "updateurl": "http://feeds.feedburner.com/Kthv-SportsNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e8"),
  "title": "Todaysthv.com - entertainmemnt",
  "groupname": "Todaysthv.com",
  "updateurl": "http://feeds.feedburner.com/Kthv-EntertainmentNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4e9"),
  "title": "Thedenverchannel.com - local news",
  "groupname": "Thedenverchannel.com",
  "updateurl": "http://www.thedenverchannel.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4ea"),
  "title": "Thedenverchannel.com - national news",
  "groupname": "Thedenverchannel.com",
  "updateurl": "http://www.thedenverchannel.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0096c321d3be0004e4eb"),
  "title": "Thedenverchannel.com - entertainment",
  "groupname": "Thedenverchannel.com",
  "updateurl": "http://www.thedenverchannel.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4ec"),
  "title": "Thedenverchannel.com - money",
  "groupname": "Thedenverchannel.com",
  "updateurl": "http://www.thedenverchannel.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4ed"),
  "title": "Therepublic.com - local news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4ee"),
  "title": "Therepublic.com - Indiana News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2100/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4ef"),
  "title": "Ttherepublic.com National News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/3000/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f0"),
  "title": "Therepublic.com - Washington &amp; Politics News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/4000/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f1"),
  "title": "Therepublic.com - Congress News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/4050/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f2"),
  "title": "TheRepublic.com - President Obama News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/4200/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f3"),
  "title": "Therepublic.com - business",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/5000/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f4"),
  "title": "Therepublic.com - enetertainment",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/7000/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f5"),
  "title": "Therepublic.com -science",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/9050/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f6"),
  "title": "Therepublic.com - Technology",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/9075/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f7"),
  "title": "Therepublic.com - world",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/11000/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f8"),
  "title": "Wnd.com - politics",
  "groupname": "Wnd.com",
  "updateurl": "http://www.wnd.com/category/front-page/politics/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4f9"),
  "title": "Therepublic.com - Alabama news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2210/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4fa"),
  "title": "Therepublic.com - Alaska news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2200/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4fb"),
  "title": "Therepublic.com - Arizona news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2230/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0097c321d3be0004e4fc"),
  "title": "Therepublic.com - Arkansas news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2220/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e4fd"),
  "title": "Therepublic.com - California News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2240/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e4fe"),
  "title": "Therepublic.com - Colorado News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2250/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e4ff"),
  "title": "Wnd.com - money",
  "groupname": "Wnd.com",
  "updateurl": "http://www.wnd.com/category/money/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e500"),
  "title": "Therepublic.com - Connecticut News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2260/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e501"),
  "title": "Therepublic.com - District of Columbia news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2270/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e502"),
  "title": "Therepublic.com - Delaware news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2280/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e503"),
  "title": "Therepublic.com - Florida News",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2290/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e504"),
  "title": "Therepublic.com - Georgia news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2300/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e505"),
  "title": "Therepublic.com - Hawaii news",
  "groupname": "Therepublic.com",
  "updateurl": "http://www.therepublic.com/feed/cat/2310/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e506"),
  "title": "Htrnews.com - sports",
  "groupname": "Htrnews.com",
  "updateurl": "http://www.htrnews.com/apps/pbcs.dll/section?category=MAN020&amp;template=rsscat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e507"),
  "title": "Postcrescent.com - local news",
  "groupname": "Postcrescent.com",
  "updateurl": "http://www.postcrescent.com/apps/pbcs.dll/section?category=APC0101&amp;template=rsscat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e508"),
  "title": "Postcrescent.com - sports",
  "groupname": "Postcrescent.com",
  "updateurl": "http://www.postcrescent.com/apps/pbcs.dll/section?category=APC02&amp;template=rsscat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e509"),
  "title": "Providencejournal - business",
  "groupname": "Providencejournal",
  "updateurl": "http://news.providencejournal.com/business/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e50a"),
  "title": "Providencejournal - politics",
  "groupname": "Providencejournal",
  "updateurl": "http://news.providencejournal.com/politics/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e50b"),
  "title": "Providencejournal - sports",
  "groupname": "Providencejournal",
  "updateurl": "http://news.providencejournal.com/sports/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e50c"),
  "title": "Providencejournal - local news",
  "groupname": "Providencejournal",
  "updateurl": "http://news.providencejournal.com/breaking-news/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e50d"),
  "title": "Wnd.com - world",
  "groupname": "Wnd.com",
  "updateurl": "http://www.wnd.com/category/front-page/world/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e50e"),
  "title": "Utsandiego.com - health",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0098c321d3be0004e50f"),
  "title": "Utsandiego.com - politics",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/local/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e510"),
  "title": "Utsandiego.com - science",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/science/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e511"),
  "title": "Utsandiego.com - sports NBA",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/nba/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e512"),
  "title": "Utsandiego.com - sports NHL",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/nhl/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e513"),
  "title": "Utsandiego.com - NFL",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/nfl/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e514"),
  "title": "Utsandiego.com - soccer sport",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/soccer/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e515"),
  "title": "Utsandiego.com - Tenis sport",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/tennis/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e516"),
  "title": "Utsandiego.com - sports golf",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/golf/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e517"),
  "title": "Utsandiego.com - sports MLB",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/sports/mlb/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e518"),
  "title": "Wnd.com - U.S.",
  "groupname": "Wnd.com",
  "updateurl": "http://www.wnd.com/category/front-page/us/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e519"),
  "title": "Utsandiego.com - entertainment",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/night-and-day/music-nightlife/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e51a"),
  "title": "Utsandiego.com - home&amp;garden",
  "groupname": "Utsandiego.com",
  "updateurl": "http://www.utsandiego.com/rss/headlines/life/home-garden/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e51b"),
  "title": "Wnd.com - health",
  "groupname": "Wnd.com",
  "updateurl": "http://www.wnd.com/category/front-page/health/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e51c"),
  "title": "Dailycaller.com - politics",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-politics?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e51d"),
  "title": "Dailycaller.com - U.S.",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-us?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e51e"),
  "title": "Naplesnews.com - business",
  "groupname": "Naplesnews.com",
  "updateurl": "http://www.naplesnews.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e51f"),
  "title": "Dailycaller.com - entertainmement",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e520"),
  "title": "Dailycaller.com - world",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-world?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0099c321d3be0004e521"),
  "title": "Dailycaller.com - sports",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e522"),
  "title": "Dailycaller.com - business",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e523"),
  "title": "Dailycaller.com - tech",
  "groupname": "Dailycaller.com",
  "updateurl": "http://feeds.feedburner.com/dailycaller-tech?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e524"),
  "title": "Mlive.com - local  Michigan-news",
  "groupname": "Mlive.com",
  "updateurl": "http://feeds.feedburner.com/michigan-news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e525"),
  "title": "Mlive.com - business",
  "groupname": "Mlive.com",
  "updateurl": "http://feeds.feedburner.com/michigan-business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e526"),
  "title": "Mlive.com - local Detroit news",
  "groupname": "Mlive.com",
  "updateurl": "http://feeds.feedburner.com/detroit-news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e527"),
  "title": "Mlive.com - entertainment",
  "groupname": "Mlive.com",
  "updateurl": "http://feeds.feedburner.com/detroit-entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e528"),
  "title": "Mlive.com - Detroit business",
  "groupname": "Mlive.com",
  "updateurl": "http://feeds.feedburner.com/detroit-business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e529"),
  "title": "Mlive.com - Detroit sports",
  "groupname": "Mlive.com",
  "updateurl": "http://feeds.feedburner.com/detroit-sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e52a"),
  "title": "Newser.com - U.S.",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/3.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e52b"),
  "title": "Newser.com - world",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/2.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e52c"),
  "title": "Newser.com - politics",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/4.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e52d"),
  "title": "Newser.com - money",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/5.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e52e"),
  "title": "Newser.com - science",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/6.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e52f"),
  "title": "Newser.com - Technology",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/7.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e530"),
  "title": "Newser.com - entertainment",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/15.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e531"),
  "title": "Newser.com - lifestyle",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/9.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e532"),
  "title": "Newser.com -  travel",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/22.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ac321d3be0004e533"),
  "title": "Newser.com -  sports",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/8.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e534"),
  "title": "Newser.com -  health",
  "groupname": "Newser.com",
  "updateurl": "http://rss.newser.com/rss/section/17.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e535"),
  "title": "Businessinsider - sports",
  "groupname": "Businessinsider",
  "updateurl": "http://feeds.feedburner.com/businessinsider/sportspage?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e536"),
  "title": "Businessinsider - world",
  "groupname": "Businessinsider",
  "updateurl": "http://feeds.feedburner.com/businessinsider/europe?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e537"),
  "title": "Businessinsider - politics",
  "groupname": "Businessinsider",
  "updateurl": "http://feeds.feedburner.com/businessinsider/politics?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e538"),
  "title": "Businessinsider - life",
  "groupname": "Businessinsider",
  "updateurl": "http://feeds.feedburner.com/businessinsider/thelife?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e539"),
  "title": "Globalpost - business",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18766",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e53a"),
  "title": "Globalpost - enertainment",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18785",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e53b"),
  "title": "Globalpost - Middle East",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18810",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e53c"),
  "title": "Globalpost - politics",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18819",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e53d"),
  "title": "Globalpost - Technology",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18828",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e53e"),
  "title": "Globalpost - travel",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18831",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e53f"),
  "title": "Globalpost - United Kingdom",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18833",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e540"),
  "title": "Globalpost - United States",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/19932",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e541"),
  "title": "Globalpost - world leaders",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18839",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e542"),
  "title": "Globalpost - world news",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18840",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e543"),
  "title": "Globalpost - lifestyle",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18775",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e544"),
  "title": "Globalpost - Canada news",
  "groupname": "Globalpost",
  "updateurl": "http://www.globalpost.com/feed/dispatch/18767",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009bc321d3be0004e545"),
  "title": "Ocala.com - state news",
  "groupname": "Ocala.com",
  "updateurl": "http://www.ocala.com/rss/articles/NEWS/1002/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e546"),
  "title": "Ocala.com - sports",
  "groupname": "Ocala.com",
  "updateurl": "http://www.ocala.com/rss/articles/SPORTS/1005/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e547"),
  "title": "Huntingtonnews.net - local news",
  "groupname": "Huntingtonnews.net",
  "updateurl": "http://www.huntingtonnews.net/news?format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e548"),
  "title": "Huntingtonnews.net - sports",
  "groupname": "Huntingtonnews.net",
  "updateurl": "http://www.huntingtonnews.net/sports?format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e549"),
  "title": "Huntingtonnews.net - entertainment",
  "groupname": "Huntingtonnews.net",
  "updateurl": "http://www.huntingtonnews.net/entertainment?format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e54a"),
  "title": "Kens5.com - sports",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e54b"),
  "title": "Kens5.com - business",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e54c"),
  "title": "Kens5.com - health",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/health/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e54d"),
  "title": "Kens5.com - local news",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e54e"),
  "title": "Kens5.com -  technology",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/technology/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e54f"),
  "title": "Kens5.com -  world",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/world/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e550"),
  "title": "Kens5.com -  politics",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e551"),
  "title": "Kens5.com -  national news",
  "groupname": "Kens5.com",
  "updateurl": "http://www.kens5.com/news/national/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e552"),
  "title": "Aikenstandard.com - stae news",
  "groupname": "Aikenstandard.com",
  "updateurl": "http://www.aikenstandard.com/rss/state/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e553"),
  "title": "Aikenstandard.com - entertainment",
  "groupname": "Aikenstandard.com",
  "updateurl": "http://www.aikenstandard.com/rss/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e554"),
  "title": "Postandcourier - local news",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e555"),
  "title": "Postandcourier - busines",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e556"),
  "title": "Postandcourier - Politics",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009cc321d3be0004e557"),
  "title": "Postandcourier - sports",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e558"),
  "title": "Postandcourier - entertainment",
  "groupname": "Postandcourier",
  "updateurl": "http://www.charlestonscene.com/rss/headlines/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e559"),
  "title": "Postandcourier - travel",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/artstravel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e55a"),
  "title": "Postandcourier - health",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e55b"),
  "title": "Postandcourier - home&amp;garden",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/homeandgarden/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e55c"),
  "title": "Postandcourier - food",
  "groupname": "Postandcourier",
  "updateurl": "http://www.postandcourier.com/rss/headlines/food/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e55d"),
  "title": "Salisburypost. - local news",
  "groupname": "Salisburypost.",
  "updateurl": "http://www.salisburypost.com/rss/area/full/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e55e"),
  "title": "Salisburypost. - sports",
  "groupname": "Salisburypost.",
  "updateurl": "http://www.salisburypost.com/rss/sports/full/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e55f"),
  "title": "Sentinelandenterprise.com - basketball",
  "groupname": "Sentinelandenterprise.com",
  "updateurl": "http://feeds.sentinelandenterprise.com/mngi/rss/CustomRssServlet/106/233735.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e560"),
  "title": "Salisburypost. - entertainment",
  "groupname": "Salisburypost.",
  "updateurl": "http://www.salisburypost.com/rss/entertainment/full/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e561"),
  "title": "Salisburypost. - lifestyle",
  "groupname": "Salisburypost.",
  "updateurl": "http://www.salisburypost.com/rss/lifestyles/full/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e562"),
  "title": "Salisburypost. - health",
  "groupname": "Salisburypost.",
  "updateurl": "http://www.salisburypost.com/rss/health/full/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e563"),
  "title": "lvrj.com - local news",
  "groupname": "lvrj.com",
  "updateurl": "http://www.lvrj.com/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e564"),
  "title": "lvrj.com - sports",
  "groupname": "lvrj.com",
  "updateurl": "http://www.lvrj.com/sports.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e565"),
  "title": "lvrj.com - business",
  "groupname": "lvrj.com",
  "updateurl": "http://www.lvrj.com/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e566"),
  "title": "Cfnews13.com - politics",
  "groupname": "Cfnews13.com",
  "updateurl": "http://www.cfnews13.com/feeds/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e567"),
  "title": "Cfnews13.com - business",
  "groupname": "Cfnews13.com",
  "updateurl": "http://www.cfnews13.com/feeds/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009dc321d3be0004e568"),
  "title": "Cfnews13.com - health",
  "groupname": "Cfnews13.com",
  "updateurl": "http://www.cfnews13.com/feeds/health",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e569"),
  "title": "Cfnews13.com - travel",
  "groupname": "Cfnews13.com",
  "updateurl": "http://www.cfnews13.com/feeds/travel",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e56a"),
  "title": "Cfnews13.com - sports",
  "groupname": "Cfnews13.com",
  "updateurl": "http://www.cfnews13.com/feeds/sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e56b"),
  "title": "Cfnews13.com - entertainment",
  "groupname": "Cfnews13.com",
  "updateurl": "http://www.cfnews13.com/feeds/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e56c"),
  "title": "Bradenton.com - local news",
  "groupname": "Bradenton.com",
  "updateurl": "http://www.bradenton.com/186/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e56d"),
  "title": "Bradenton.com - politics",
  "groupname": "Bradenton.com",
  "updateurl": "http://www.bradenton.com/198/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e56e"),
  "title": "Bradenton.com - sports",
  "groupname": "Bradenton.com",
  "updateurl": "http://www.bradenton.com/217/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e56f"),
  "title": "Bradenton.com - business",
  "groupname": "Bradenton.com",
  "updateurl": "http://www.bradenton.com/102/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e570"),
  "title": "Sbnation.com - denver sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://denver.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0088c321d3be0004e3ed"),
  "title": "Salon.com - life",
  "groupname": "Salon.com",
  "updateurl": "http://life.salon.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e715"),
  "title": "Ktar.com - Business",
  "groupname": "Ktar.com",
  "updateurl": "http://ktar.com/xml/48.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e71a"),
  "title": "Kvoa.com - local news",
  "groupname": "Kvoa.com",
  "updateurl": "http://www.kvoa.com/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7ae"),
  "title": "Mnn.com - money",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/mhownby",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7b0"),
  "title": "Mnn.com - food",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/food-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e934"),
  "title": "Rt.com - local news",
  "groupname": "Rt.com",
  "updateurl": "http://rt.com/news/line/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb6a"),
  "title": "Stv - footbal",
  "groupname": "Stv",
  "updateurl": "http://sport.stv.tv/football/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb6b"),
  "title": "Stv - rugby",
  "groupname": "Stv",
  "updateurl": "http://sport.stv.tv/rugby/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec1e"),
  "title": "Anorak - news",
  "groupname": "Anorak",
  "updateurl": "http://www.anorak.co.uk/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec3c"),
  "title": "Mtv - entertainment",
  "groupname": "Mtv",
  "updateurl": "http://www.mtv.co.uk/rss/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec74"),
  "title": "Moneywise",
  "groupname": "Moneywise",
  "updateurl": "http://www.moneywise.co.uk/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ece7"),
  "title": "Kent - music",
  "groupname": "Kent",
  "updateurl": "http://www.thisiskent.co.uk/music.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed46"),
  "title": "Utv -  news",
  "groupname": "Utv",
  "updateurl": "http://www.u.tv/Rss/News",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e571"),
  "title": "Bradenton.com - entertainment",
  "groupname": "Bradenton.com",
  "updateurl": "http://www.bradenton.com/134/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e572"),
  "title": "Miamiherald - local Florida news",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/news/florida/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e573"),
  "title": "Miamiherald - nation news",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/news/nation/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e574"),
  "title": "Miamiherald - politics",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/news/politics/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e575"),
  "title": "Miamiherald - business",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/business/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e576"),
  "title": "Miamiherald - basketbal sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/basketball/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e577"),
  "title": "Miamiherald - footbal sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/football/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e578"),
  "title": "Miamiherald - hockey",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/hockey/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e579"),
  "title": "Miamiherald - boxing sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/boxing/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009ec321d3be0004e57a"),
  "title": "Miamiherald - golf sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/golf/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e57b"),
  "title": "Miamiherald - horse-racing sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/horse-racing/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e57c"),
  "title": "Miamiherald - moitor sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/motor-sports/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e57d"),
  "title": "Miamiherald - soccer sport",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/sports/soccer/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e57e"),
  "title": "Miamiherald - entertainment",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/entertainment/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e57f"),
  "title": "Miamiherald - helth",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/living/health/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e580"),
  "title": "Miamiherald - home",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/living/home/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e581"),
  "title": "Miamiherald - fashion",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/living/fashion/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e582"),
  "title": "Miamiherald - food",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/living/food/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e583"),
  "title": "Miamiherald - travel",
  "groupname": "Miamiherald",
  "updateurl": "http://www.miamiherald.com/living/travel/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e584"),
  "title": "Sbnation.com - boston sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://boston.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e585"),
  "title": "Sbnation.com - atlanta sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://atlanta.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e586"),
  "title": "Magicvalley.com - local news",
  "groupname": "Magicvaley.com",
  "updateurl": "http://magicvalley.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e587"),
  "title": "Sentinelandenterprise.com - baseball",
  "groupname": "Sentinelandenterprise.com",
  "updateurl": "http://feeds.sentinelandenterprise.com/mngi/rss/CustomRssServlet/106/233734.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e588"),
  "title": "Magicvalley.com - sports",
  "groupname": "Magicvaley.com",
  "updateurl": "http://magicvalley.com/search/?f=rss&amp;t=article&amp;c=sports&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e589"),
  "title": "Magicvalley.com - business",
  "groupname": "Magicvaley.com",
  "updateurl": "http://magicvalley.com/search/?f=rss&amp;t=article&amp;c=business/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e58b"),
  "title": "Magicvalley.com - life",
  "groupname": "Magicvaley.com",
  "updateurl": "http://magicvalley.com/search/?f=rss&amp;t=article&amp;c=lifestyles&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e58c"),
  "title": "Pantagraph.com - local news",
  "groupname": "Pantagraph.com",
  "updateurl": "http://www.pantagraph.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e58d"),
  "title": "Pantagraph.com - national news",
  "groupname": "Pantagraph.com",
  "updateurl": "http://hosted.ap.org/lineups/LATESTNATIONAL-rss_2.0.xml?SITE=ILBLO&amp;SECTION=HOME&amp;TEMPLATE=DEFAULT",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e58e"),
  "title": "Pantagraph.com - sports",
  "groupname": "Pantagraph.com",
  "updateurl": "http://www.pantagraph.com/search/?f=rss&amp;t=article&amp;c=sports&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e590"),
  "title": "Pantagraph.com - life",
  "groupname": "Pantagraph.com",
  "updateurl": "http://www.pantagraph.com/search/?f=rss&amp;t=article&amp;c=lifestyles&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e591"),
  "title": "Pantagraph.com - world news",
  "groupname": "Pantagraph.com",
  "updateurl": "http://hosted.ap.org/lineups/WORLDHEADS-rss_2.0.xml?SITE=ILBLO&amp;SECTION=HOME&amp;TEMPLATE=DEFAULT",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e592"),
  "title": "Pantagraph.com - health",
  "groupname": "Pantagraph.com",
  "updateurl": "http://hosted.ap.org/lineups/HEALTH-rss_2.0.xml?SITE=ILBLO&amp;SECTION=HOME&amp;TEMPLATE=DEFAULT",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e593"),
  "title": "Pantagraph.com - technology",
  "groupname": "Pantagraph.com",
  "updateurl": "http://hosted.ap.org/lineups/TECHHEADS-rss_2.0.xml?SITE=ILBLO&amp;SECTION=HOME&amp;TEMPLATE=DEFAULT",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e594"),
  "title": "Delcotimes.com - local news",
  "groupname": "Delcotimes.com",
  "updateurl": "http://delcotimes.com/?rss=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e595"),
  "title": "Delcotimes.com - sports",
  "groupname": "Delcotimes.com",
  "updateurl": "http://delcotimes.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e596"),
  "title": "Delcotimes.com - business",
  "groupname": "Delcotimes.com",
  "updateurl": "http://business-news.thestreet.com/the-delaware-county-daily-times/rss/627",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e597"),
  "title": "Delcotimes.com - entertainment",
  "groupname": "Delcotimes.com",
  "updateurl": "http://delcotimes.com/?rss=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e598"),
  "title": "Delcotimes.com - life",
  "groupname": "Delcotimes.com",
  "updateurl": "http://delcotimes.com/?rss=life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e599"),
  "title": "Greenbaypressgazette - local news",
  "groupname": "Greenbaypressgazette",
  "updateurl": "http://www.greenbaypressgazette.com/apps/pbcs.dll/misc?URL=/templates/RSSlocal.pbs&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e59a"),
  "title": "Greenbaypressgazette - sports",
  "groupname": "Greenbaypressgazette",
  "updateurl": "http://www.greenbaypressgazette.com/apps/pbcs.dll/section?category=GPG02&amp;template=rsscat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e59b"),
  "title": "Greenbaypressgazette - business",
  "groupname": "Greenbaypressgazette",
  "updateurl": "http://www.greenbaypressgazette.com/apps/pbcs.dll/section?category=GPG03&amp;template=rsscat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e59c"),
  "title": "Greenbaypressgazette - sports",
  "groupname": "Greenbaypressgazette",
  "updateurl": "http://packersnews.greenbaypressgazette.com/apps/pbcs.dll/section?category=PKR01&amp;template=rsscat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e59d"),
  "title": "Rttnews.com - local news",
  "groupname": "Rttnews.com",
  "updateurl": "http://www.rttnews.com/rss/breakingnews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e59e"),
  "title": "Rttnews.com -  political",
  "groupname": "Rttnews.com",
  "updateurl": "http://www.rttnews.com/rss/Political.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e59f"),
  "title": "Rttnews.com -  economic",
  "groupname": "Rttnews.com",
  "updateurl": "http://www.rttnews.com/rss/EconomicNews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a0"),
  "title": "Sbnation.com - chicago sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://chicago.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a1"),
  "title": "Sbnation.com - cleveland",
  "groupname": "Sbnation.com",
  "updateurl": "http://cleveland.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a2"),
  "title": "Iwatch news - health",
  "groupname": "Iwatch news",
  "updateurl": "http://www.iwatchnews.org/taxonomy/term/rss/4",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a3"),
  "title": "Iwatch news - politics",
  "groupname": "Iwatch news",
  "updateurl": "http://www.iwatchnews.org/taxonomy/term/rss/1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a4"),
  "title": "Pegasusnews.com - local news",
  "groupname": "Pegasusnews.com",
  "updateurl": "http://www.pegasusnews.com/rss/headlines/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a5"),
  "title": "Sbnation.com - dallas sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://dallas.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a6"),
  "title": "Sbnation.com - detroit sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://detroit.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a7"),
  "title": "Sbnation.com - houston sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://houston.sbnation.com/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a8"),
  "title": "Sbnation.com - kansascity sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://kansascity.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5a9"),
  "title": "Sbnation.com - indiana sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://indiana.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5aa"),
  "title": "Sbnation.com - Losangeles sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://losangeles.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5ab"),
  "title": "Sbnation.com - minesota sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://minnesota.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5ac"),
  "title": "Sbnation.com - Philly sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://philly.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5ad"),
  "title": "Sbnation.com - Pittsburg sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://pittsburgh.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5ae"),
  "title": "Sbnation.com - Seatle sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://seattle.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a1c321d3be0004e5af"),
  "title": "Sbnation.com - stlouis sport",
  "groupname": "Sbnation.com",
  "updateurl": "http://stlouis.sbnation.com/rss/current",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b0"),
  "title": "Gosanangelo.com - politics",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b1"),
  "title": "Gosanangelo.com - world news",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/news/world/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b2"),
  "title": "Gosanangelo.com -local news",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b3"),
  "title": "Gosanangelo.com - state news",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/news/state/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b4"),
  "title": "Gosanangelo.com - national news",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/news/national/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b5"),
  "title": "Gosanangelo.com - sports",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/sports/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b6"),
  "title": "Gosanangelo.com - Golf sport",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/sports/golf/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b7"),
  "title": "Gosanangelo.com - entertainment",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/entertainment/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b8"),
  "title": "Gosanangelo.com - celebrity news",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/entertainment/people/celebrity-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5b9"),
  "title": "Gosanangelo.com - food",
  "groupname": "Gosanangelo.com",
  "updateurl": "http://www.gosanangelo.com/feeds/headlines/lifestyles/food/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5ba"),
  "title": "Augusta.com - local news",
  "groupname": "Augusta.com",
  "updateurl": "http://feeds.feedburner.com/augusta/latestnews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5bb"),
  "title": "ABC 7 News - politics",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7098466",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5bc"),
  "title": "ABC 7 News - indiana news",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7110829",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5bd"),
  "title": "ABC 7 News -  Wisconsin news",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7110852",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5be"),
  "title": "ABC 7 News -  world news",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7098725",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5bf"),
  "title": "ABC 7 News -  Health",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7098402",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5c0"),
  "title": "ABC 7 News -  business",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7102627",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5c1"),
  "title": "ABC 7 News -  entertainment",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7098439",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a2c321d3be0004e5c2"),
  "title": "ABC 7 News -  technology",
  "groupname": "ABC 7 News",
  "updateurl": "http://abclocal.go.com/wls/xml?id=7102628",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c3"),
  "title": "Tnr.com - world news",
  "groupname": "Tnr.com",
  "updateurl": "http://www.tnr.com/rss/articles/World",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c4"),
  "title": "Tnr.com - Politics",
  "groupname": "Tnr.com",
  "updateurl": "http://www.tnr.com/rss/articles/Politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c5"),
  "title": "Tnr.com - boks and art",
  "groupname": "Tnr.com",
  "updateurl": "http://www.tnr.com/rss/articles/Books-And-Arts",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c6"),
  "title": "Grandforksherald.com - local news",
  "groupname": "Grandforksherald.com",
  "updateurl": "http://www.grandforksherald.com/event/rss.tag/tag/News/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c7"),
  "title": "Grandforksherald.com - local news",
  "groupname": "Grandforksherald.com",
  "updateurl": "http://www.grandforksherald.com/event/rss.tag/tag/Politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c8"),
  "title": "Grandforksherald.com -  sports",
  "groupname": "Grandforksherald.com",
  "updateurl": "http://www.grandforksherald.com/event/rss.tag/tag/Sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5c9"),
  "title": "Grandforksherald.com - entertainment",
  "groupname": "Grandforksherald.com",
  "updateurl": "http://www.grandforksherald.com/event/rss.tag/tag/Entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5ca"),
  "title": "Grandforksherald.com - life",
  "groupname": "Grandforksherald.com",
  "updateurl": "http://www.grandforksherald.com/event/rss.tag/tag/Life/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5cb"),
  "title": "Laht.com - local news",
  "groupname": "Laht.com",
  "updateurl": "http://feeds.feedburner.com/laht/mailer?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5cc"),
  "title": "Redding.com - state news",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/news/state/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5cd"),
  "title": "Redding.com - local news",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5ce"),
  "title": "Redding.com - national news",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/news/national/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5cf"),
  "title": "Redding.com - sports",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/sports/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5d0"),
  "title": "Redding.com - world news",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/news/world/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5d1"),
  "title": "Redding.com - business",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/business/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5d2"),
  "title": "Redding.com - finance",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/feeds/headlines/business/financial-focus/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a3c321d3be0004e5d3"),
  "title": "Redding.com -  home and garden",
  "groupname": "Redding.com",
  "updateurl": "http://www.redding.com/rss/headlines/lifestyles/home-garden/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5d4"),
  "title": "Recordonline.com - local news",
  "groupname": "Recordonline.com",
  "updateurl": "http://www.recordonline.com/apps/pbcs.dll/section?Category=rss01&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5d5"),
  "title": "Recordonline.com - sports",
  "groupname": "Recordonline.com",
  "updateurl": "http://www.recordonline.com/apps/pbcs.dll/section?Category=rss02&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5d6"),
  "title": "Recordonline.com - business",
  "groupname": "Recordonline.com",
  "updateurl": "http://www.recordonline.com/apps/pbcs.dll/section?Category=rss06&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5d7"),
  "title": "Courier-journal - local news",
  "groupname": "Courier-journal",
  "updateurl": "http://www.courier-journal.com/section/rsslink?profile=1001&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5d8"),
  "title": "Courier-journal - Southern Indiana news",
  "groupname": "Courier-journal",
  "updateurl": "http://www.courier-journal.com/section/rsslink?profile=1025&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5d9"),
  "title": "Courier-journal - business",
  "groupname": "Courier-journal",
  "updateurl": "http://www.courier-journal.com/section/rsslink?profile=1003&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5da"),
  "title": "Courier-journal - health",
  "groupname": "Courier-journal",
  "updateurl": "http://www.courier-journal.com/section/rsslink?profile=1012&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5db"),
  "title": "Courier-journal - entertainment",
  "groupname": "Courier-journal",
  "updateurl": "http://www.courier-journal.com/section/rsslink?profile=1011&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5dc"),
  "title": "Courier-journal - sports",
  "groupname": "Courier-journal",
  "updateurl": "http://www.courier-journal.com/section/rsslink?profile=1002&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5dd"),
  "title": "WBEZ - Politics",
  "groupname": "WBEZ",
  "updateurl": "http://feeds.feedburner.com/cprpolitics?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5de"),
  "title": "WBEZ - economy",
  "groupname": "WBEZ",
  "updateurl": "http://feeds.feedburner.com/cprbusiness?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5df"),
  "title": "WBEZ - health",
  "groupname": "WBEZ",
  "updateurl": "http://www.wbez.org/feed/story/1295/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5e0"),
  "title": "WBEZ - technology",
  "groupname": "WBEZ",
  "updateurl": "http://www.wbez.org/feed/story/1366/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5e1"),
  "title": "WBEZ - entertainment",
  "groupname": "WBEZ",
  "updateurl": "http://www.wbez.org/feed/story/1970/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5e2"),
  "title": "WBEZ - food",
  "groupname": "WBEZ",
  "updateurl": "http://www.wbez.org/feed/story/2007/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5e3"),
  "title": "WBEZ - art",
  "groupname": "WBEZ",
  "updateurl": "http://www.wbez.org/feed/story/1413/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5e4"),
  "title": "Nola.com - local news",
  "groupname": "Nola.com",
  "updateurl": "http://blog.nola.com/news_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a4c321d3be0004e5e5"),
  "title": "Nola.com - sports",
  "groupname": "Nola.com",
  "updateurl": "http://blog.nola.com/sports_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5e6"),
  "title": "Nola.com - entertainment",
  "groupname": "Nola.com",
  "updateurl": "http://blog.nola.com/entertainment_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5e7"),
  "title": "Nola.com - business",
  "groupname": "Nola.com",
  "updateurl": "http://blog.nola.com/business_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5e8"),
  "title": "Theadvocate.com - entertainment",
  "groupname": "Theadvocate.com",
  "updateurl": "http://theadvocate.com/csp/mediapool/sites/dt.cms.rss.XMLServer.cls?pub=Advocate&amp;section=Entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5e9"),
  "title": "Theadvocate.com - sports",
  "groupname": "Theadvocate.com",
  "updateurl": "http://theadvocate.com/csp/mediapool/sites/dt.cms.rss.XMLServer.cls?pub=Advocate&amp;section=Sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5ea"),
  "title": "Theadvocate.com - business",
  "groupname": "Theadvocate.com",
  "updateurl": "http://theadvocate.com/csp/mediapool/sites/dt.cms.rss.XMLServer.cls?pub=Advocate&amp;section=Business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5eb"),
  "title": "Theadvocate.com - food",
  "groupname": "Theadvocate.com",
  "updateurl": "http://theadvocate.com/csp/mediapool/sites/dt.cms.rss.XMLServer.cls?pub=Advocate&amp;section=Food",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5ec"),
  "title": "Theadvocate.com - elections",
  "groupname": "Theadvocate.com",
  "updateurl": "http://theadvocate.com/csp/mediapool/sites/dt.cms.rss.XMLServer.cls?pub=Advocate&amp;section=Elections",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5ed"),
  "title": "Tampabay.com - politics",
  "groupname": "Tampabay.com",
  "updateurl": "http://www.tampabay.com/blogs/the-buzz-florida-politics/feed/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5ee"),
  "title": "Daytondailynews - local news",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=local-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5ef"),
  "title": "Daytondailynews.com - national news",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=news&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5f0"),
  "title": "Daytondailynews - business",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5f1"),
  "title": "Daytondailynews - Ohio news",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=ohio-news&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5f2"),
  "title": "Daytondailynews - world",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=nation-world&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5f3"),
  "title": "Daytondailynews - business",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=business&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5f4"),
  "title": "Daytondailynews - technology",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=technology&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a5c321d3be0004e5f5"),
  "title": "Daytondailynews - travel",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=travel&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5f6"),
  "title": "Daytondailynews - sports",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/list-rss.do?source=79809",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5f7"),
  "title": "Daytondailynews - local entertainment",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5f8"),
  "title": "Daytondailynews - entertainment",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=entertainment&amp;vendor=true",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5f9"),
  "title": "Daytondailynews - lifestyle",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=lifestyle",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5fa"),
  "title": "Daytondailynews - health",
  "groupname": "Daytondailynews",
  "updateurl": "http://www.daytondailynews.com/section-rss.do?source=health",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5fb"),
  "title": "Jacksonville.com - local news",
  "groupname": "Jacksonville.com",
  "updateurl": "http://feeds.jacksonville.com/JacksonvillecomNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5fc"),
  "title": "Jacksonville.com - business",
  "groupname": "Jacksonville.com",
  "updateurl": "http://feeds.jacksonville.com/JacksonvillecomBusiness?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5fd"),
  "title": "Jacksonville.com - Georgia news",
  "groupname": "Jacksonville.com",
  "updateurl": "http://feeds.jacksonville.com/JacksonvillecomGeorgiaNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5fe"),
  "title": "Jacksonville.com - sports",
  "groupname": "Jacksonville.com",
  "updateurl": "http://feeds.jacksonville.com/JacksonvillecomSports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e5ff"),
  "title": "Jacksonville.com - lifestyle",
  "groupname": "Jacksonville.com",
  "updateurl": "http://feeds.jacksonville.com/JacksonvillecomLifestyles?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e600"),
  "title": "Wtop.com - local news",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/41.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e601"),
  "title": "Wtop.com - DC news",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/109.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e602"),
  "title": "Wtop.com - Maryland news",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/46.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e603"),
  "title": "Wtop.com - Virginia news",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/120.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e604"),
  "title": "Wtop.com - National news",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/209.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e605"),
  "title": "Wtop.com - tecnology",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/256.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e606"),
  "title": "Wtop.com - scienes",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/884.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a6c321d3be0004e607"),
  "title": "Wtop.com - entertainment",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/541.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e608"),
  "title": "Wtop.com - Government",
  "groupname": "Wtop.com",
  "updateurl": "http://www.wtop.com/feed/289.rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e609"),
  "title": "Denverpost - local news",
  "groupname": "Denverpost",
  "updateurl": "http://feeds.denverpost.com/dp-news-breaking-local?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e60a"),
  "title": "Denverpost - business",
  "groupname": "Denverpost",
  "updateurl": "http://feeds.denverpost.com/dp-business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e60b"),
  "title": "Denverpost - entertainment",
  "groupname": "Denverpost",
  "updateurl": "http://feeds.denverpost.com/dp-entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e60c"),
  "title": "Denverpost - food",
  "groupname": "Denverpost",
  "updateurl": "http://feeds.denverpost.com/dp-food?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e60d"),
  "title": "Denverpost - lifestyle",
  "groupname": "Denverpost",
  "updateurl": "http://feeds.denverpost.com/dp-lifestyles?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e60e"),
  "title": "Denverpost - sports",
  "groupname": "Denverpost",
  "updateurl": "http://feeds.denverpost.com/dp-sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e60f"),
  "title": "Wsoctv.com - local news",
  "groupname": "Wsoctv.com",
  "updateurl": "http://www.wsoctv.com/list/rss/news/local/latest-news/mxc/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e610"),
  "title": "Delmarvanow.com - sports",
  "groupname": "Delmarvanow.com",
  "updateurl": "http://www.delmarvanow.com/apps/pbcs.dll/section?category=rss02&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e611"),
  "title": "Wsoctv.com - health",
  "groupname": "Wsoctv.com",
  "updateurl": "http://www.wsoctv.com/feeds/categories/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e612"),
  "title": "Wsoctv.com - sports",
  "groupname": "Wsoctv.com",
  "updateurl": "http://www.wsoctv.com/feeds/categories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e613"),
  "title": "Wsoctv.com - entertainment",
  "groupname": "Wsoctv.com",
  "updateurl": "http://www.wsoctv.com/feeds/categories/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e614"),
  "title": "Courierpress.com - state news",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/news/state/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e615"),
  "title": "Courierpress.com - local news",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e616"),
  "title": "Courierpress.com - politics",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/rss/headlines/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e617"),
  "title": "Gazette.net - Montgomery County News",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1007",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e618"),
  "title": "Courierpress.com - sports",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/sports/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a7c321d3be0004e619"),
  "title": "Courierpress.com - business",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/business/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e61a"),
  "title": "Courierpress.com - technology",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/business/technology/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e61b"),
  "title": "Courierpress.com -entertainment",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/entertainment/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e61c"),
  "title": "Courierpress.com -entertainment arts-theater",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/entertainment/arts-theater/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e61d"),
  "title": "Delmarvanow.com - local news",
  "groupname": "Delmarvanow.com",
  "updateurl": "http://www.delmarvanow.com/section/NEWS01&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e61e"),
  "title": "Courierpress.com - travel",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/lifestyles/travel/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e61f"),
  "title": "Courierpress.com - family",
  "groupname": "Courierpress.com",
  "updateurl": "http://www.courierpress.com/feeds/headlines/lifestyles/family/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e620"),
  "title": "Gazette.net - Prince George's County News",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1010",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e621"),
  "title": "Thestate.com - nation news",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/nationwire/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e622"),
  "title": "Thestate.com - politics",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/politics/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e623"),
  "title": "Thestate.com - business",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/business/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e624"),
  "title": "Thestate.com - technology",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/techwire/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e625"),
  "title": "Thestate.com - sports",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/sports/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e626"),
  "title": "Thestate.com - entertainment",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/weekend/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e627"),
  "title": "Thestate.com - life&amp;style",
  "groupname": "Thestate.com",
  "updateurl": "http://www.thestate.com/living/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e628"),
  "title": "Foxbaltimore.com local news",
  "groupname": "Foxbaltimore.com",
  "updateurl": "http://www.foxbaltimore.com/newsroom/top_stories/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e629"),
  "title": "Somd.com - local news",
  "groupname": "Somd.com",
  "updateurl": "http://somd.com/news/headlines/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e62a"),
  "title": "Gazette.net - Frederick County News",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1009",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a8c321d3be0004e62b"),
  "title": "Gazette.net  - Montgomery County Sports",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1015",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e62c"),
  "title": "Gazette.net  - Prince George's County Sports",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1026",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e62d"),
  "title": "Newsnet5.com - Ohio news",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e62e"),
  "title": "Gazette.net  - Frederick County Sports",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1012",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e62f"),
  "title": "Gazette.net  - politics",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1034",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e630"),
  "title": "Gazette.net  - business",
  "groupname": "Gazette.net",
  "updateurl": "http://www.gazette.net/section/news?template=RSS&amp;mime=xml&amp;profile=1033",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e631"),
  "title": "Washingtonexaminer - politics",
  "groupname": "Washingtonexaminer",
  "updateurl": "http://campaign2012.washingtonexaminer.com/rss/articles.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e632"),
  "title": "Washingtonexaminer - local",
  "groupname": "Washingtonexaminer",
  "updateurl": "http://washingtonexaminer.com/feed/featured",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e633"),
  "title": "Hometownannapolis - local news",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/NBHrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e634"),
  "title": "Hometownannapolis - region  news",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/REGrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e635"),
  "title": "Hometownannapolis - business",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/BUSrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e636"),
  "title": "Hometownannapolis - government",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/GOVrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e637"),
  "title": "Hometownannapolis - sports",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/SPOrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e638"),
  "title": "Hometownannapolis - entertainment",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/ENTrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e639"),
  "title": "Hometownannapolis - lifestyle",
  "groupname": "Hometownannapolis",
  "updateurl": "http://www.hometownannapolis.com/rss/lnews/LIFrss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e63a"),
  "title": "Wbal.com - local news",
  "groupname": "Wbal.com",
  "updateurl": "http://www.wbal.com/absolutenm/rss.aspx?z=2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e63b"),
  "title": "Wbal.com - sports",
  "groupname": "Wbal.com",
  "updateurl": "http://www.wbal.com/absolutenm/rss.aspx?z=6",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e63c"),
  "title": "Thebaynet.com - local news",
  "groupname": "Thebaynet.com",
  "updateurl": "http://feeds.feedburner.com/SouthernMarylandNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a9c321d3be0004e63d"),
  "title": "Fredericknewspost - sports",
  "groupname": "Fredericknewspost",
  "updateurl": "http://feeds.feedburner.com/fredericknewspost/ucqi?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e63e"),
  "title": "Fredericknewspost - busines",
  "groupname": "Fredericknewspost",
  "updateurl": "http://feeds.feedburner.com/TheFrederickNews-postBusinessNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e63f"),
  "title": "Courierpostonline - local news",
  "groupname": "Courierpostonline",
  "updateurl": "http://www.courierpostonline.com/section/news01?&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e640"),
  "title": "Courierpostonline - nation",
  "groupname": "Courierpostonline",
  "updateurl": "http://www.courierpostonline.com/section/news02?&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e641"),
  "title": "Courierpostonline - sports",
  "groupname": "Courierpostonline",
  "updateurl": "http://www.courierpostonline.com/section/sports04?template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e642"),
  "title": "Courierpostonline - business",
  "groupname": "Courierpostonline",
  "updateurl": "http://www.courierpostonline.com/section/business?template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e643"),
  "title": "Courierpostonline - entertainment",
  "groupname": "Courierpostonline",
  "updateurl": "http://www.courierpostonline.com/section/ent?template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e644"),
  "title": "Jsonline.com - business",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;path=%2Fbusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e645"),
  "title": "Jsonline.com - business",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;path=%2Fnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e646"),
  "title": "Jsonline.com - sports",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;c=y&amp;path=%2Fsports&amp;path=%2Fsports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e647"),
  "title": "Jsonline.com - home and garden",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;path=%2Ffeatures%2Fhomeandgarden",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e648"),
  "title": "Jsonline.com - travel",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;path=%2Ffeatures%2Ftravel",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e649"),
  "title": "Jsonline.com - food",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;c=y&amp;path=%2Ffeatures%2Ffood&amp;path=%2Ffeatures%2Ffood",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e64a"),
  "title": "Clevescene.com - local news",
  "groupname": "Clevescene.com",
  "updateurl": "http://www.clevescene.com/cleveland/Rss.xml?section=1392923",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e64b"),
  "title": "Clevescene.com - art",
  "groupname": "Clevescene.com",
  "updateurl": "http://www.clevescene.com/cleveland/Rss.xml?section=1392919",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e64c"),
  "title": "Clevescene.com - dining",
  "groupname": "Clevescene.com",
  "updateurl": "http://www.clevescene.com/cleveland/Rss.xml?section=1392921",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e64d"),
  "title": "Clevescene.com - music",
  "groupname": "Clevescene.com",
  "updateurl": "http://www.clevescene.com/cleveland/Rss.xml?section=1392924",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e64e"),
  "title": "Wmtw.com - Portland news",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e64f"),
  "title": "Wmtw.com - national news",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aac321d3be0004e650"),
  "title": "Wmtw.com - Politics",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/politics/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e651"),
  "title": "Wmtw.com -  sports",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e652"),
  "title": "Wmtw.com -  entertainment",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e653"),
  "title": "Wmtw.com -  health",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e654"),
  "title": "Wmtw.com -  money",
  "groupname": "Wmtw.com",
  "updateurl": "http://www.wmtw.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e655"),
  "title": "Bellinghamherald - local news",
  "groupname": "Bellinghamherald",
  "updateurl": "http://www.bellinghamherald.com/topstories/v-rss/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e656"),
  "title": "Bellinghamherald - sports",
  "groupname": "Bellinghamherald",
  "updateurl": "http://www.bellinghamherald.com/601/v-rss/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e657"),
  "title": "Bellinghamherald - business",
  "groupname": "Bellinghamherald",
  "updateurl": "http://www.bellinghamherald.com/businessnews/v-rss/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e658"),
  "title": "Bellinghamherald - entertainment",
  "groupname": "Bellinghamherald",
  "updateurl": "http://www.bellinghamherald.com/entertainmentnews/v-rss/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e659"),
  "title": "Policymic.com - local news",
  "groupname": "Policymic.com",
  "updateurl": "http://www.policymic.com/feed/latest",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e65a"),
  "title": "Wboc.com - national news",
  "groupname": "Wboc.com",
  "updateurl": "http://www.wboc.com/Global/category.asp?C=13530&amp;nav=menu222_2_8&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e65b"),
  "title": "Wboc.com - sports",
  "groupname": "Wboc.com",
  "updateurl": "http://www.wboc.com/Global/category.asp?C=42947&amp;nav=menu222_4&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e65c"),
  "title": "Bizjournals - banking  &amp; finance",
  "groupname": "Bizjournals",
  "updateurl": "http://feeds.bizjournals.com/industry_2?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e65d"),
  "title": "Bizjournals - technology",
  "groupname": "Bizjournals",
  "updateurl": "http://feeds.bizjournals.com/industry_7?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e65e"),
  "title": "Bizjournals - travel business",
  "groupname": "Bizjournals",
  "updateurl": "http://feeds.bizjournals.com/industry_12?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e65f"),
  "title": "Sentinelandenterprise.com - local news",
  "groupname": "Sentinelandenterprise.com",
  "updateurl": "http://feeds.sentinelandenterprise.com/mngi/rss/CustomRssServlet/106/200354.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e660"),
  "title": "Midlandsconnect.com - economy",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?stories=195148&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e661"),
  "title": "Ontopmag.com - local",
  "groupname": "Ontopmag.com",
  "updateurl": "http://feeds.feedburner.com/OnTopMagazineHeadlines?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00abc321d3be0004e662"),
  "title": "Tbo.com - local news",
  "groupname": "Tbo.com",
  "updateurl": "http://feeds.feedburner.com/tbo/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e663"),
  "title": "Tbo.com - nation news",
  "groupname": "Tbo.com",
  "updateurl": "http://feeds.feedburner.com/tbo/nationworld",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e664"),
  "title": "Tbo.com - money",
  "groupname": "Tbo.com",
  "updateurl": "http://feeds.feedburner.com/tbo/money",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e665"),
  "title": "Tbo.com - politics",
  "groupname": "Tbo.com",
  "updateurl": "http://feeds.feedburner.com/tbo/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e666"),
  "title": "Tbo.com - sports",
  "groupname": "Tbo.com",
  "updateurl": "http://feeds.feedburner.com/tbo/sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e667"),
  "title": "Tbo.com - life",
  "groupname": "Tbo.com",
  "updateurl": "http://feeds.feedburner.com/tbo/life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e668"),
  "title": "KUER - local news",
  "groupname": "KUER",
  "updateurl": "http://www.publicbroadcasting.net/kuer/news.newsmain?action=rssheadlines&amp;section=1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e669"),
  "title": "KUER - world",
  "groupname": "KUER",
  "updateurl": "http://www.publicbroadcasting.net/kuer/news.newsmain?action=rssheadlines&amp;section=3",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e66a"),
  "title": "KUER - business",
  "groupname": "KUER",
  "updateurl": "http://www.publicbroadcasting.net/kuer/news.newsmain?action=rssheadlines&amp;section=5",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e66b"),
  "title": "KUER - U.S. news",
  "groupname": "KUER",
  "updateurl": "http://www.publicbroadcasting.net/kuer/news.newsmain?action=rssheadlines&amp;section=2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e66c"),
  "title": "KUER - art",
  "groupname": "KUER",
  "updateurl": "http://www.publicbroadcasting.net/kuer/news.newsmain?action=rssheadlines&amp;section=8",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e66d"),
  "title": "Bilboard - entertainment",
  "groupname": "Bilboard",
  "updateurl": "http://www.billboard.com/rss/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e66e"),
  "title": "Spinner.com - entertainment",
  "groupname": "Spinner.com",
  "updateurl": "http://feeds.feedburner.com/Spinner",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e66f"),
  "title": "GPBNews - local",
  "groupname": "GPBNews",
  "updateurl": "http://feeds.feedburner.com/GPBNewsFeed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e670"),
  "title": "deathandtaxesmag.com - local news",
  "groupname": "deathandtaxesmag.com",
  "updateurl": "http://www.deathandtaxesmag.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e671"),
  "title": "Wbur.org -  Boston news",
  "groupname": "Wbur.org",
  "updateurl": "http://feeds.wbur.org/wbur_news/boston?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e672"),
  "title": "Kaiserhealthnews - politics",
  "groupname": "Kaiserhealthnews",
  "updateurl": "http://feeds.kaiserhealthnews.org/topics/politics/headlinesonly?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00acc321d3be0004e673"),
  "title": "Kaiserhealthnews - mental health",
  "groupname": "Kaiserhealthnews",
  "updateurl": "http://feeds.kaiserhealthnews.org/topics/mentalhealth/headlinesonly?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e674"),
  "title": "Voanews - Europe",
  "groupname": "Voanews",
  "updateurl": "http://www.voanews.com/templates/Articles.rss?sectionPath=/english/news/europe",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e675"),
  "title": "Pri.org - local",
  "groupname": "Pri.org",
  "updateurl": "http://www.pri.org/feed/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e676"),
  "title": "Spectator.org - politics",
  "groupname": "Spectator.org",
  "updateurl": "http://feeds.feedburner.com/amspecfull?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e677"),
  "title": "Komonews.com - local news",
  "groupname": "Komonews.com",
  "updateurl": "http://www.komonews.com/news/?fin=xml&amp;type=default&amp;c=y",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e678"),
  "title": "Auburnpub.com - local news",
  "groupname": "Auburnpub.com",
  "updateurl": "http://auburnpub.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e679"),
  "title": "Auburnpub.com - entertainment",
  "groupname": "Auburnpub.com",
  "updateurl": "http://auburnpub.com/search/?f=rss&amp;t=article&amp;c=entertainment&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e67a"),
  "title": "Auburnpub.com - life",
  "groupname": "Auburnpub.com",
  "updateurl": "http://auburnpub.com/search/?f=rss&amp;t=article&amp;c=lifestyles&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e67b"),
  "title": "Ydr.com - local news",
  "groupname": "Ydr.com",
  "updateurl": "http://feeds.ydr.com/mngi/rss/CustomRssServlet/515/230603.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e67c"),
  "title": "Missoulian.com - local news",
  "groupname": "Missoulian.com",
  "updateurl": "http://missoulian.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e67d"),
  "title": "Missoulian.com - money",
  "groupname": "Missoulian.com",
  "updateurl": "http://missoulian.com/search/?f=rss&amp;t=article&amp;c=business&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e67e"),
  "title": "Missoula.com - sports",
  "groupname": "Missoula.com",
  "updateurl": "http://missoula.com/cleanrss/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e67f"),
  "title": "Missoula.com - health",
  "groupname": "Missoula.com",
  "updateurl": "http://missoula.com/cleanrss/?rss=lifestyles/health-med-fit",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e680"),
  "title": "Missoula.com - food",
  "groupname": "Missoula.com",
  "updateurl": "http://missoula.com/cleanrss/?rss=lifestyles/food-and-cooking",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e681"),
  "title": "Knoxnews.com - business",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e682"),
  "title": "Knoxnews.com - food",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/lifestyles/food/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e683"),
  "title": "Knoxnews.com - travel",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/lifestyles/travel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e684"),
  "title": "Knoxnews.com - local news",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/news/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00adc321d3be0004e685"),
  "title": "Knoxnews.com - Election",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/news/politics/election/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e686"),
  "title": "Knoxnews.com - Politics",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e687"),
  "title": "Knoxnews.com - basketball sport",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/sports/high-school/basketball/boys/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e688"),
  "title": "Knoxnews.com - soccer sport",
  "groupname": "Knoxnews.com",
  "updateurl": "http://www.knoxnews.com/rss/headlines/sports/high-school/soccer/boys/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e689"),
  "title": "Mnn.com - New York",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/new-york",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e68a"),
  "title": "Gainesvilletimes.com - Georgia Bulldogs",
  "groupname": "Gainesvilletimes.com",
  "updateurl": "http://www.gainesvilletimes.com/syndication/feeds/rss/36/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e68b"),
  "title": "Gainesvilletimes.com - elections",
  "groupname": "Gainesvilletimes.com",
  "updateurl": "http://www.gainesvilletimes.com/syndication/feeds/rss/154/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e68c"),
  "title": "Gainesvilletimes.com - good news",
  "groupname": "Gainesvilletimes.com",
  "updateurl": "http://www.gainesvilletimes.com/syndication/feeds/rss/84/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e68d"),
  "title": "Gainesvilletimes.com - life",
  "groupname": "Gainesvilletimes.com",
  "updateurl": "http://www.gainesvilletimes.com/syndication/feeds/rss/199/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e68e"),
  "title": "Gainesvilletimes.com - weddings",
  "groupname": "Gainesvilletimes.com",
  "updateurl": "http://www.gainesvilletimes.com/syndication/feeds/rss/81/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e68f"),
  "title": "Azcentral.com - Arizona news",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/rss/feeds/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e690"),
  "title": "Azcentral.com - Arizona sports",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/rss/feeds/azsports.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e691"),
  "title": "Azcentral.com - business",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/rss/feeds/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e692"),
  "title": "Azcentral.com - Ahwatukee news",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/rss/feeds/ahwatukee.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e693"),
  "title": "Azcentral.com - Chandler news",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/rss/feeds/chandler.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e694"),
  "title": "Azcentral.com -  USA sports",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/rss/feeds/ua.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e695"),
  "title": "Azcentral.com -  travel",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/members/Blog~/RealDealsblog/tag/95",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e696"),
  "title": "Azcentral.com -  entertainment",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/members/Blog~/RealDealsblog/tag/14",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00aec321d3be0004e697"),
  "title": "Azcentral.com - dining",
  "groupname": "Azcentral.com",
  "updateurl": "http://www.azcentral.com/members/Blog~/RealDealsblog/tag/982",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e698"),
  "title": "Q13fox.com - local news",
  "groupname": "Q13fox.com",
  "updateurl": "http://www.q13fox.com/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e699"),
  "title": "Wafb.com - local news",
  "groupname": "Wafb.com",
  "updateurl": "http://feeds.feedburner.com/wafb/local",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e69a"),
  "title": "Nctimes.com - world",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=news/world&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e69c"),
  "title": "Nctimes.com - sports",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=sports&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e69d"),
  "title": "Nctimes.com - entertainment",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=entertainment&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e69e"),
  "title": "Nctimes.com - Iland news",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?q=&amp;f=rss&amp;t=article&amp;k=inland&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a1"),
  "title": "Nctimes.com - health",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=lifestyles/health-med-fit&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a2"),
  "title": "Montereyherald.com - news",
  "groupname": "Montereyherald.com",
  "updateurl": "http://feeds.montereyherald.com/mngi/rss/CustomRssServlet/570/200432.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a3"),
  "title": "Montereyherald.com - business",
  "groupname": "Montereyherald.com",
  "updateurl": "http://feeds.montereyherald.com/mngi/rss/CustomRssServlet/570/200118.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a4"),
  "title": "Montereyherald.com - sports",
  "groupname": "Montereyherald.com",
  "updateurl": "http://feeds.montereyherald.com/mngi/rss/CustomRssServlet/570/200434.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a5"),
  "title": "Montereyherald.com - golf sports",
  "groupname": "Montereyherald.com",
  "updateurl": "http://feeds.montereyherald.com/mngi/rss/CustomRssServlet/570/202207.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a6"),
  "title": "Montereyherald.com - home and garden",
  "groupname": "Montereyherald.com",
  "updateurl": "http://feeds.montereyherald.com/mngi/rss/CustomRssServlet/570/202212.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a7"),
  "title": "Montereyherald.com - entertainment",
  "groupname": "Montereyherald.com",
  "updateurl": "http://feeds.montereyherald.com/mngi/rss/CustomRssServlet/570/202213.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a8"),
  "title": "Сbs8.com - local news",
  "groupname": "Сbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154671",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6a9"),
  "title": "Сbs8.com - California news",
  "groupname": "Сbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154673",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6aa"),
  "title": "Cbs8.com - National news",
  "groupname": "Сbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154660",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6ab"),
  "title": "Cbs8.com - world",
  "groupname": "Сbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154664",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6ac"),
  "title": "Cbs8.com - business",
  "groupname": "Сbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154663",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6ad"),
  "title": "Cbs8.com - politics",
  "groupname": "Cbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154657",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6ae"),
  "title": "Cbs8.com - entertainment",
  "groupname": "Cbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154659",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6af"),
  "title": "Cbs8.com - sports",
  "groupname": "Cbs8.com",
  "updateurl": "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&amp;C=154788",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b0"),
  "title": "Neontommy - local news",
  "groupname": "Neontommy",
  "updateurl": "http://feeds.feedburner.com/neontommy/hTJi?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b1"),
  "title": "Wusa9.com - District News",
  "groupname": "Wusa9.com",
  "updateurl": "http://wusa9.com/rss/district/187/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b2"),
  "title": "Wusa9.com - Virginia news",
  "groupname": "Wusa9.com",
  "updateurl": "http://wusa9.com/rss/virginia/188/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b3"),
  "title": "Wusa9.com - Maryland News",
  "groupname": "Wusa9.com",
  "updateurl": "http://wusa9.com/rss/maryland/189/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b4"),
  "title": "Wusa9.com - sports",
  "groupname": "Wusa9.com",
  "updateurl": "http://wusa9.com/rss/sports/25/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b5"),
  "title": "Wusa9.com - health",
  "groupname": "Wusa9.com",
  "updateurl": "http://wusa9.com/rss/health/28/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b6"),
  "title": "Wusa9.com - politics and election",
  "groupname": "Wusa9.com",
  "updateurl": "http://wusa9.com/rss/politics/82/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b0c321d3be0004e6b7"),
  "title": "Contracostatimes  - local news",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/200818.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6b8"),
  "title": "Contracostatimes  - science",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/200825.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6b9"),
  "title": "Contracostatimes  - politics",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/200827.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6ba"),
  "title": "Contracostatimes  - business",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/200884.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6bb"),
  "title": "Contracostatimes  - sports",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/225005.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6bc"),
  "title": "Contracostatimes  - golf sport",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/200889.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6bd"),
  "title": "Contracostatimes  - life&amp;style",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.mercurynews.com/mngi/rss/CustomRssServlet/568/200732.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6be"),
  "title": "Ksee24.com - nation news",
  "groupname": "Ksee24.com",
  "updateurl": "http://www.ksee24.com/news/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6bf"),
  "title": "Ksee24.com - sports",
  "groupname": "Ksee24.com",
  "updateurl": "http://www.ksee24.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c0"),
  "title": "Ksee24.com - business",
  "groupname": "Ksee24.com",
  "updateurl": "http://www.ksee24.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c1"),
  "title": "TheRoot.com",
  "groupname": "TheRoot.com",
  "updateurl": "http://feeds.feedburner.com/TheRootRssFeed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c2"),
  "title": "Dailyprincetonian.com - local news",
  "groupname": "Dailyprincetonian.com",
  "updateurl": "http://www.dailyprincetonian.com/feeds/section/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c3"),
  "title": "Dailyprincetonian.com -  sports",
  "groupname": "Dailyprincetonian.com",
  "updateurl": "http://www.dailyprincetonian.com/feeds/section/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c4"),
  "title": "Fox43 - Penvsylvania's news",
  "groupname": "Fox43",
  "updateurl": "http://feeds.feedburner.com/fox43/jndg?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c5"),
  "title": "Northjersey.com - local news",
  "groupname": "Northjersey.com",
  "updateurl": "http://www.northjersey.com/northjersey.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c6"),
  "title": "Goerie.com - local news",
  "groupname": "Goerie.com",
  "updateurl": "http://www.goerie.com/apps/pbcs.dll/section?category=RSS18&amp;mime=xml&amp;omniture=0",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c7"),
  "title": "Goerie.com - sports news",
  "groupname": "Goerie.com",
  "updateurl": "http://www.goerie.com/apps/pbcs.dll/section?category=RSS06&amp;mime=xml&amp;omniture=0",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c8"),
  "title": "Goerie.com - enetertainment",
  "groupname": "Goerie.com",
  "updateurl": "http://www.goerie.com/apps/pbcs.dll/section?category=RSS04&amp;mime=xml&amp;omniture=0",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b1c321d3be0004e6c9"),
  "title": "Goerie.com - business",
  "groupname": "Goerie.com",
  "updateurl": "http://www.goerie.com/apps/pbcs.dll/section?category=RSS03&amp;mime=xml&amp;omniture=0",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6ca"),
  "title": "Goerie.com - lifestyle",
  "groupname": "Goerie.com",
  "updateurl": "http://www.goerie.com/apps/pbcs.dll/section?category=RSS05&amp;mime=xml&amp;omniture=0",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6cb"),
  "title": "Al.com - Birmingham news",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/spotnews/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6cc"),
  "title": "Al.com -  Huntsville Times news",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/breaking/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6cd"),
  "title": "Al.com -  business",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/businessnews/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6ce"),
  "title": "Al.com -  press-register-business",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/press-register-business/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6cf"),
  "title": "Al.com -  Huntsville Times - business",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/breaking/business/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d0"),
  "title": "Al.com -  politics",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/sweethome/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d1"),
  "title": "Al.com -  izzygould sports",
  "groupname": "Al.com",
  "updateurl": "http://connect.al.com/user/izzygould/posts.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d2"),
  "title": "Al.com -  sports",
  "groupname": "Al.com",
  "updateurl": "http://connect.al.com/user/dkausler/posts.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d3"),
  "title": "Al.com - sport Doug Segrest",
  "groupname": "Al.com",
  "updateurl": "http://connect.al.com/user/dsegrest/posts.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d4"),
  "title": "Al.com - sport  Charles Goldberg",
  "groupname": "Al.com",
  "updateurl": "http://connect.al.com/user/cgoldber/posts.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d5"),
  "title": "Al.com -  travel",
  "groupname": "Al.com",
  "updateurl": "http://blog.al.com/pattys-travel-tips/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d6"),
  "title": "Kpho.com - local news",
  "groupname": "Kpho.com",
  "updateurl": "http://www.kpho.com/category/216452/kpho-newstream?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d7"),
  "title": "Kpho.com - entertainmemnt",
  "groupname": "Kpho.com",
  "updateurl": "http://www.kpho.com/category/73801/entertainment?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d8"),
  "title": "Kpho.com - sports",
  "groupname": "Kpho.com",
  "updateurl": "http://www.kpho.com/category/13566/national-sports?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6d9"),
  "title": "Baristanet.com - local news",
  "groupname": "Baristanet.com",
  "updateurl": "http://feeds.feedburner.com/baristanetfeed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b2c321d3be0004e6da"),
  "title": "Newjerseynewsroom - local N.J. news",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/n.j/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6db"),
  "title": "Newjerseynewsroom - world news",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/world/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6dc"),
  "title": "Newjerseynewsroom - sports",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/sports/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6dd"),
  "title": "Newjerseynewsroom - money",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/money/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6de"),
  "title": "Newjerseynewsroom - entertainment",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/entertainment/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6df"),
  "title": "Newjerseynewsroom - sci&amp;tech",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/sci/tech/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e0"),
  "title": "Newjerseynewsroom - lifestyle",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/life/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e1"),
  "title": "Newjerseynewsroom - local U.S. News",
  "groupname": "Newjerseynewsroom",
  "updateurl": "http://www.newjerseynewsroom.com/u.s/feed/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e2"),
  "title": "Ology.com - fashion and beauty",
  "groupname": "Ology.com",
  "updateurl": "http://ology.com/fashion-and-beauty/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e3"),
  "title": "Ology.com - celebs-and-gossip",
  "groupname": "Ology.com",
  "updateurl": "http://ology.com/celebs-and-gossip/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e4"),
  "title": "Ology.com - sports",
  "groupname": "Ology.com",
  "updateurl": "http://ology.com/sports/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e5"),
  "title": "Ology.com - politics",
  "groupname": "Ology.com",
  "updateurl": "http://ology.com/politics/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e6"),
  "title": "Lehighvalleylive.com - Allentown Area News",
  "groupname": "Lehighvalleylive.com",
  "updateurl": "http://impact.lehighvalleylive.com/allentown/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e7"),
  "title": "Lehighvalleylive.com - local news",
  "groupname": "Lehighvalleylive.com",
  "updateurl": "http://blog.lehighvalleylive.com/lvnews_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e8"),
  "title": "Lehighvalleylive.com - sports",
  "groupname": "Lehighvalleylive.com",
  "updateurl": "http://blog.lehighvalleylive.com/sports_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6e9"),
  "title": "Lehighvalleylive.com - entertainment",
  "groupname": "Lehighvalleylive.com",
  "updateurl": "http://blog.lehighvalleylive.com/entertainment_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b3c321d3be0004e6ea"),
  "title": "Kirotv.com - regiomal",
  "groupname": "Kirotv.com",
  "updateurl": "http://www.kirotv.com/list/rss/news/state-headlines/arG/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6eb"),
  "title": "Masslive.com - local news",
  "groupname": "Masslive.com",
  "updateurl": "http://blog.masslive.com/breakingnews/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6ec"),
  "title": "Masslive.com - sports",
  "groupname": "Masslive.com",
  "updateurl": "http://blog.masslive.com/sports_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6ed"),
  "title": "Masslive.com - entertainnment",
  "groupname": "Masslive.com",
  "updateurl": "http://blog.masslive.com/entertainment/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6ee"),
  "title": "Newsworks - health&amp;scienece",
  "groupname": "Newsworks",
  "updateurl": "http://feeds.feedburner.com/Newsworks-HealthAndScience?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6ef"),
  "title": "Newsworks - Delaware news",
  "groupname": "Newsworks",
  "updateurl": "http://feeds.feedburner.com/Newsworks-delaware?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f0"),
  "title": "Thegrio.com - local news",
  "groupname": "Thegrio.com",
  "updateurl": "http://www.thegrio.com/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f1"),
  "title": "Eurweb.com - local news",
  "groupname": "Eurweb.com",
  "updateurl": "http://www.eurweb.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f2"),
  "title": "Politickernj.com - politics",
  "groupname": "Politickernj.com",
  "updateurl": "http://www.politickernj.com/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f3"),
  "title": "Sltrib.com - nation",
  "groupname": "Sltrib.com",
  "updateurl": "http://www.sltrib.com/csp/cms/sites/sltrib/RSS/rss.csp?cat=World",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f4"),
  "title": "Observer.com - entertainment",
  "groupname": "Observer.com",
  "updateurl": "http://www.observer.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f5"),
  "title": "TheNewCivilRightsMovement - local news",
  "groupname": "TheNewCivilRightsMovement",
  "updateurl": "http://feeds.feedburner.com/TheNewCivilRightsMovement?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f6"),
  "title": "Sltrib.com - local news",
  "groupname": "Sltrib.com",
  "updateurl": "http://www.sltrib.com/csp/cms/sites/sltrib/RSS/rss.csp?cat=UtahNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f7"),
  "title": "Clickorlando.com - sports",
  "groupname": "Clickorlando.com",
  "updateurl": "http://www.clickorlando.com/sports/-/1636890/-/format/rss_2.0/view/asFeed/-/nwc9rfz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f8"),
  "title": "Sltrib.com - business",
  "groupname": "Sltrib.com",
  "updateurl": "http://www.sltrib.com/csp/cms/sites/sltrib/RSS/rss.csp?cat=Money",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6f9"),
  "title": "Sltrib.com - politics",
  "groupname": "Sltrib.com",
  "updateurl": "http://www.sltrib.com/csp/cms/sites/sltrib/RSS/rss.csp?cat=Politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6fa"),
  "title": "Sltrib.com - sports",
  "groupname": "Sltrib.com",
  "updateurl": "http://www.sltrib.com/csp/cms/sites/sltrib/RSS/rss.csp?cat=Sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6fb"),
  "title": "People.com - news",
  "groupname": "People.com",
  "updateurl": "http://rss.people.com/web/people/rss/topheadlines/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b4c321d3be0004e6fc"),
  "title": "Myfoxphoenix.com - local news",
  "groupname": "Myfoxphoenix.com",
  "updateurl": "http://www.myfoxphoenix.com/feeds/rssFeed?siteId=1007&amp;obfType=RSS_FEED&amp;categoryId=10001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e6fd"),
  "title": "Myfoxphoenix.com - National news",
  "groupname": "Myfoxphoenix.com",
  "updateurl": "http://www.myfoxphoenix.com/feeds/rssFeed?siteId=1007&amp;obfType=RSS_FEED&amp;categoryId=20055",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e6fe"),
  "title": "Myfoxphoenix.com - World news",
  "groupname": "Myfoxphoenix.com",
  "updateurl": "http://www.myfoxphoenix.com/feeds/rssFeed?siteId=1007&amp;obfType=RSS_FEED&amp;categoryId=20056",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e6ff"),
  "title": "Myfoxphoenix.com - sports",
  "groupname": "Myfoxphoenix.com",
  "updateurl": "http://www.myfoxphoenix.com/feeds/rssFeed?siteId=1007&amp;obfType=RSS_FEED&amp;categoryId=10004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e700"),
  "title": "Myfoxphoenix.com - health",
  "groupname": "Myfoxphoenix.com",
  "updateurl": "http://www.myfoxphoenix.com/feeds/rssFeed?siteId=1007&amp;obfType=RSS_FEED&amp;categoryId=10005",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e701"),
  "title": "Myfoxphoenix.com - entertainment",
  "groupname": "Myfoxphoenix.com",
  "updateurl": "http://www.myfoxphoenix.com/feeds/rssFeed?siteId=1007&amp;obfType=RSS_FEED&amp;categoryId=10008",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e702"),
  "title": "Wtam.com - local news",
  "groupname": "Wtam.com",
  "updateurl": "http://www.wtam.com/script2/rss.php?f=104707",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e703"),
  "title": "Wtam.com -  Sports  Cavaliers",
  "groupname": "Wtam.com",
  "updateurl": "http://www.wtam.com/script2/rss.php?f=219119",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e704"),
  "title": "TPM news - local news",
  "groupname": "TPM news",
  "updateurl": "http://feeds.feedburner.com/tpm-news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e705"),
  "title": "Politicker.com",
  "groupname": "Politicker.com",
  "updateurl": "http://www.politicker.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e706"),
  "title": "Cjr.org - local news",
  "groupname": "Cjr.org",
  "updateurl": "http://www.cjr.org/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e707"),
  "title": "Azfamily.com - local news",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/outbound-feeds/yahoo-news/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e708"),
  "title": "Azfamily.com - sports",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e709"),
  "title": "Azfamily.com - world",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/news/world/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e70a"),
  "title": "Azfamily.com - entertainment",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/entertainment/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e70b"),
  "title": "Azfamily.com - business",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e70c"),
  "title": "Azfamily.com - health",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/news/health/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b5c321d3be0004e70d"),
  "title": "Azfamily.com - national news",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/news/national/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e70e"),
  "title": "Azfamily.com - Phoenix news",
  "groupname": "Azfamily.com",
  "updateurl": "http://www.azfamily.com/news/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e710"),
  "title": "Mysanantonio.com - politics",
  "groupname": "Mysanantonio.com",
  "updateurl": "http://www.mysanantonio.com/news/politics/collectionRss/News-Politics-Story-Index-Headline-List-8436.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e711"),
  "title": "Mysanantonio.com - food",
  "groupname": "Mysanantonio.com",
  "updateurl": "http://www.mysanantonio.com/life/food/collectionRss/Life-Food-Archive-Headline-List-8878.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e712"),
  "title": "Mysanantonio.com - sports",
  "groupname": "Mysanantonio.com",
  "updateurl": "http://www.mysanantonio.com/sports/collectionRss/Sports-Sports-Story-Index-Headline-List-8483.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e713"),
  "title": "Ktar.com - local news",
  "groupname": "Ktar.com",
  "updateurl": "http://ktar.com/xml/6.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e714"),
  "title": "Ktar.com - U.S. news",
  "groupname": "Ktar.com",
  "updateurl": "http://ktar.com/xml/509.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e716"),
  "title": "Ktar.com - entertainment",
  "groupname": "Ktar.com",
  "updateurl": "http://ktar.com/xml/50.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e717"),
  "title": "Lezgetreal.com - local news",
  "groupname": "Lezgetreal.com",
  "updateurl": "http://feeds.feedburner.com/blogspot/WCZf?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e718"),
  "title": "Kirotv.com - local news",
  "groupname": "Kirotv.com",
  "updateurl": "http://www.kirotv.com/list/rss/news/kiro-7-eyewitness-news-headlines/mq6/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e719"),
  "title": "Kirotv.com - National",
  "groupname": "Kirotv.com",
  "updateurl": "http://www.kirotv.com/list/rss/ap/us/latest-us-headlines/akf/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e71b"),
  "title": "Kxly.com - Spokane And E. WA News",
  "groupname": "Kxly.com",
  "updateurl": "http://www.kxly.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e71c"),
  "title": "Kxly.com - Nationalnews",
  "groupname": "Kxly.com",
  "updateurl": "http://www.kxly.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e71d"),
  "title": "Kxly.com - sports",
  "groupname": "Kxly.com",
  "updateurl": "http://www.kxly.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e71e"),
  "title": "Kxly.com - money",
  "groupname": "Kxly.com",
  "updateurl": "http://www.kxly.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e71f"),
  "title": "Kxly.com - money",
  "groupname": "Kxly.com",
  "updateurl": "http://www.kxly.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e720"),
  "title": "Spokesman.com - business",
  "groupname": "Spokesman.com",
  "updateurl": "http://www.spokesman.com/feeds/stories/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e721"),
  "title": "Spokesman.com - World",
  "groupname": "Spokesman.com",
  "updateurl": "http://www.spokesman.com/feeds/stories/nation-world/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e722"),
  "title": "Spokesman.com - local news",
  "groupname": "Spokesman.com",
  "updateurl": "http://www.spokesman.com/feeds/stories/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e723"),
  "title": "Spokesman.com - sports",
  "groupname": "Spokesman.com",
  "updateurl": "http://www.spokesman.com/feeds/stories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e724"),
  "title": "Spokesman.com - travel",
  "groupname": "Spokesman.com",
  "updateurl": "http://www.spokesman.com/feeds/stories/travel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e725"),
  "title": "Jamaicaobserver.com - business",
  "groupname": "Jamaicaobserver.com",
  "updateurl": "http://www.jamaicaobserver.com/rss/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e726"),
  "title": "Jamaicaobserver.com - sports",
  "groupname": "Jamaicaobserver.com",
  "updateurl": "http://www.jamaicaobserver.com/rss/sport/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e727"),
  "title": "Jamaicaobserver.com - lifestyle",
  "groupname": "Jamaicaobserver.com",
  "updateurl": "http://www.jamaicaobserver.com/rss/lifestyle/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e728"),
  "title": "Jamaicaobserver.com - entertainment",
  "groupname": "Jamaicaobserver.com",
  "updateurl": "http://www.jamaicaobserver.com/rss/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e729"),
  "title": "Dallasnews - politics",
  "groupname": "Dallasnews",
  "updateurl": "http://www.dallasnews.com/news/politics/headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e72a"),
  "title": "Dallasnews - business",
  "groupname": "Dallasnews",
  "updateurl": "http://www.dallasnews.com/business/headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e72b"),
  "title": "Dallasnews - sports",
  "groupname": "Dallasnews",
  "updateurl": "http://www.dallasnews.com/sports/dallas-cowboys/headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e72c"),
  "title": "Dallasnews - entertainment",
  "groupname": "Dallasnews",
  "updateurl": "http://www.dallasnews.com/entertainment/columnists/joy-tipping/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e72d"),
  "title": "Dallasnews - travel",
  "groupname": "Dallasnews",
  "updateurl": "http://www.dallasnews.com/travel/texas/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e72e"),
  "title": "News-medical.net",
  "groupname": "News-medical.net",
  "updateurl": "http://www.news-medical.net/syndication.axd?format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e72f"),
  "title": "Mrc.org - news",
  "groupname": "Mrc.org",
  "updateurl": "http://www.mrc.org/bias-alerts/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b7c321d3be0004e730"),
  "title": "Cnsnews.com  - local news",
  "groupname": "Cnsnews.com",
  "updateurl": "http://cnsnews.com/feeds/all",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e731"),
  "title": "Ny1.com - local news",
  "groupname": "Ny1.com",
  "updateurl": "http://www.ny1.com/Rss/PubFeeds.aspx?SecID=1000&amp;RegionCookie=1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e732"),
  "title": "Mediaite.com - politics",
  "groupname": "Mediaite.com",
  "updateurl": "http://www.mediaite.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e733"),
  "title": "Boiseweekly.com - local news",
  "groupname": "Boiseweekly.com",
  "updateurl": "http://www.boiseweekly.com/boise/Rss.xml?section=920003",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e734"),
  "title": "Boiseweekly.com - food",
  "groupname": "Boiseweekly.com",
  "updateurl": "http://www.boiseweekly.com/boise/Rss.xml?section=920009",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e735"),
  "title": "11ALIVE - national news",
  "groupname": "11ALIVE",
  "updateurl": "http://www.11alive.com/rss/usworld/166/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e736"),
  "title": "11ALIVE - local news",
  "groupname": "11ALIVE",
  "updateurl": "http://www.11alive.com/rss/local/3/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e737"),
  "title": "11ALIVE - politics",
  "groupname": "11ALIVE",
  "updateurl": "http://www.11alive.com/rss/politics/12/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e738"),
  "title": "11ALIVE - business",
  "groupname": "11ALIVE",
  "updateurl": "http://www.11alive.com/rss/moneybusiness/29/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e739"),
  "title": "11ALIVE - entertainment",
  "groupname": "11ALIVE",
  "updateurl": "http://www.11alive.com/rss/life/37/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e73a"),
  "title": "11ALIVE - spotrs",
  "groupname": "11ALIVE",
  "updateurl": "http://www.11alive.com/rss/sports/5/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e73b"),
  "title": "WABE News - Atlanta",
  "groupname": "WABE News",
  "updateurl": "http://www.publicbroadcasting.net/wabe/news.newsmain?action=rssheadlines&amp;section=1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e73c"),
  "title": "WABE News - national news",
  "groupname": "WABE News",
  "updateurl": "http://www.publicbroadcasting.net/wabe/news.newsmain?action=rssheadlines&amp;section=2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e73d"),
  "title": "WABE News - world news",
  "groupname": "WABE News",
  "updateurl": "http://www.publicbroadcasting.net/wabe/news.newsmain?action=rssheadlines&amp;section=3",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e73e"),
  "title": "WABE News - business",
  "groupname": "WABE News",
  "updateurl": "http://www.publicbroadcasting.net/wabe/news.newsmain?action=rssheadlines&amp;section=5",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b8c321d3be0004e73f"),
  "title": "Accessnorthga.com  local news",
  "groupname": "Accessnorthga.com",
  "updateurl": "http://www.accessnorthga.com/access/rss/service.php?c=1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e740"),
  "title": "Accessnorthga.com  sports",
  "groupname": "Accessnorthga.com",
  "updateurl": "http://www.accessnorthga.com/access/rss/service.php?c=3",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e741"),
  "title": "Accessnorthga.com  - national news",
  "groupname": "Accessnorthga.com",
  "updateurl": "http://www.accessnorthga.com/access/rss/service.php?c=7",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e742"),
  "title": "Accessnorthga.com - business",
  "groupname": "Accessnorthga.com",
  "updateurl": "http://www.accessnorthga.com/access/rss/service.php?c=8",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e743"),
  "title": "Cbsatlanta.com - local news",
  "groupname": "Cbsatlanta.com",
  "updateurl": "http://www.cbsatlanta.com/category/210863/app-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e744"),
  "title": "Cbsatlanta.com - sports",
  "groupname": "Cbsatlanta.com",
  "updateurl": "http://www.cbsatlanta.com/category/208656/sports?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e745"),
  "title": "Cbsatlanta.com - world news",
  "groupname": "Cbsatlanta.com",
  "updateurl": "http://www.cbsatlanta.com/category/162901/ap-news-center?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e746"),
  "title": "Cbsatlanta.com - entertainment",
  "groupname": "Cbsatlanta.com",
  "updateurl": "http://www.cbsatlanta.com/category/73801/entertainment?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e747"),
  "title": "Limaohio.com - food",
  "groupname": "Limaohio.com",
  "updateurl": "http://www.limaohio.com/common/rss/rss.php?cat=Food",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e748"),
  "title": "Limaohio.com - local news",
  "groupname": "Limaohio.com",
  "updateurl": "http://www.limaohio.com/common/rss/rss.php?cat=Local+News",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e749"),
  "title": "Toledoblade.com - state news",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/state",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e74a"),
  "title": "Toledoblade.com - nation news",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/nation",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e74b"),
  "title": "Toledo",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e74c"),
  "title": "Toledoblade.com - politics",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b9c321d3be0004e74d"),
  "title": "Toledoblade.com - technology",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e74e"),
  "title": "Toledoblade.com - art",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/art",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e74f"),
  "title": "Toledoblade.com - food",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/food",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e750"),
  "title": "Toledoblade.com - culture",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/culture",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e751"),
  "title": "Toledoblade.com - economy",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/economy",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e752"),
  "title": "Toledoblade.com - energy",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/energy",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e753"),
  "title": "Toledoblade.com - sports",
  "groupname": "Toledoblade.com",
  "updateurl": "http://www.toledoblade.com/rss/highschool",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e754"),
  "title": "Ibtimes.com - world news",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/IbtimescomWorld?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e755"),
  "title": "Ibtimes.com - politics",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/IbtimescomUsPoliticsPolicy?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e756"),
  "title": "Ibtimes.com - economy",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/IbtimescomEconomy?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e757"),
  "title": "Ibtimes.com - tech",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/IbtimescomTech?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e758"),
  "title": "Ibtimes.com - science",
  "groupname": "Ibtimes.com",
  "updateurl": "http://www.ibtimes.com/rss/articles/categories/science.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e759"),
  "title": "Ibtimes.com - sports",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/ibtimes_sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e75a"),
  "title": "Ibtimes.com - fashion",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/ibtFashionLife?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e75b"),
  "title": "Ibtimes.com - travel",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/Ibtimescom-Travel?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e75c"),
  "title": "Ibtimes.com - health",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/Ibthealth?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e75d"),
  "title": "Ibtimes.com - entertainment",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/IbtimescomEntertainmentStars?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bac321d3be0004e75e"),
  "title": "Ibtimes.com - art",
  "groupname": "Ibtimes.com",
  "updateurl": "http://feeds.feedburner.com/ibtartndesign?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e75f"),
  "title": "Theledger.com - local news",
  "groupname": "Theledger.com",
  "updateurl": "http://www.theledger.com/rss/articles/NEWS/1338/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e760"),
  "title": "Theledger.com - Florida news",
  "groupname": "Theledger.com",
  "updateurl": "http://www.theledger.com/rss/articles/NEWS/1003/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e761"),
  "title": "Theledger.com - sports",
  "groupname": "Theledger.com",
  "updateurl": "http://www.theledger.com/rss/articles/NEWS/1002/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e762"),
  "title": "Theledger.com - business",
  "groupname": "Theledger.com",
  "updateurl": "http://www.theledger.com/rss/articles/NEWS/1001/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e763"),
  "title": "Theledger.com - life",
  "groupname": "Theledger.com",
  "updateurl": "http://www.theledger.com/rss/articles/NEWS/1021/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e764"),
  "title": "Nashuatelegraph.com - sports",
  "groupname": "Nashuatelegraph.com",
  "updateurl": "http://feeds.nashuatelegraph.com/sports/local?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e765"),
  "title": "Nashuatelegraph.com - business",
  "groupname": "Nashuatelegraph.com",
  "updateurl": "http://feeds.nashuatelegraph.com/business/local?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e766"),
  "title": "Nashuatelegraph.com - local news",
  "groupname": "Nashuatelegraph.com",
  "updateurl": "http://feeds.nashuatelegraph.com/news/full?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e767"),
  "title": "Alaskadispatch.com - local news",
  "groupname": "Alaskadispatch.com",
  "updateurl": "http://www.alaskadispatch.com/rss-feeds/section/news-%2526-politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e768"),
  "title": "Alaskadispatch.com - politics",
  "groupname": "Alaskadispatch.com",
  "updateurl": "http://www.alaskadispatch.com/rss-feeds/feed/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e769"),
  "title": "Alaskadispatch.com - nation",
  "groupname": "Alaskadispatch.com",
  "updateurl": "http://www.alaskadispatch.com/rss-feeds/nation-world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e76a"),
  "title": "Wmur.com - national news",
  "groupname": "Wmur.com",
  "updateurl": "http://www.wmur.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e76b"),
  "title": "Ktuu.com - local news",
  "groupname": "Ktuu.com",
  "updateurl": "http://www.ktuu.com/news/external_rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e76c"),
  "title": "Nwcn.com - business",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e76d"),
  "title": "Nwcn.com - entertainment",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/ztest/entertainment/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e76e"),
  "title": "Nwcn.com - national news",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/news/national/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e76f"),
  "title": "Sentinelandenterprise.com - hockey",
  "groupname": "Sentinelandenterprise.com",
  "updateurl": "http://feeds.sentinelandenterprise.com/mngi/rss/CustomRssServlet/106/233737.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bbc321d3be0004e770"),
  "title": "Nwcn.com - local news",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/news/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e771"),
  "title": "Nwcn.com - sports",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e772"),
  "title": "Nwcn.com - world news",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/news/world/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e773"),
  "title": "Nwcn.com - politics",
  "groupname": "Nwcn.com",
  "updateurl": "http://www.nwcn.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e774"),
  "title": "Wgme.com - local news",
  "groupname": "Wgme.com",
  "updateurl": "http://www.wgme.com/news/top-stories/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e775"),
  "title": "9 News - world news",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/world/328/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e776"),
  "title": "9 News - business",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/business/75/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e777"),
  "title": "9 News - health",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/health/180/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e778"),
  "title": "9 News - politics",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/politics/166/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e779"),
  "title": "9 News - entertainment",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/entertainment/151/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e77a"),
  "title": "9 News- local news",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/local/222/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e77b"),
  "title": "Wafb.com - national news",
  "groupname": "Wafb.com",
  "updateurl": "http://feeds.feedburner.com/wafb/nationalnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e77c"),
  "title": "9 News - sports",
  "groupname": "9 News",
  "updateurl": "http://www.9news.com/rss/sports/295/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e77d"),
  "title": "News10.net - entertainment",
  "groupname": "News10.net",
  "updateurl": "http://www.news10.net/rss/entertainment/37/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e77e"),
  "title": "News10.net - national",
  "groupname": "News10.net",
  "updateurl": "http://www.news10.net/rss/national/5/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e77f"),
  "title": "News10.net - local  news",
  "groupname": "News10.net",
  "updateurl": "http://www.news10.net/rss/local/2/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e780"),
  "title": "Local10.com - world news",
  "groupname": "Local10.com",
  "updateurl": "http://www.local10.com/-/1717430/2563976/-/format/rss_2.0/view/asFeed/-/5dsqsj/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e781"),
  "title": "Local10.com - sports",
  "groupname": "Local10.com",
  "updateurl": "http://www.local10.com/sports/-/1717082/-/format/rss_2.0/view/asFeed/-/j0aq8az/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bcc321d3be0004e782"),
  "title": "Local10.com - health",
  "groupname": "Local10.com",
  "updateurl": "http://www.local10.com/thats-life/health/-/1717022/-/format/rss_2.0/view/asFeed/-/s35cwqz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e783"),
  "title": "Local10.com - life",
  "groupname": "Local10.com",
  "updateurl": "http://www.local10.com/thats-life/-/1716786/-/format/rss_2.0/view/asFeed/-/pb4dff/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e784"),
  "title": "Ktvb.com - business",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e785"),
  "title": "Ktvb.com - health",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/news/health/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e786"),
  "title": "Ktvb.com - local news",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/news/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e787"),
  "title": "Ktvb.com - national news",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/news/national/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e788"),
  "title": "Ktvb.com - politics",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e789"),
  "title": "Ktvb.com - sports",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e78a"),
  "title": "Ktvb.com - news",
  "groupname": "Ktvb.com",
  "updateurl": "http://www.ktvb.com/news/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e78b"),
  "title": "Inquisitr.com - local news",
  "groupname": "Inquisitr.com",
  "updateurl": "http://feeds.feedburner.com/google/yDYq?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e78c"),
  "title": "Wisn.com - local news",
  "groupname": "Wisn.com",
  "updateurl": "http://www.wisn.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e78d"),
  "title": "Wisn.com - national news",
  "groupname": "Wisn.com",
  "updateurl": "http://www.wisn.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e78e"),
  "title": "Wisn.com - sports",
  "groupname": "Wisn.com",
  "updateurl": "http://www.wisn.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e78f"),
  "title": "Wisn.com - entertainment",
  "groupname": "Wisn.com",
  "updateurl": "http://www.wisn.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e790"),
  "title": "Wisn.com - health",
  "groupname": "Wisn.com",
  "updateurl": "http://www.wisn.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e791"),
  "title": "Theintelligencer.net",
  "groupname": "Theintelligencer.net",
  "updateurl": "http://www.theintelligencer.net/page/syndrss.front/headline.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e792"),
  "title": "Rgj.com - local news",
  "groupname": "Rgj.com",
  "updateurl": "http://www.rgj.com/section/news&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e793"),
  "title": "Rgj.com - business",
  "groupname": "Rgj.com",
  "updateurl": "http://www.rgj.com/section/biz&amp;template=prf_rssbiz",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bdc321d3be0004e794"),
  "title": "Rgj.com - entertainment",
  "groupname": "Rgj.com",
  "updateurl": "http://www.rgj.com/section/ent&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e795"),
  "title": "Rgj.com - sports",
  "groupname": "Rgj.com",
  "updateurl": "http://www.rgj.com/section/sports&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e796"),
  "title": "Rgj.com - food",
  "groupname": "Rgj.com",
  "updateurl": "http://www.rgj.com/section/liv01&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e797"),
  "title": "Kob.com - local",
  "groupname": "Kob.com",
  "updateurl": "http://feeds.feedburner.com/kob/NM_News?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e798"),
  "title": "Tribunereviewnews - local news",
  "groupname": "Tribunereviewnews",
  "updateurl": "http://feeds.feedburner.com/tribunereviewnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e799"),
  "title": "Tribunereviewnews - sports",
  "groupname": "Tribunereviewnews",
  "updateurl": "http://feeds.feedburner.com/tribunereviewsports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e79a"),
  "title": "Tribunereviewnews - business",
  "groupname": "Tribunereviewnews",
  "updateurl": "http://feeds.feedburner.com/tribunereviewbusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e79b"),
  "title": "Arkansas matters - local news",
  "groupname": "Arkansas matters",
  "updateurl": "http://arkansasmatters.com/common/site_rss.php?feedname=news&amp;cat=25",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e79c"),
  "title": "Arkansas matters - sports",
  "groupname": "Arkansas matters",
  "updateurl": "http://arkansasmatters.com/common/site_rss.php?feedname=news&amp;cat=35",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e79d"),
  "title": "Arkansas matters -health",
  "groupname": "Arkansas matters",
  "updateurl": "http://arkansasmatters.com/common/site_rss.php?feedname=news&amp;cat=21",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e79e"),
  "title": "Arkansas matters - business",
  "groupname": "Arkansas matters",
  "updateurl": "http://arkansasmatters.com/common/site_rss.php?feedname=news&amp;cat=221",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e79f"),
  "title": "Humanevents.com - local news",
  "groupname": "Humanevents.com",
  "updateurl": "http://www.humanevents.com/rss/thefrontpage.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e7a0"),
  "title": "Sunshinestatenews - local",
  "groupname": "Sunshinestatenews",
  "updateurl": "http://www.sunshinestatenews.com/story-feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e7a1"),
  "title": "Fitsnews.com - local",
  "groupname": "Fitsnews.com",
  "updateurl": "http://www.fitsnews.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e7a2"),
  "title": "Prospect.org - politics",
  "groupname": "Prospect.org",
  "updateurl": "http://prospect.org/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e7a3"),
  "title": "GodDiscussion.com - world",
  "groupname": "GodDiscussion.com",
  "updateurl": "http://feeds.feedburner.com/GodDiscussion?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e7a4"),
  "title": "Gawker.com - entertainment",
  "groupname": "Gawker.com",
  "updateurl": "http://feeds.gawker.com/Gawker/full",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bec321d3be0004e7a5"),
  "title": "Dailycomet.com  - local news",
  "groupname": "Dailycomet.com",
  "updateurl": "http://www.dailycomet.com/rss/articles/ARTICLES/1212/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7a6"),
  "title": "Dailycomet.com  - sports",
  "groupname": "Dailycomet.com",
  "updateurl": "http://www.dailycomet.com/rss/articles/articles/1032/30",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7a7"),
  "title": "Thenorthwestern.com - local news",
  "groupname": "Thenorthwestern.com",
  "updateurl": "http://www.thenorthwestern.com/section/rssnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7a8"),
  "title": "Thenorthwestern.com - sports",
  "groupname": "Thenorthwestern.com",
  "updateurl": "http://www.thenorthwestern.com/section/rsssports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7a9"),
  "title": "Thenorthwestern.com - business",
  "groupname": "Thenorthwestern.com",
  "updateurl": "http://www.thenorthwestern.com/section/rssbusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7aa"),
  "title": "Thenorthwestern.com - entertainment",
  "groupname": "Thenorthwestern.com",
  "updateurl": "http://www.thenorthwestern.com/section/rssentertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7ab"),
  "title": "Newarkadvocate.com - local news",
  "groupname": "Newarkadvocate.com",
  "updateurl": "http://www.newarkadvocate.com/section/rss01&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7ac"),
  "title": "Newarkadvocate.com - sports",
  "groupname": "Newarkadvocate.com",
  "updateurl": "http://www.newarkadvocate.com/section/SPORTS&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7ad"),
  "title": "Ecorazzi.com  - lifestyle",
  "groupname": "Ecorazzi.com",
  "updateurl": "http://feeds.feedburner.com/ecorazzi/feed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7af"),
  "title": "Mnn.com - green-tech",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/green-tech-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7b1"),
  "title": "Mnn.com - health",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/health-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7b2"),
  "title": "Mnn.com - lifedtyle",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/lifestyle-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7b3"),
  "title": "Mnn.com - family",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/family-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00bfc321d3be0004e7b4"),
  "title": "Mnn.com - eco-money",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/money-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7b5"),
  "title": "Mnn.com - local news",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/earth-matters-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7b6"),
  "title": "Mnn.com - Arizona news",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/arizona",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7b7"),
  "title": "Mnn.com - California",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/california",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7b8"),
  "title": "Mnn.com - Colorado news",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/colorado",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7b9"),
  "title": "Mnn.com - Georgia",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/georgia",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7ba"),
  "title": "Wafb.com - health",
  "groupname": "Wafb.com",
  "updateurl": "http://feeds.feedburner.com/wafb/healthnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7bb"),
  "title": "Mnn.com - Texas news",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/texas",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7bc"),
  "title": "Mnn.com - North Carolina",
  "groupname": "Mnn.com",
  "updateurl": "http://www.mnn.com/rss/local-reports/north-carolina",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7bd"),
  "title": "Nbcbayarea.com - local",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/news/local-beat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7be"),
  "title": "Nbcbayarea.com - politics",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7bf"),
  "title": "Nbcbayarea.com - sports",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/news/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7c0"),
  "title": "Nbcbayarea.com - tech",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/news/tech/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7c1"),
  "title": "Nbcbayarea.com - business",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/news/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7c2"),
  "title": "Nbcbayarea.com - health",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/news/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7c3"),
  "title": "Nbcbayarea.com - celebrity",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/entertainment/celebrity/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c0c321d3be0004e7c4"),
  "title": "Nbcbayarea.com - food-drink",
  "groupname": "Nbcbayarea.com",
  "updateurl": "http://feeds.nbcbayarea.com/nbcbayarea/the-scene/food-drink/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7c5"),
  "title": "Gloucestertimes.com - local news",
  "groupname": "Gloucestertimes.com",
  "updateurl": "http://www.gloucestertimes.com/local/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7c6"),
  "title": "Gloucestertimes.com - sports",
  "groupname": "Gloucestertimes.com",
  "updateurl": "http://www.gloucestertimes.com/sports/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7c7"),
  "title": "Gloucestertimes.com - lifestyle",
  "groupname": "Gloucestertimes.com",
  "updateurl": "http://www.gloucestertimes.com/lifestyle/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7c8"),
  "title": "Gloucestertimes.com - business",
  "groupname": "Gloucestertimes.com",
  "updateurl": "http://www.gloucestertimes.com/business/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7c9"),
  "title": "Kxan.com - national news",
  "groupname": "Kxan.com",
  "updateurl": "http://www.kxan.com/feeds/rssFeed?siteId=20005&amp;obfType=RSS_FEED&amp;categoryId=20055",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7ca"),
  "title": "Kxan.com - Texas news",
  "groupname": "Kxan.com",
  "updateurl": "http://www.kxan.com/feeds/rssFeed?siteId=20005&amp;obfType=RSS_FEED&amp;categoryId=20045",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7cb"),
  "title": "Kxan.com - sports",
  "groupname": "Kxan.com",
  "updateurl": "http://www.kxan.com/feeds/rssFeed?siteId=20005&amp;obfType=RSS_FEED&amp;categoryId=10004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7cc"),
  "title": "Kxan.com - health",
  "groupname": "Kxan.com",
  "updateurl": "http://www.kxan.com/feeds/rssFeed?siteId=20005&amp;obfType=RSS_FEED&amp;categoryId=10005",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7cd"),
  "title": "Kxan.com - Austin",
  "groupname": "Kxan.com",
  "updateurl": "http://www.kxan.com/feeds/rssFeed?siteId=20005&amp;obfType=RSS_FEED&amp;categoryId=30379",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7ce"),
  "title": "Click2houston.com - Houston news",
  "groupname": "Click2houston.com",
  "updateurl": "http://www.click2houston.com/-/1736084/5695744/-/format/rss_2.0/view/asFeed/-/x9mgi4z/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7cf"),
  "title": "Click2houston.com - sports",
  "groupname": "Click2houston.com",
  "updateurl": "http://www.click2houston.com/sports/-/1735736/-/format/rss_2.0/view/asFeed/-/ake178/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7d0"),
  "title": "Click2houston.com - entertainment",
  "groupname": "Click2houston.com",
  "updateurl": "http://www.click2houston.com/-/1736084/5536186/-/format/rss_2.0/view/asFeed/-/vwamc1/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7d1"),
  "title": "Click2houston.com - technology",
  "groupname": "Click2houston.com",
  "updateurl": "http://www.click2houston.com/-/1736084/5535870/-/format/rss_2.0/view/asFeed/-/13suim1z/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7d2"),
  "title": "Fox2now.com - sports",
  "groupname": "Fox2now.com",
  "updateurl": "http://www.fox2now.com/sports/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7d3"),
  "title": "Fox2now.com - entertainment",
  "groupname": "Fox2now.com",
  "updateurl": "http://www.fox2now.com/entertainment/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7d4"),
  "title": "Fox2now.com - business",
  "groupname": "Fox2now.com",
  "updateurl": "http://www.fox2now.com/business/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c1c321d3be0004e7d5"),
  "title": "Fox2now.com - local news",
  "groupname": "Fox2now.com",
  "updateurl": "http://www.fox2now.com/news/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7d6"),
  "title": "Columbiamissourian.com - local news",
  "groupname": "Сolumbiamissourian.com",
  "updateurl": "http://www.columbiamissourian.com/feeds/articles/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7d7"),
  "title": "Columbiamissourian.com - sports",
  "groupname": "Columbiamissourian.com",
  "updateurl": "http://www.columbiamissourian.com/feeds/articles/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7d8"),
  "title": "Columbiamissourian.com - lifestyle",
  "groupname": "Columbiamissourian.com",
  "updateurl": "http://www.columbiamissourian.com/feeds/articles/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7d9"),
  "title": "Fox4kc.com - local news",
  "groupname": "Fox4kc.com",
  "updateurl": "http://fox4kc.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7da"),
  "title": "Columbian.com - local news",
  "groupname": "Columbian.com",
  "updateurl": "http://www.columbian.com/rss/headlines/local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7db"),
  "title": "Columbian.com - sports",
  "groupname": "Columbian.com",
  "updateurl": "http://www.columbian.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7dc"),
  "title": "Columbian.com - business",
  "groupname": "Columbian.com",
  "updateurl": "http://www.columbian.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7dd"),
  "title": "Columbian.com - life",
  "groupname": "Columbian.com",
  "updateurl": "http://www.columbian.com/rss/headlines/life/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7de"),
  "title": "Hattiesburgamerican.com - local news",
  "groupname": "Hattiesburgamerican.com",
  "updateurl": "http://www.hattiesburgamerican.com/rssfeeds/topstories.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7df"),
  "title": "Hattiesburgamerican.com - sports",
  "groupname": "Hattiesburgamerican.com",
  "updateurl": "http://www.hattiesburgamerican.com/section/rss02&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7e0"),
  "title": "Ksdk.com - local news",
  "groupname": "Ksdk.com",
  "updateurl": "http://www.ksdk.com/rss/news/3/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7e1"),
  "title": "Ksdk.com - national news",
  "groupname": "Ksdk.com",
  "updateurl": "http://www.ksdk.com/rss/world/28/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7e2"),
  "title": "Ksdk.com - sports",
  "groupname": "Ksdk.com",
  "updateurl": "http://www.ksdk.com/rss/sports/6/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7e3"),
  "title": "Ksdk.com - health",
  "groupname": "Ksdk.com",
  "updateurl": "http://www.ksdk.com/rss/health/9/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7e4"),
  "title": "Ksdk.com -politics",
  "groupname": "Ksdk.com",
  "updateurl": "http://www.ksdk.com/rss/politics/18/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c2c321d3be0004e7e5"),
  "title": "Nbcwashington.com - local news",
  "groupname": "Nbcwashington.com",
  "updateurl": "http://feeds.nbcwashington.com/nbcwashington/news/local-beat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7e6"),
  "title": "Nbcwashington.com - politics",
  "groupname": "Nbcwashington.com",
  "updateurl": "http://feeds.nbcwashington.com/nbcwashington/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7e7"),
  "title": "Nbcwashington.com - sports",
  "groupname": "Nbcwashington.com",
  "updateurl": "http://feeds.nbcwashington.com/nbcwashington/news/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7e8"),
  "title": "Dnainfo.com - business",
  "groupname": "Dnainfo.com",
  "updateurl": "http://www.dnainfo.com/topics/business-economy.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7e9"),
  "title": "Dnainfo.com - local",
  "groupname": "Dnainfo.com",
  "updateurl": "http://www.dnainfo.com/topics/only-new-york.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7ea"),
  "title": "Dnainfo.com -lifestyle",
  "groupname": "Dnainfo.com",
  "updateurl": "http://www.dnainfo.com/topics/lifestyle-entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7eb"),
  "title": "Dnainfo.com - science",
  "groupname": "Dnainfo.com",
  "updateurl": "http://www.dnainfo.com/topics/science-technology.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7ec"),
  "title": "Dnainfo.com - politics",
  "groupname": "Dnainfo.com",
  "updateurl": "http://www.dnainfo.com/topics/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7ed"),
  "title": "Dnainfo.com - sports",
  "groupname": "Dnainfo.com",
  "updateurl": "http://www.dnainfo.com/topics/sports.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7ee"),
  "title": "Chattanoogan.com - local news",
  "groupname": "Chattanoogan.com",
  "updateurl": "http://www.chattanoogan.com/Breaking-News/feed.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7ef"),
  "title": "Chattanoogan.com - business",
  "groupname": "Chattanoogan.com",
  "updateurl": "http://www.chattanoogan.com/Community/Business/feed.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f0"),
  "title": "Chattanoogan.com - sports",
  "groupname": "Chattanoogan.com",
  "updateurl": "http://www.chattanoogan.com/Sports/feed.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f1"),
  "title": "Chattanoogan.com - travel",
  "groupname": "Chattanoogan.com",
  "updateurl": "http://www.chattanoogan.com/Leisuretime/Travel/feed.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f2"),
  "title": "Chattanoogan.com - entertainment",
  "groupname": "Chattanoogan.com",
  "updateurl": "http://www.chattanoogan.com/Leisuretime/Entertainment/feed.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f3"),
  "title": "14 News - local news",
  "groupname": "14 News",
  "updateurl": "http://www.14news.com/global/Category.asp?c=24190&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f4"),
  "title": "14 News - entertainment",
  "groupname": "14 News",
  "updateurl": "http://www.14news.com/Global/category.asp?C=8787&amp;nav=4nHW&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f5"),
  "title": "14 News - sports",
  "groupname": "14 News",
  "updateurl": "http://www.14news.com/Global/category.asp?C=3493&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c3c321d3be0004e7f6"),
  "title": "14 News - health",
  "groupname": "14 News",
  "updateurl": "http://www.14news.com/Global/category.asp?C=3916&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7f7"),
  "title": "Wdrb.com - local news",
  "groupname": "Wdrb.com",
  "updateurl": "http://www.wdrb.com/Global/category.asp?C=123963&amp;nav=menu1404_2&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7f8"),
  "title": "Wdrb.com - sports",
  "groupname": "Wdrb.com",
  "updateurl": "http://www.wdrb.com/Global/category.asp?C=196632&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7f9"),
  "title": "Wdrb.com - Kentucly",
  "groupname": "Wdrb.com",
  "updateurl": "http://www.wdrb.com/Global/category.asp?C=50663&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7fa"),
  "title": "Wdrb.com - Indiana",
  "groupname": "Wdrb.com",
  "updateurl": "http://www.wdrb.com/Global/category.asp?C=50639&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7fb"),
  "title": "Wlox.com - national news",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=13530&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7fc"),
  "title": "Wlox.com - world news",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=13533&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7fd"),
  "title": "Wlox.com - sports",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=1705&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7fe"),
  "title": "Wlox.com - health",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=186814&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e7ff"),
  "title": "Wlox.com - entertainment",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=13540&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e800"),
  "title": "Wlox.com - business",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=13537&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e801"),
  "title": "Wlox.com - local news",
  "groupname": "Wlox.com",
  "updateurl": "http://www.wlox.com/Global/category.asp?C=2868&amp;nav=DYFw&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e802"),
  "title": "Ledger-enquirer.com - sports",
  "groupname": "Ledger-enquirer.com",
  "updateurl": "http://www.ledger-enquirer.com/sports/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e803"),
  "title": "Ledger-enquirer.com - life",
  "groupname": "Ledger-enquirer.com",
  "updateurl": "http://www.ledger-enquirer.com/life/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e804"),
  "title": "Ledger-enquirer.com - local news",
  "groupname": "Ledger-enquirer.com",
  "updateurl": "http://www.ledger-enquirer.com/news/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e805"),
  "title": "Ledger-enquirer.com - state news",
  "groupname": "Ledger-enquirer.com",
  "updateurl": "http://www.ledger-enquirer.com/state-news/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e806"),
  "title": "Dailygossip.org - enetertainment",
  "groupname": "Dailygossip.org",
  "updateurl": "http://www.dailygossip.org/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c4c321d3be0004e807"),
  "title": "Ktvu.com - world news",
  "groupname": "Ktvu.com",
  "updateurl": "http://www.ktvu.com/feeds/categories/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e808"),
  "title": "Ktvu.com - entertainment",
  "groupname": "Ktvu.com",
  "updateurl": "http://www.ktvu.com/feeds/categories/events/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e809"),
  "title": "Pitch.com - local news",
  "groupname": "Pitch.com",
  "updateurl": "http://www.pitch.com/kansascity/Rss.xml?section=2124212",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e80a"),
  "title": "Pitch.com - dining",
  "groupname": "Pitch.com",
  "updateurl": "http://www.pitch.com/kansascity/Rss.xml?section=2124211",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e80b"),
  "title": "Pitch.com - arts",
  "groupname": "Pitch.com",
  "updateurl": "http://www.pitch.com/kansascity/Rss.xml?section=2124210",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e80c"),
  "title": "Wnem.com - local news",
  "groupname": "Wnem.com",
  "updateurl": "http://www.wnem.com/category/210875/app-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e80d"),
  "title": "Wnem.com - world",
  "groupname": "Wnem.com",
  "updateurl": "http://www.wnem.com/category/162901/ap-news-center?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e80e"),
  "title": "Wnem.com - sports",
  "groupname": "Wnem.com",
  "updateurl": "http://www.wnem.com/category/208684/sports?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e80f"),
  "title": "Wmur.com - entertainment",
  "groupname": "Wmur.com",
  "updateurl": "http://www.wmur.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e810"),
  "title": "Dentonrc.com - politics",
  "groupname": "Dentonrc.com",
  "updateurl": "http://www.dentonrc.com/local-news/politics-headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e811"),
  "title": "Dentonrc.com - sports",
  "groupname": "Dentonrc.com",
  "updateurl": "http://www.dentonrc.com/sports/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e812"),
  "title": "Dentonrc.com - business",
  "groupname": "Dentonrc.com",
  "updateurl": "http://www.dentonrc.com/business-tech/denton-business-headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e813"),
  "title": "Nbcdfw.com - politics",
  "groupname": "Nbcdfw.com",
  "updateurl": "http://feeds.nbcdfw.com/nbcdfw/news/politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e814"),
  "title": "Nbcdfw.com - Dallas news",
  "groupname": "Nbcdfw.com",
  "updateurl": "http://feeds.nbcdfw.com/nbcdfw/news/local-beat",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e815"),
  "title": "Elpasotimes.com - local news",
  "groupname": "Elpasotimes.com",
  "updateurl": "http://feeds.elpasotimes.com/mngi/rss/CustomRssServlet/525/200816.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e816"),
  "title": "Icsun-news.com - sports",
  "groupname": "Icsun-news.com",
  "updateurl": "http://feeds.lcsun-news.com/mngi/rss/CustomRssServlet/557/200419.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e817"),
  "title": "Icsun-news.com - business",
  "groupname": "Icsun-news.com",
  "updateurl": "http://feeds.lcsun-news.com/mngi/rss/CustomRssServlet/557/200418.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e818"),
  "title": "Icsun-news.com - health",
  "groupname": "Icsun-news.com",
  "updateurl": "http://feeds.lcsun-news.com/mngi/rss/CustomRssServlet/557/200421.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c5c321d3be0004e819"),
  "title": "Icsun-news.com - local news",
  "groupname": "Icsun-news.com",
  "updateurl": "http://feeds.lcsun-news.com/mngi/rss/CustomRssServlet/557/201917.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e81a"),
  "title": "Wftv.com - local news",
  "groupname": "Wftv.com",
  "updateurl": "http://www.wftv.com/list/rss/news/top-local-headlines/aCTD/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e81b"),
  "title": "Wftv.com - sports",
  "groupname": "Wftv.com",
  "updateurl": "http://www.wftv.com/feeds/categories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e81c"),
  "title": "News-sentinel.com - state news",
  "groupname": "News-sentinel.com",
  "updateurl": "http://www.news-sentinel.com/apps/pbcs.dll/section?template=RSS&amp;cat=STATENEWS&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e81d"),
  "title": "News-sentinel.com - local news",
  "groupname": "News-sentinel.com",
  "updateurl": "http://www.news-sentinel.com/apps/pbcs.dll/section?template=RSS&amp;cat=LOCALNEWS&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e81e"),
  "title": "News-sentinel.com - sports",
  "groupname": "News-sentinel.com",
  "updateurl": "http://www.news-sentinel.com/apps/pbcs.dll/section?template=RSS&amp;cat=SPORTS&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e81f"),
  "title": "News-sentinel.com - business",
  "groupname": "News-sentinel.com",
  "updateurl": "http://www.news-sentinel.com/apps/pbcs.dll/section?template=RSS&amp;cat=BUSINESS&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e820"),
  "title": "News-sentinel.com - lifestyle",
  "groupname": "News-sentinel.com",
  "updateurl": "http://www.news-sentinel.com/apps/pbcs.dll/section?template=RSS&amp;cat=LIVING&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e821"),
  "title": "News-sentinel.com - entertainment",
  "groupname": "News-sentinel.com",
  "updateurl": "http://www.news-sentinel.com/apps/pbcs.dll/section?template=RSS&amp;cat=ENT&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e822"),
  "title": "Wmur.com - money",
  "groupname": "Wmur.com",
  "updateurl": "http://www.wmur.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e823"),
  "title": "Clickorlando.com - Orlando local news",
  "groupname": "Clickorlando.com",
  "updateurl": "http://www.clickorlando.com/news/-/1637132/-/format/rss_2.0/view/asFeed/-/3udtlz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e824"),
  "title": "Wmur.com - sports",
  "groupname": "Wmur.com",
  "updateurl": "http://www.wmur.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e825"),
  "title": "Newsnet5.com - local news",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20000",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e826"),
  "title": "Thebostonchannel.com - local Boston news",
  "groupname": "Thebostonchannel.com",
  "updateurl": "http://www.thebostonchannel.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e827"),
  "title": "Thebostonchannel.com - politics",
  "groupname": "Thebostonchannel.com",
  "updateurl": "http://www.thebostonchannel.com/politics/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e828"),
  "title": "Thebostonchannel.com - national news",
  "groupname": "Thebostonchannel.com",
  "updateurl": "http://www.thebostonchannel.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c6c321d3be0004e829"),
  "title": "Thebostonchannel.com - sports",
  "groupname": "Thebostonchannel.com",
  "updateurl": "http://www.thebostonchannel.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e82a"),
  "title": "Thebostonchannel.com - money",
  "groupname": "Thebostonchannel.com",
  "updateurl": "http://www.thebostonchannel.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e82b"),
  "title": "Thefiscaltimes.com -  business",
  "groupname": "Thefiscaltimes.com",
  "updateurl": "http://www.thefiscaltimes.com/RSS/Business-Economy.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e82c"),
  "title": "Thefiscaltimes.com - politics",
  "groupname": "Thefiscaltimes.com",
  "updateurl": "http://www.thefiscaltimes.com/RSS/Policy-Politics.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e82d"),
  "title": "Eastvalleytribune.com - sports",
  "groupname": "Eastvalleytribune.com",
  "updateurl": "http://www.eastvalleytribune.com/search/?q=&amp;t=article&amp;l=25&amp;d=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c[]=sports*&amp;f=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e82e"),
  "title": "Eastvalleytribune.com - local news",
  "groupname": "Eastvalleytribune.com",
  "updateurl": "http://www.eastvalleytribune.com/search/?q=&amp;t=article&amp;l=25&amp;d=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c[]=local*&amp;f=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e82f"),
  "title": "Hispanicbusiness.com",
  "groupname": "Hispanicbusiness.com",
  "updateurl": "http://www.hispanicbusiness.com/rss/rss.asp-document",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e830"),
  "title": "Gallup.com - politics",
  "groupname": "Gallup.com",
  "updateurl": "http://www.gallup.com/tag/Politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e831"),
  "title": "Gallup.com - economy",
  "groupname": "Gallup.com",
  "updateurl": "http://www.gallup.com/tag/Economy.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e832"),
  "title": "Gallup.com - world",
  "groupname": "Gallup.com",
  "updateurl": "http://www.gallup.com/tag/World.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e833"),
  "title": "Pe.com - local news",
  "groupname": "Pe.com",
  "updateurl": "http://www.pe.com/local-news/breaking-news-headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e834"),
  "title": "Pe.com - sports",
  "groupname": "Pe.com",
  "updateurl": "http://www.pe.com/sports/sports-breaking-news-headlines/?rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e835"),
  "title": "Pe.com - world news",
  "groupname": "Pe.com",
  "updateurl": "http://hosted2.ap.org/atom/CARIE/0260ea4c3e85456b80715585ba3c7b5b",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e836"),
  "title": "Pe.com - national news",
  "groupname": "Pe.com",
  "updateurl": "http://hosted2.ap.org/atom/CARIE/6b85546689744819aa7a64cd3ca6cee6",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e837"),
  "title": "Krdo.com - national news",
  "groupname": "Krdo.com",
  "updateurl": "http://www.krdo.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c7c321d3be0004e838"),
  "title": "Krdo.com - entertainment",
  "groupname": "Krdo.com",
  "updateurl": "http://www.krdo.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e839"),
  "title": "Krdo.com - health",
  "groupname": "Krdo.com",
  "updateurl": "http://www.krdo.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e83a"),
  "title": "Kvue.com - business",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/business/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e83b"),
  "title": "Kvue.com - entertainment",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/entertainment/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e83c"),
  "title": "Kvue.com - health",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/health/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e83d"),
  "title": "Kvue.com - local news",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e83e"),
  "title": "Kvue.com - national news",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/national/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e83f"),
  "title": "Kvue.com - sports",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/sports/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e840"),
  "title": "Kvue.com - travel",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/entertainment/travel/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e841"),
  "title": "Kvue.com - world",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/world/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e842"),
  "title": "Kvue.com - politics",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e843"),
  "title": "Kvue.com - Texas news",
  "groupname": "Kvue.com",
  "updateurl": "http://www.kvue.com/news/state/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e844"),
  "title": "620 WTMJ - local news",
  "groupname": "620 WTMJ",
  "updateurl": "http://www.620wtmj.com/news/local/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e845"),
  "title": "Civilbeat.com - news",
  "groupname": "Civilbeat.com",
  "updateurl": "http://feeds.civilbeat.com/latest-contents",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e846"),
  "title": "Wjla.com - business news",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e847"),
  "title": "Wjla.com - entertainment",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e848"),
  "title": "Wjla.com - health",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/health.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c8c321d3be0004e849"),
  "title": "Wjla.com - national news",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/nation.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e84a"),
  "title": "Wjla.com - sports",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/sports.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e84b"),
  "title": "Wjla.com - world news",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/world.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e84c"),
  "title": "Wjla.com - Maryland news",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/maryland.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e84d"),
  "title": "Wjla.com - Virginia news",
  "groupname": "Wjla.com",
  "updateurl": "http://www.wjla.com/rss/virginia.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e84e"),
  "title": "Tbd.com - business",
  "groupname": "Tbd.com",
  "updateurl": "http://www.tbd.com/rss/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e84f"),
  "title": "Tbd.com - entertainment",
  "groupname": "Tbd.com",
  "updateurl": "http://www.tbd.com/rss/entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e850"),
  "title": "Tbd.com - politics",
  "groupname": "Tbd.com",
  "updateurl": "http://www.tbd.com/rss/politics.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e851"),
  "title": "Wtvr.com - local news",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/news/local/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e852"),
  "title": "Wtvr.com - national news",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/news/nationworld/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e853"),
  "title": "Wtvr.com - business",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/news/business/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e854"),
  "title": "Wtvr.com - entertainment",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/entertainment/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e855"),
  "title": "Wtvr.com - politics",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/news/politics/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e856"),
  "title": "Wtvr.com - celebrity",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/entertainment/celebritydish/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e857"),
  "title": "Wtvr.com - tech",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/news/tech/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00c9c321d3be0004e858"),
  "title": "Wtvr.com - lifestyle",
  "groupname": "Wtvr.com",
  "updateurl": "http://www.wtvr.com/lifestyle/rss2.0.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e859"),
  "title": "Wbaltv.com - local Baltimore news",
  "groupname": "Wbaltv.com",
  "updateurl": "http://www.wbaltv.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e85a"),
  "title": "Wbaltv.com - national news",
  "groupname": "Wbaltv.com",
  "updateurl": "http://www.wbaltv.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e85b"),
  "title": "Wbaltv.com - sports",
  "groupname": "Wbaltv.com",
  "updateurl": "http://www.wbaltv.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e85c"),
  "title": "Wbaltv.com - entertainment",
  "groupname": "Wbaltv.com",
  "updateurl": "http://www.wbaltv.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e85d"),
  "title": "Wbaltv.com - money",
  "groupname": "Wbaltv.com",
  "updateurl": "http://www.wbaltv.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e85e"),
  "title": "Wbaltv.com - health",
  "groupname": "Wbaltv.com",
  "updateurl": "http://www.wbaltv.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e85f"),
  "title": "Wgal.com - local news",
  "groupname": "Wgal.com",
  "updateurl": "http://www.wgal.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e860"),
  "title": "Wgal.com - health",
  "groupname": "Wgal.com",
  "updateurl": "http://www.wgal.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e861"),
  "title": "Wgal.com - money",
  "groupname": "Wgal.com",
  "updateurl": "http://www.wgal.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e862"),
  "title": "Wpxi.com - local news",
  "groupname": "Wpxi.com",
  "updateurl": "http://www.wpxi.com/feeds/categories/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e863"),
  "title": "Wpxi.com - sports",
  "groupname": "Wpxi.com",
  "updateurl": "http://www.wpxi.com/feeds/categories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e864"),
  "title": "Wpxi.com - entertainment",
  "groupname": "Wpxi.com",
  "updateurl": "http://www.wpxi.com/feeds/categories/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e865"),
  "title": "Wptz.com - local news",
  "groupname": "Wptz.com",
  "updateurl": "http://www.wptz.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e866"),
  "title": "Wtov9.com - local news",
  "groupname": "Wtov9.com",
  "updateurl": "http://www.wtov9.com/list/rss/news/local/latest-local-headlines/aCQk/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e867"),
  "title": "Wtov9.com - national news",
  "groupname": "Wtov9.com",
  "updateurl": "http://www.wtov9.com/feeds/categories/ap/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e868"),
  "title": "Wtov9.com - entertainment",
  "groupname": "Wtov9.com",
  "updateurl": "http://www.wtov9.com/feeds/categories/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cac321d3be0004e869"),
  "title": "Wtov9.com - health",
  "groupname": "Wtov9.com",
  "updateurl": "http://www.wtov9.com/feeds/categories/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e86a"),
  "title": "News4jax.com - Jacksonville local news",
  "groupname": "News4Jax.com",
  "updateurl": "http://www.news4jax.com/-/475982/4908618/-/format/rss_2.0/view/asFeed/-/9eaq9jz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e86b"),
  "title": "News4jax.com - national news",
  "groupname": "News4Jax.com",
  "updateurl": "http://www.news4jax.com/-/475982/4908452/-/format/rss_2.0/view/asFeed/-/arexen/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e86c"),
  "title": "News4jax.com - money",
  "groupname": "News4Jax.com",
  "updateurl": "http://www.clickondetroit.com/-/1719524/4906224/-/format/rss_2.0/view/asFeed/-/12nc65f/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e86d"),
  "title": "News4jax.com - sports",
  "groupname": "News4Jax.com",
  "updateurl": "http://www.news4jax.com/sports/-/475646/-/format/rss_2.0/view/asFeed/-/1umw04z/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e86e"),
  "title": "News4jax.com - entertainment",
  "groupname": "News4Jax.com",
  "updateurl": "http://www.news4jax.com/entertainment/-/475422/-/format/rss_2.0/view/asFeed/-/c1awhgz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e86f"),
  "title": "Wsmv.com - local news",
  "groupname": "Wsmv.com",
  "updateurl": "http://www.wsmv.com/category/210881/app-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e870"),
  "title": "Wsmv.com - national news",
  "groupname": "Wsmv.com",
  "updateurl": "http://www.wsmv.com/category/162901/ap-news-center?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e871"),
  "title": "Wsmv.com - entertainment",
  "groupname": "Wsmv.com",
  "updateurl": "http://www.wsmv.com/category/211167/entertainment?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e872"),
  "title": "Wsmv.com - sports",
  "groupname": "Wsmv.com",
  "updateurl": "http://www.wsmv.com/category/208529/sports?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e873"),
  "title": "Wsmv.com - money",
  "groupname": "Wsmv.com",
  "updateurl": "http://www.wsmv.com/category/120652/money?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e874"),
  "title": "Wesh.com - national news",
  "groupname": "Wesh.com",
  "updateurl": "http://www.wesh.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e875"),
  "title": "Wesh.com - Orlando news",
  "groupname": "Wesh.com",
  "updateurl": "http://www.wesh.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e876"),
  "title": "Wesh.com - sports",
  "groupname": "Wesh.com",
  "updateurl": "http://www.wesh.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e877"),
  "title": "Wesh.com - money",
  "groupname": "Wesh.com",
  "updateurl": "http://www.wesh.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e878"),
  "title": "Wesh.com - health",
  "groupname": "Wesh.com",
  "updateurl": "http://www.wesh.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e879"),
  "title": "Wpbf.com - Palm Beach news",
  "groupname": "Wpbf.com",
  "updateurl": "http://www.wpbf.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cbc321d3be0004e87a"),
  "title": "Wpbf.com - health",
  "groupname": "Wpbf.com",
  "updateurl": "http://www.wpbf.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e87b"),
  "title": "Wlwt..com - Cincinnati news",
  "groupname": "Wlwt..com",
  "updateurl": "http://www.wlwt.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e87c"),
  "title": "Wlwt..com - money",
  "groupname": "Wlwt..com",
  "updateurl": "http://www.wlwt.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e87d"),
  "title": "Wlwt..com - health",
  "groupname": "Wlwt..com",
  "updateurl": "http://www.wlwt.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e87e"),
  "title": "Wlwt..com - entertainment",
  "groupname": "Wlwt..com",
  "updateurl": "http://www.wlwt.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e87f"),
  "title": "Whiotv.com - Indiana news",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/indiana/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e880"),
  "title": "Whiotv.com - Ohio news",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/ohio/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e881"),
  "title": "Whiotv.com - national news",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/us/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e882"),
  "title": "Whiotv.com - political news",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/political/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e883"),
  "title": "Whiotv.com - world news",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/international/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e884"),
  "title": "Whiotv.com - entertainment",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e885"),
  "title": "Whiotv.com - sports",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e886"),
  "title": "Whiotv.com - business",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e887"),
  "title": "Whiotv.com - travel",
  "groupname": "Whiotv.com",
  "updateurl": "http://www.whiotv.com/feeds/categories/travel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ccc321d3be0004e888"),
  "title": "Kcci.com - local news",
  "groupname": "Kcci.com",
  "updateurl": "http://www.kcci.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e889"),
  "title": "Kcci.com - entertainment",
  "groupname": "Kcci.com",
  "updateurl": "http://www.kcci.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e88a"),
  "title": "Kcci.com - money",
  "groupname": "Kcci.com",
  "updateurl": "http://www.kcci.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e88b"),
  "title": "Kcci.com - health",
  "groupname": "Kcci.com",
  "updateurl": "http://www.kcci.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e88c"),
  "title": "TheIndyChannel.com - Indianapolis news",
  "groupname": "TheIndyChannel.com",
  "updateurl": "http://www.theindychannel.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e88d"),
  "title": "TheIndyChannel.com - sports",
  "groupname": "TheIndyChannel.com",
  "updateurl": "http://www.theindychannel.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e88e"),
  "title": "TheIndyChannel.com - money",
  "groupname": "TheIndyChannel.com",
  "updateurl": "http://www.theindychannel.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e88f"),
  "title": "Kmbc.com - Kansas City news",
  "groupname": "Kmbc.com",
  "updateurl": "http://www.kmbc.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e890"),
  "title": "Kmbc.com - sports",
  "groupname": "Kmbc.com",
  "updateurl": "http://www.kmbc.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e891"),
  "title": "Kmbc.com - entertainment",
  "groupname": "Kmbc.com",
  "updateurl": "http://www.kmbc.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e892"),
  "title": "Channel3000.com - Madison news",
  "groupname": "Channel3000.com",
  "updateurl": "http://www.channel3000.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e893"),
  "title": "Channel3000.com - sports",
  "groupname": "Channel3000.com",
  "updateurl": "http://www.channel3000.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e894"),
  "title": "Channel3000.com - money",
  "groupname": "Channel3000.com",
  "updateurl": "http://www.channel3000.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e895"),
  "title": "Channel3000.com - health",
  "groupname": "Channel3000.com",
  "updateurl": "http://www.channel3000.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e896"),
  "title": "Channel3000.com - Packers",
  "groupname": "Channel3000.com",
  "updateurl": "http://www.channel3000.com/packers/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cdc321d3be0004e897"),
  "title": "Ketv.com - Omaha local news",
  "groupname": "Ketv.com",
  "updateurl": "http://www.ketv.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e898"),
  "title": "Ketv.com - sports",
  "groupname": "Ketv.com",
  "updateurl": "http://www.ketv.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e899"),
  "title": "Ketv.com - Omaha local news",
  "groupname": "Ketv.com",
  "updateurl": "http://www.ketv.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e89a"),
  "title": "Kfoxtv.com - local news",
  "groupname": "Kfoxtv.com",
  "updateurl": "http://www.kfoxtv.com/feeds/categories/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e89b"),
  "title": "Kfoxtv.com - health",
  "groupname": "Kfoxtv.com",
  "updateurl": "http://www.kfoxtv.com/feeds/categories/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e89c"),
  "title": "Kfoxtv.com - sports",
  "groupname": "Kfoxtv.com",
  "updateurl": "http://www.kfoxtv.com/feeds/categories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e89d"),
  "title": "Kfoxtv.com - entertainment",
  "groupname": "Kfoxtv.com",
  "updateurl": "http://www.kfoxtv.com/feeds/categories/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e89e"),
  "title": "4029 News - Arkansas news",
  "groupname": "4029 News",
  "updateurl": "http://www.4029tv.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e89f"),
  "title": "4029 News  - sports",
  "groupname": "4029 News",
  "updateurl": "http://www.4029tv.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a0"),
  "title": "4029 News  - health",
  "groupname": "4029 News .com",
  "updateurl": "http://www.4029tv.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a1"),
  "title": "Wapt.com - Jacson news",
  "groupname": "Wapt.com",
  "updateurl": "http://www.wapt.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a2"),
  "title": "Wapt.com - sports",
  "groupname": "Wapt.com",
  "updateurl": "http://www.wapt.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a3"),
  "title": "Wapt.com - entertainment",
  "groupname": "Wapt.com",
  "updateurl": "http://www.wapt.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a4"),
  "title": "Lowellsun.com - food",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/232809.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a5"),
  "title": "Wapt.com - money",
  "groupname": "Wapt.com",
  "updateurl": "http://www.wapt.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a6"),
  "title": "Wapt.com - health",
  "groupname": "Wapt.com",
  "updateurl": "http://www.wapt.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cec321d3be0004e8a7"),
  "title": "Wapt.com - politics",
  "groupname": "Wapt.com",
  "updateurl": "http://www.wapt.com/politics/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8a8"),
  "title": "Wdsu.com - New Orleans news",
  "groupname": "Wdsu.com",
  "updateurl": "http://www.wdsu.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8a9"),
  "title": "Wdsu.com - health",
  "groupname": "Wdsu.com",
  "updateurl": "http://www.wdsu.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8aa"),
  "title": "Wdsu.com - politics",
  "groupname": "Wdsu.com",
  "updateurl": "http://www.wdsu.com/politics/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8ab"),
  "title": "Koco.com - Oklahoma news",
  "groupname": "Koco.com",
  "updateurl": "http://www.koco.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8ac"),
  "title": "Koco.com - sports",
  "groupname": "Koco.com",
  "updateurl": "http://www.koco.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8ad"),
  "title": "Koco.com - entertainment",
  "groupname": "Koco.com",
  "updateurl": "http://www.koco.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8ae"),
  "title": "Koco.com - health",
  "groupname": "Koco.com",
  "updateurl": "http://www.koco.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8af"),
  "title": "Ksat.com - San Antonio news",
  "groupname": "Ksat.com",
  "updateurl": "http://www.ksat.com/news/-/478452/-/format/rss_2.0/view/asFeed/-/nv1jqp/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b0"),
  "title": "Ksat.com - politics",
  "groupname": "Ksat.com",
  "updateurl": "http://www.ksat.com/-/478556/4757604/-/format/rss_2.0/view/asFeed/-/l5pv1x/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b1"),
  "title": "Ksat.com - sports",
  "groupname": "Ksat.com",
  "updateurl": "http://www.ksat.com/sports/-/478218/-/format/rss_2.0/view/asFeed/-/9slcqt/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b2"),
  "title": "Koat.com - Albuquerque news",
  "groupname": "Koat.com",
  "updateurl": "http://www.koat.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b3"),
  "title": "Koat.com - sports",
  "groupname": "Koat.com",
  "updateurl": "http://www.koat.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b4"),
  "title": "Koat.com - entertainment",
  "groupname": "Koat.com",
  "updateurl": "http://www.koat.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b5"),
  "title": "Koat.com - money",
  "groupname": "Koat.com",
  "updateurl": "http://www.koat.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b6"),
  "title": "Turnto23.com - Bakersfield news",
  "groupname": "Turnto23.com",
  "updateurl": "http://www.turnto23.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b7"),
  "title": "Turnto23.com - health",
  "groupname": "Turnto23.com",
  "updateurl": "http://www.turnto23.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b8"),
  "title": "Kitv.com - Honolulu news",
  "groupname": "Kitv.com",
  "updateurl": "http://www.kitv.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00cfc321d3be0004e8b9"),
  "title": "Kitv.com - money",
  "groupname": "Kitv.com",
  "updateurl": "http://www.kitv.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8ba"),
  "title": "Kitv.com - life",
  "groupname": "Kitv.com",
  "updateurl": "http://www.kitv.com/mylife/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8bb"),
  "title": "Ksbw.com - Central California news",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8282574/-/format/rss_2.0/view/asFeed/-/127xmku/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8bc"),
  "title": "Ksbw.com - Monterey news",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8282886/-/format/rss_2.0/view/asFeed/-/badwne/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8bd"),
  "title": "Ksbw.com - Salinas news",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8282906/-/format/rss_2.0/view/asFeed/-/1ctsxn/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8be"),
  "title": "Ksbw.com - Santa Cruz",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8283152/-/format/rss_2.0/view/asFeed/-/sl12tdz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8bf"),
  "title": "Ksbw.com - local news",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8283354/-/format/rss_2.0/view/asFeed/-/mwtsxuz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c0"),
  "title": "Ksbw.com - World news",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8602958/-/format/rss_2.0/view/asFeed/-/ae4ngs/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c1"),
  "title": "Ksbw.com - entertainment",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8602980/-/format/rss_2.0/view/asFeed/-/sp3y4i/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c2"),
  "title": "Ksbw.com - politics",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8602962/-/format/rss_2.0/view/asFeed/-/frmytn/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c3"),
  "title": "Ksbw.com - sports",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8602984/-/format/rss_2.0/view/asFeed/-/tk9oq6/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c4"),
  "title": "Ksbw.com - health",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8602978/-/format/rss_2.0/view/asFeed/-/nqni2h/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c5"),
  "title": "Ksbw.com - money",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8603096/-/format/rss_2.0/view/asFeed/-/cg2krk/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c6"),
  "title": "Ksbw.com - food",
  "groupname": "Ksbw.com",
  "updateurl": "http://www.ksbw.com/-/1824/8603108/-/format/rss_2.0/view/asFeed/-/3p5jvoz/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c7"),
  "title": "Adelaide now - state news",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_state_191.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c8"),
  "title": "Foxreno.com - politics",
  "groupname": "Foxreno.com",
  "updateurl": "http://www.foxreno.com/feeds/categories/political/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8c9"),
  "title": "Foxreno.com - world news",
  "groupname": "Foxreno.com",
  "updateurl": "http://www.foxreno.com/feeds/categories/international/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8ca"),
  "title": "Kcra.com - Sacramento news",
  "groupname": "Kcra.com",
  "updateurl": "http://www.kcra.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d0c321d3be0004e8cb"),
  "title": "Kcra.com - sports",
  "groupname": "Kcra.com",
  "updateurl": "http://www.kcra.com/sports/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8cc"),
  "title": "Kcra.com - money",
  "groupname": "Kcra.com",
  "updateurl": "http://www.kcra.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8cd"),
  "title": "10News.com - San Diego news",
  "groupname": "10News.com",
  "updateurl": "http://www.10news.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8ce"),
  "title": "10News.com - national news",
  "groupname": "10News.com",
  "updateurl": "http://www.10news.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8cf"),
  "title": "10News.com - money",
  "groupname": "10News.com",
  "updateurl": "http://www.10news.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d0"),
  "title": "10News.com - health",
  "groupname": "10News.com",
  "updateurl": "http://www.10news.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d1"),
  "title": "Dailyprogress.com - local news",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d2"),
  "title": "Dailyprogress.com - business",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/charlottesville-business-journal/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d3"),
  "title": "Dailyprogress.com -  Cavalier Insider",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/cavalier-insider/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d4"),
  "title": "Dailyprogress.com -  High School",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/high-scool-sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d5"),
  "title": "Dailyprogress.com -  Ratcliffe On",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/ratcliffe-on/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d6"),
  "title": "Dailyprogress.com -  College sports",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/sports-college/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d7"),
  "title": "Dailyprogress.com -  lifestyle",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/recent-lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d8"),
  "title": "Dailyprogress.com -  entertainment",
  "groupname": "Dailyprogress.com",
  "updateurl": "http://www2.dailyprogress.com/list/feed/rss/recent-entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8d9"),
  "title": "Newsvirginian.com - Virginian news",
  "groupname": "Newsvirginian.com",
  "updateurl": "http://www2.newsvirginian.com/list/feed/rss/news-local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8da"),
  "title": "Newsvirginian.com - sports",
  "groupname": "Newsvirginian.com",
  "updateurl": "http://www2.newsvirginian.com/list/feed/rss/sports-local-high-school/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8db"),
  "title": "Newsvirginian.com - lifestyle",
  "groupname": "Newsvirginian.com",
  "updateurl": "http://www2.newsvirginian.com/list/feed/rss/lifestyles-local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8dc"),
  "title": "Newsvirginian.com - entertainment",
  "groupname": "Newsvirginian.com",
  "updateurl": "http://www2.newsvirginian.com/list/feed/rss/entertainment-local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d1c321d3be0004e8dd"),
  "title": "Wsls.com - local news",
  "groupname": "Wsls.com",
  "updateurl": "http://www2.wsls.com/list/feed/rss/local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8de"),
  "title": "Wsls.com - politics",
  "groupname": "Wsls.com",
  "updateurl": "http://www2.wsls.com/list/feed/rss/local-politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8df"),
  "title": "Wsls.com - state news",
  "groupname": "Wsls.com",
  "updateurl": "http://www2.wsls.com/list/feed/rss/state-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e0"),
  "title": "Wsls.com - state politics",
  "groupname": "Wsls.com",
  "updateurl": "http://www2.wsls.com/list/feed/rss/state-politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e1"),
  "title": "Wsls.com - health",
  "groupname": "Wsls.com",
  "updateurl": "http://www2.wsls.com/list/feed/rss/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e2"),
  "title": "Wsls.com - national news",
  "groupname": "Wsls.com",
  "updateurl": "http://www2.wsls.com/list/feed/rss/national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e3"),
  "title": "Politifact.com - Virginia",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/virginia/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e4"),
  "title": "Politifact.com - Florida",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/florida/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e5"),
  "title": "Politifact.com - Georgia",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/georgia/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e6"),
  "title": "Politifact.com - New Jersey",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/new-jersey/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e7"),
  "title": "Politifact.com - Ohio",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/ohio/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e8"),
  "title": "Politifact.com - Oregon",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/oregon/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8e9"),
  "title": "Politifact.com - Rhode Island",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/rhode-island/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8ea"),
  "title": "Politifact.com - Tennessee",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/tennessee/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8eb"),
  "title": "Politifact.com - Texas",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/texas/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8ec"),
  "title": "Politifact.com - Wisconsin",
  "groupname": "Politifact.com",
  "updateurl": "http://www.politifact.com/feeds/statements/wisconsin/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d2c321d3be0004e8ed"),
  "title": "Jsonline.com - local news",
  "groupname": "Jsonline.com",
  "updateurl": "http://www.jsonline.com/rss/?c=y&amp;c=y&amp;path=%2Fnews&amp;path=%2Fnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8ee"),
  "title": "Commercialappeal.com - local news",
  "groupname": "Commercialappeal.com",
  "updateurl": "http://www.commercialappeal.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8ef"),
  "title": "Commercialappeal.com - sports",
  "groupname": "Commercialappeal.com",
  "updateurl": "http://www.commercialappeal.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f0"),
  "title": "Commercialappeal.com - business",
  "groupname": "Commercialappeal.com",
  "updateurl": "http://www.commercialappeal.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f1"),
  "title": "Commercialappeal.com - lifestyle",
  "groupname": "Commercialappeal.com",
  "updateurl": "http://www.commercialappeal.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f2"),
  "title": "Commercialappeal.com - enetertainment",
  "groupname": "Commercialappeal.com",
  "updateurl": "http://www.commercialappeal.com/rss/headlines/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f3"),
  "title": "Commercialappeal.com - politics",
  "groupname": "Commercialappeal.com",
  "updateurl": "http://www.commercialappeal.com/rss/headlines/politifact/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f4"),
  "title": "Providencejournal.com - entertainment",
  "groupname": "Providencejournal",
  "updateurl": "http://news.providencejournal.com/arts-entertainment/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f5"),
  "title": "Providencejournal.com - life style",
  "groupname": "Providencejournal",
  "updateurl": "http://blogs.providencejournal.com/arts-entertainment/lifestyles/gardening/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f6"),
  "title": "Oregonlive.com - Portland news",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/portlandcityhall/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f7"),
  "title": "Oregonlive.com - politics",
  "groupname": "Oregonlive.com",
  "updateurl": "http://impact.oregonlive.com/mapes/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f8"),
  "title": "Oregonlive.com - money",
  "groupname": "Oregonlive.com",
  "updateurl": "http://impact.oregonlive.com/finance/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8f9"),
  "title": "Oregonlive.com - walking",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/walking/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8fa"),
  "title": "Oregonlive.com - Winterhawks",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/winterhawks/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8fb"),
  "title": "Oregonlive.com - Northwest Athletic Conference",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/gnac/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8fc"),
  "title": "Oregonlive.com - news",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/news_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d3c321d3be0004e8fd"),
  "title": "Oregonlive.com - election",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/politics_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e8fe"),
  "title": "Oregonlive.com - national",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/today/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e8ff"),
  "title": "Oregonlive.com - NBA",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/nba_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e900"),
  "title": "Oregonlive.com - NFL",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/nfl_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e901"),
  "title": "Oregonlive.com - Portland pilots",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/pilots_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e902"),
  "title": "Oregonlive.com - Portland Vikings",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/vikings_impact/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e903"),
  "title": "Oregonlive.com - dining",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/ent_impact_dining/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e904"),
  "title": "Oregonlive.com - Arts",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/ent_impact_arts/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e905"),
  "title": "Oregonlive.com - Performing Art",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/ent_impact_performance/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e906"),
  "title": "Oregonlive.com - music news",
  "groupname": "Oregonlive.com",
  "updateurl": "http://blog.oregonlive.com/ent_impact_music/atom.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e907"),
  "title": "Tricities.com - local news",
  "groupname": "Tricities.com",
  "updateurl": "http://www2.tricities.com/list/feed/rss/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e908"),
  "title": "Tricities.com - business",
  "groupname": "Tribunereviewnews",
  "updateurl": "http://www2.tricities.com/list/feed/rss/local-business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e909"),
  "title": "Tricities.com - medical",
  "groupname": "Tricities.com",
  "updateurl": "http://www2.tricities.com/list/feed/rss/medical-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e90a"),
  "title": "Tricities.com - national news",
  "groupname": "Tricities.com",
  "updateurl": "http://www2.tricities.com/list/feed/rss/ap-national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e90b"),
  "title": "Tricities.com - regional news",
  "groupname": "Tricities.com",
  "updateurl": "http://www2.tricities.com/list/feed/rss/regional-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e90c"),
  "title": "Godanriver.com - Danville-news",
  "groupname": "Godanriver.com",
  "updateurl": "http://www2.godanriver.com/list/feed/rss/danville-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d4c321d3be0004e90d"),
  "title": "Godanriver.com - National news",
  "groupname": "Godanriver.com",
  "updateurl": "http://www2.godanriver.com/list/feed/rss/national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e90e"),
  "title": "Godanriver.com - lifestyle",
  "groupname": "Godanriver.com",
  "updateurl": "http://www2.godanriver.com/list/feed/rss/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e90f"),
  "title": "Godanriver.com - Acc sports",
  "groupname": "Godanriver.com",
  "updateurl": "http://www2.godanriver.com/list/feed/rss/acc-sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e910"),
  "title": "Godanriver.com - motor sports",
  "groupname": "Godanriver.com",
  "updateurl": "http://www2.godanriver.com/list/feed/rss/motor-sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e911"),
  "title": "Godanriver.com - entertainment",
  "groupname": "Godanriver.com",
  "updateurl": "http://www2.godanriver.com/list/feed/rss/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e912"),
  "title": "Newsadvance.com - local news",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e913"),
  "title": "Newsadvance.com - politics",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/local-politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e914"),
  "title": "Newsadvance.com - business",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/local-business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e915"),
  "title": "Newsadvance.com - state news",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/state-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e916"),
  "title": "Newsadvance.com -state politics",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/state-politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e917"),
  "title": "Newsadvance.com - business",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/business-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e918"),
  "title": "Newsadvance.com - enetertainment",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e919"),
  "title": "Newsadvance.com - national politics",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/national-politics/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e91a"),
  "title": "Newsadvance.com - national news",
  "groupname": "Newsadvance.com",
  "updateurl": "http://www2.newsadvance.com/list/feed/rss/ap-national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e91b"),
  "title": "Charlotteobserver.com - national news",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/nation/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e91c"),
  "title": "Charlotteobserver.com - politics",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/politics/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e91d"),
  "title": "Charlotteobserver.com - world news",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/world/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e91e"),
  "title": "Charlotteobserver.com - business",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/123/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d5c321d3be0004e91f"),
  "title": "Charlotteobserver.com - banking",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/138/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e920"),
  "title": "Charlotteobserver.com - sports",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/sports/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e921"),
  "title": "Charlotteobserver.com - Carolina Panthers",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/panthers/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e922"),
  "title": "Charlotteobserver.com - college football",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/college_football/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e923"),
  "title": "Charlotteobserver.com - College hoops",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/college_hoops/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e924"),
  "title": "Charlotteobserver.com -  High Schools sports",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/preps/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e925"),
  "title": "Charlotteobserver.com -  entertainment",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/122/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e926"),
  "title": "Charlotteobserver.com -  Living Here",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/124/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e927"),
  "title": "Charlotteobserver.com -  food",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/176/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e928"),
  "title": "Charlotteobserver.com -  home &amp; garden",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/178/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e929"),
  "title": "Charlotteobserver.com -  style",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/179/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e92a"),
  "title": "Charlotteobserver.com -  health",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/177/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e92b"),
  "title": "Charlotteobserver.com -  travel",
  "groupname": "Charlotteobserver.com",
  "updateurl": "http://www.charlotteobserver.com/180/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e92c"),
  "title": "Gawker.com - local news",
  "groupname": "Gawker.com",
  "updateurl": "http://feeds.gawker.com/Deadspin/full",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e92d"),
  "title": "Liveleak.com - local news",
  "groupname": "Liveleak.com",
  "updateurl": "http://www.liveleak.com/rss?channel_token=04c_1302956196",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e92e"),
  "title": "Liveleak.com - entertainment",
  "groupname": "Liveleak.com",
  "updateurl": "http://www.liveleak.com/rss?channel_token=51a_1302956523",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e92f"),
  "title": "Wjactv.com - local news",
  "groupname": "Wjactv.com",
  "updateurl": "http://www.wjactv.com/list/rss/news/local/6-news-local-headlines/aCTM/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d6c321d3be0004e930"),
  "title": "Wjactv.com - national news",
  "groupname": "Wjactv.com",
  "updateurl": "http://www.wjactv.com/feeds/categories/ap/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e931"),
  "title": "Wjactv.com - entertainment",
  "groupname": "Wjactv.com",
  "updateurl": "http://www.wjactv.com/feeds/categories/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e932"),
  "title": "Wjactv.com - health",
  "groupname": "Wjactv.com",
  "updateurl": "http://www.wjactv.com/feeds/categories/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e933"),
  "title": "Wjactv.com - sports",
  "groupname": "Wjactv.com",
  "updateurl": "http://www.wjactv.com/feeds/categories/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e935"),
  "title": "Hurriyetdailynews.com - local news",
  "groupname": "Hurriyetdailynews.com",
  "updateurl": "http://www.hurriyetdailynews.com/rss.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e936"),
  "title": "Thetechherald,com -  business",
  "groupname": "Thetechherald,com",
  "updateurl": "http://feeds.feedburner.com/thetechherald/business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e937"),
  "title": "Thetechherald,com -  entertainment",
  "groupname": "Thetechherald,com",
  "updateurl": "http://feeds.feedburner.com/thetechherald/entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e938"),
  "title": "Newsnet5.com - Akron Canton News",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=30043",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e939"),
  "title": "Newsnet5.com - National news",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20002",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e93a"),
  "title": "Newsnet5.com - political news",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e93b"),
  "title": "Newsnet5.com - health",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20006",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e93c"),
  "title": "Newsnet5.com - tech",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20009",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e93d"),
  "title": "Newsnet5.com - lifestyle",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=10006",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e93e"),
  "title": "Newsnet5.com - celebrity news",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20030",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e93f"),
  "title": "Newsnet5.com - sports",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=10004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e940"),
  "title": "Newsnet5.com - Consumer news",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=20074",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d7c321d3be0004e941"),
  "title": "Newsnet5.com - Ohio sports",
  "groupname": "Newsnet5.com",
  "updateurl": "http://www.newsnet5.com/feeds/rssFeed?siteId=10003&amp;obfType=RSS_FEED&amp;categoryId=30053",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e942"),
  "title": "Wxyz.com - state news",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=20001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e943"),
  "title": "Wxyz.com - detroit  news",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=30466",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e944"),
  "title": "Wxyz.com - Wayne County  news",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=30473",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e945"),
  "title": "Wxyz.com - Oakland County news",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=30470",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e946"),
  "title": "Wxyz.com - sports",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=10004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e947"),
  "title": "Wxyz.com - entertainment",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=10008",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e948"),
  "title": "Wxyz.com - political news",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=20004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e949"),
  "title": "Wxyz.com - health",
  "groupname": "Wxyz.com",
  "updateurl": "http://www.wxyz.com/feeds/rssFeed?siteId=10017&amp;obfType=RSS_FEED&amp;categoryId=20006",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e94a"),
  "title": "Reporternews.com - local news",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e94b"),
  "title": "Reporternews.com - sports",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e94c"),
  "title": "Reporternews.com - business",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e94d"),
  "title": "Reporternews.com - life",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e94e"),
  "title": "Reporternews.com - entertainment",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/rss/headlines/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e94f"),
  "title": "Reporternews.com - bigcountryjournal",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/rss/headlines/bigcountryjournal/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e950"),
  "title": "Reporternews.com - health",
  "groupname": "Reporternews.com",
  "updateurl": "http://www.reporternews.com/feeds/headlines/lifestyles/health-fitness/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e951"),
  "title": "Independentmail.com - local news",
  "groupname": "Independentmail.com",
  "updateurl": "http://www.independentmail.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e952"),
  "title": "Independentmail.com - college sports",
  "groupname": "Independentmail.com",
  "updateurl": "http://www.independentmail.com/feeds/headlines/sports/college/clemson-university/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d8c321d3be0004e953"),
  "title": "Independentmail.com - sports",
  "groupname": "Independentmail.com",
  "updateurl": "http://www.independentmail.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e954"),
  "title": "Independentmail.com - business",
  "groupname": "Independentmail.com",
  "updateurl": "http://www.independentmail.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e955"),
  "title": "Independentmail.com - health",
  "groupname": "Independentmail.com",
  "updateurl": "http://www.independentmail.com/feeds/headlines/lifestyles/health-fitness/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e956"),
  "title": "Independentmail.com - lifestyle",
  "groupname": "Independentmail.com",
  "updateurl": "http://www.independentmail.com/feeds/headlines/lifestyles/all/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e957"),
  "title": "Dailycamera.com - world news",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/218129.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e958"),
  "title": "Dailycamera.com - state news",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/218130.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e959"),
  "title": "Dailycamera.com - business",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/218116.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e95a"),
  "title": "Dailycamera.com - entertainment",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/218117.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e95b"),
  "title": "Dailycamera.com - lifestyle",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/218120.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e95c"),
  "title": "Dailycamera.com - Count news",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/219703.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e95d"),
  "title": "Dailycamera.com - local news",
  "groupname": "Dailycamera.com",
  "updateurl": "http://feeds.dailycamera.com/mngi/rss/CustomRssServlet/21/218121.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e95e"),
  "title": "Coloradodaily.com - local news",
  "groupname": "Coloradodaily.com",
  "updateurl": "http://feeds.coloradodaily.com/mngi/rss/CustomRssServlet/25/219104.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e95f"),
  "title": "Coloradodaily.com - sports",
  "groupname": "Coloradodaily.com",
  "updateurl": "http://feeds.coloradodaily.com/mngi/rss/CustomRssServlet/25/219106.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e960"),
  "title": "Coloradodaily.com -entertainment",
  "groupname": "Coloradodaily.com",
  "updateurl": "http://feeds.coloradodaily.com/mngi/rss/CustomRssServlet/25/219107.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e961"),
  "title": "Timescall.com -local news",
  "groupname": "Timescall.com",
  "updateurl": "http://feeds.timescall.com/mngi/rss/CustomRssServlet/46/243101.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00d9c321d3be0004e962"),
  "title": "Timescall.com - business",
  "groupname": "Timescall.com",
  "updateurl": "http://feeds.timescall.com/mngi/rss/CustomRssServlet/46/243103.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e963"),
  "title": "Timescall.com - world news",
  "groupname": "Timescall.com",
  "updateurl": "http://feeds.timescall.com/mngi/rss/CustomRssServlet/46/243105.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e964"),
  "title": "Timescall.com - sports",
  "groupname": "Timescall.com",
  "updateurl": "http://feeds.timescall.com/mngi/rss/CustomRssServlet/46/243108.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e965"),
  "title": "Timescall.com - entertainment",
  "groupname": "Timescall.com",
  "updateurl": "http://feeds.timescall.com/mngi/rss/CustomRssServlet/46/243110.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e966"),
  "title": "Timescall.com - health",
  "groupname": "Timescall.com",
  "updateurl": "http://feeds.timescall.com/mngi/rss/CustomRssServlet/46/243113.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e967"),
  "title": "Reporterherald.com - Loveland local news",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244102.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e968"),
  "title": "Reporterherald.com - Lorimer County news",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244103.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e969"),
  "title": "Reporterherald.com - Colorado news",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244105.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e96a"),
  "title": "Reporterherald.com - Business",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244112.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e96b"),
  "title": "Reporterherald.com - sports",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244119.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e96c"),
  "title": "Reporterherald.com - health",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244131.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e96d"),
  "title": "Reporterherald.com - Eagles Hockey",
  "groupname": "Reporterherald.com",
  "updateurl": "http://feeds.reporterherald.com/mngi/rss/CustomRssServlet/47/244121.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e96e"),
  "title": "Broomfieldenterprise.com - local news",
  "groupname": "Broomfieldenterprise.com",
  "updateurl": "http://feeds.broomfieldenterprise.com/mngi/rss/CustomRssServlet/24/218410.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dac321d3be0004e96f"),
  "title": "Broomfieldenterprise.com - sports",
  "groupname": "Broomfieldenterprise.com",
  "updateurl": "http://feeds.broomfieldenterprise.com/mngi/rss/CustomRssServlet/24/218421.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e970"),
  "title": "Broomfieldenterprise.com - business",
  "groupname": "Broomfieldenterprise.com",
  "updateurl": "http://feeds.broomfieldenterprise.com/mngi/rss/CustomRssServlet/24/218403.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e971"),
  "title": "Broomfieldenterprise.com - entertainment",
  "groupname": "Broomfieldenterprise.com",
  "updateurl": "http://feeds.broomfieldenterprise.com/mngi/rss/CustomRssServlet/24/218405.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e972"),
  "title": "Broomfieldenterprise.com - life",
  "groupname": "Broomfieldenterprise.com",
  "updateurl": "http://feeds.broomfieldenterprise.com/mngi/rss/CustomRssServlet/24/218418.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e973"),
  "title": "Fortmorgantimes.com - local news",
  "groupname": "Fortmorgantimes.com",
  "updateurl": "http://feeds.fortmorgantimes.com/mngi/rss/CustomRssServlet/32/217406.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e974"),
  "title": "Fortmorgantimes.com - business",
  "groupname": "Fortmorgantimes.com",
  "updateurl": "http://feeds.fortmorgantimes.com/mngi/rss/CustomRssServlet/32/217407.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e975"),
  "title": "Fortmorgantimes.com - sports",
  "groupname": "Fortmorgantimes.com",
  "updateurl": "http://feeds.fortmorgantimes.com/mngi/rss/CustomRssServlet/32/217410.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e976"),
  "title": "Buffzone.com - footbal",
  "groupname": "Buffzone.com",
  "updateurl": "http://feeds.buffzone.com/mngi/rss/CustomRssServlet/29/218103.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e977"),
  "title": "Buffzone.com - golf",
  "groupname": "Buffzone.com",
  "updateurl": "http://feeds.buffzone.com/mngi/rss/CustomRssServlet/29/218105.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e978"),
  "title": "Buffzone.com - Mans Basketball",
  "groupname": "Buffzone.com",
  "updateurl": "http://feeds.buffzone.com/mngi/rss/CustomRssServlet/29/218106.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e979"),
  "title": "Buffzone.com - tenis",
  "groupname": "Buffzone.com",
  "updateurl": "http://feeds.buffzone.com/mngi/rss/CustomRssServlet/29/218112.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e97a"),
  "title": "Buffzone.com - Womens Basketbal",
  "groupname": "Buffzone.com",
  "updateurl": "http://feeds.buffzone.com/mngi/rss/CustomRssServlet/29/218115.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e97b"),
  "title": "Ktva.com - Alaska news",
  "groupname": "Ktva.com",
  "updateurl": "http://www.ktva.com/news/local/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e97c"),
  "title": "Ktva.com - politics",
  "groupname": "Ktva.com",
  "updateurl": "http://www.ktva.com/news/politics/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e97d"),
  "title": "Berkshireeagle.com - local news",
  "groupname": "Berkshireeagle.com",
  "updateurl": "http://feeds.berkshireeagle.com/mngi/rss/CustomRssServlet/101/204002.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dbc321d3be0004e97e"),
  "title": "Berkshireeagle.com - sports",
  "groupname": "Berkshireeagle.com",
  "updateurl": "http://feeds.berkshireeagle.com/mngi/rss/CustomRssServlet/101/204007.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e97f"),
  "title": "Berkshireeagle.com - business",
  "groupname": "Berkshireeagle.com",
  "updateurl": "http://feeds.berkshireeagle.com/mngi/rss/CustomRssServlet/101/203306.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e980"),
  "title": "Berkshireeagle.com - entertainment",
  "groupname": "Berkshireeagle.com",
  "updateurl": "http://feeds.berkshireeagle.com/mngi/rss/CustomRssServlet/101/204025.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e981"),
  "title": "Berkshireeagle.com - food",
  "groupname": "Berkshireeagle.com",
  "updateurl": "http://feeds.berkshireeagle.com/mngi/rss/CustomRssServlet/101/204035.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e982"),
  "title": "Berkshireeagle.com - health",
  "groupname": "Berkshireeagle.com",
  "updateurl": "http://feeds.berkshireeagle.com/mngi/rss/CustomRssServlet/101/204039.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e983"),
  "title": "Cbs6albany.com - local news",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://www.cbs6albany.com/common/rss/rss.php?cat=Local+News",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e984"),
  "title": "Cbs6albany.com - sports",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://www.cbs6albany.com/common/rss/rss.php?cat=Local+Sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e985"),
  "title": "Cbs6albany.com - national news",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/USHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e986"),
  "title": "Cbs6albany.com - world news",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/WORLDHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e987"),
  "title": "Cbs6albany.com - politics",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/POLITICSHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e988"),
  "title": "Cbs6albany.com - Washington news",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/WASHINGTONHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e989"),
  "title": "Cbs6albany.com - business",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/BUSINESSHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e98a"),
  "title": "Cbs6albany.com - tech",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/TECHHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e98b"),
  "title": "Cbs6albany.com - sports",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/SPORTSHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e98c"),
  "title": "Cbs6albany.com - entertainnment",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/ENTERTAINMENT-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e98d"),
  "title": "Cbs6albany.com - health",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/HEALTHHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e98e"),
  "title": "Cbs6albany.com - science",
  "groupname": "Cbs6albany.com",
  "updateurl": "http://hosted.ap.org/lineups/SCIENCEHEADS-rss_2.0.xml?SITE=WRGBTV&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e98f"),
  "title": "Lowellsun.com - local news",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/204916.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dcc321d3be0004e990"),
  "title": "Lowellsun.com - High School Sports",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/204918.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e991"),
  "title": "Lowellsun.com - baseball",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/231505.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e992"),
  "title": "Lowellsun.com - Hockey",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/231506.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e993"),
  "title": "Lowellsun.com - Golf",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/232427.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e994"),
  "title": "Lowellsun.com - celebrity",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/232805.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e995"),
  "title": "Lowellsun.com - Poker",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/232803.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e996"),
  "title": "Lowellsun.com - health",
  "groupname": "Lowellsun.com",
  "updateurl": "http://feeds.lowellsun.com/mngi/rss/CustomRssServlet/105/206309.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e997"),
  "title": "Sentinelandenterprise.com - celebrity",
  "groupname": "Sentinelandenterprise.com",
  "updateurl": "http://feeds.sentinelandenterprise.com/mngi/rss/CustomRssServlet/106/233732.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e998"),
  "title": "Benningtonbanner.com - business",
  "groupname": "Benningtonbanner.com",
  "updateurl": "http://feeds.benningtonbanner.com/mngi/rss/CustomRssServlet/509/204521.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e999"),
  "title": "Vcstar.com - local news",
  "groupname": "Vcstar.com",
  "updateurl": "http://www.vcstar.com/rss/headlines/news/local/local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e99a"),
  "title": "Caller.com - local news",
  "groupname": "Caller.com",
  "updateurl": "http://www.caller.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e99b"),
  "title": "Midlandsconnect.com - politics",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?feed=political_news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e99c"),
  "title": "Benningtonbanner.com - arts",
  "groupname": "Benningtonbanner.com",
  "updateurl": "http://feeds.benningtonbanner.com/mngi/rss/CustomRssServlet/509/204513.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e99d"),
  "title": "Midlandsconnect.com - sports",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?feed=wach_sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e99e"),
  "title": "Kitsapsun.com - lifestyle",
  "groupname": "Kitsapsun.com",
  "updateurl": "http://www.kitsapsun.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e99f"),
  "title": "Benningtonbanner.com - sports",
  "groupname": "Benningtonbanner.com",
  "updateurl": "http://feeds.benningtonbanner.com/mngi/rss/CustomRssServlet/509/204707.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e9a0"),
  "title": "Firstcoastnews.com - world",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/usworld?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ddc321d3be0004e9a1"),
  "title": "Firstcoastnews.com - Florida news",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/florida?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a2"),
  "title": "Benningtonbanner.com - local news",
  "groupname": "Benningtonbanner.com",
  "updateurl": "http://feeds.benningtonbanner.com/mngi/rss/CustomRssServlet/509/204517.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a3"),
  "title": "Reformer.com - local news",
  "groupname": "Reformer.com",
  "updateurl": "http://feeds.reformer.com/mngi/rss/CustomRssServlet/510/205101.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a4"),
  "title": "Reformer.com -national news",
  "groupname": "Reformer.com",
  "updateurl": "http://feeds.reformer.com/mngi/rss/CustomRssServlet/510/205103.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a5"),
  "title": "Reformer.com - world news",
  "groupname": "Reformer.com",
  "updateurl": "http://feeds.reformer.com/mngi/rss/CustomRssServlet/510/205104.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a6"),
  "title": "Reformer.com - health",
  "groupname": "Reformer.com",
  "updateurl": "http://feeds.reformer.com/mngi/rss/CustomRssServlet/510/205113.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a7"),
  "title": "Reformer.com - sports",
  "groupname": "Reformer.com",
  "updateurl": "http://feeds.reformer.com/mngi/rss/CustomRssServlet/510/205133.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a8"),
  "title": "Dailybreeze.com - local news",
  "groupname": "Dailybreeze.com",
  "updateurl": "http://feeds.dailybreeze.com/mngi/rss/CustomRssServlet/577/200331.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9a9"),
  "title": "Dailybreeze.com - sports",
  "groupname": "Dailybreeze.com",
  "updateurl": "http://feeds.dailybreeze.com/mngi/rss/CustomRssServlet/577/211209.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9aa"),
  "title": "Wltx.com - local news",
  "groupname": "Wltx.com",
  "updateurl": "http://www.wltx.com/rss/news/2/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9ab"),
  "title": "La.com - What's Hot",
  "groupname": "La.com",
  "updateurl": "http://feeds.la.com/mngi/rss/CustomRssServlet/241/212909.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9ac"),
  "title": "Dailybulletin.com - local news",
  "groupname": "Dailybulletin.com",
  "updateurl": "http://feeds.dailybulletin.com/mngi/rss/CustomRssServlet/203/200349.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9ad"),
  "title": "Dailybulletin.com - sports",
  "groupname": "Dailybulletin.com",
  "updateurl": "http://feeds.dailybulletin.com/mngi/rss/CustomRssServlet/203/227202.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9b1"),
  "title": "Dailynews.com - local news",
  "groupname": "Dailynews.com",
  "updateurl": "http://feeds.dailynews.com/mngi/rss/CustomRssServlet/200/202971.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9b2"),
  "title": "Dailynews.com - Antelope Valley",
  "groupname": "Dailynews.com",
  "updateurl": "http://feeds.dailynews.com/mngi/rss/CustomRssServlet/200/201060.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b3"),
  "title": "Dailynews.com - sports",
  "groupname": "Dailynews.com",
  "updateurl": "http://feeds.dailynews.com/mngi/rss/CustomRssServlet/200/206112.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b4"),
  "title": "Dailynews.com - business",
  "groupname": "Dailynews.com",
  "updateurl": "http://feeds.dailynews.com/mngi/rss/CustomRssServlet/200/201064.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b5"),
  "title": "Dailynews.com - celebrities",
  "groupname": "Dailynews.com",
  "updateurl": "http://feeds.dailynews.com/mngi/rss/CustomRssServlet/200/224317.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b6"),
  "title": "Presstelegram.com - local news",
  "groupname": "Presstelegram.com",
  "updateurl": "http://feeds.presstelegram.com/mngi/rss/CustomRssServlet/204/234501.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b7"),
  "title": "Presstelegram.com - politics",
  "groupname": "Presstelegram.com",
  "updateurl": "http://feeds.presstelegram.com/mngi/rss/CustomRssServlet/204/200431.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b8"),
  "title": "Presstelegram.com - sports",
  "groupname": "Presstelegram.com",
  "updateurl": "http://feeds.presstelegram.com/mngi/rss/CustomRssServlet/204/211201.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9b9"),
  "title": "Presstelegram.com - business",
  "groupname": "Presstelegram.com",
  "updateurl": "http://feeds.presstelegram.com/mngi/rss/CustomRssServlet/204/201807.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9ba"),
  "title": "Pasadenastarnews.com  -  business",
  "groupname": "Pasadenastarnews.com",
  "updateurl": "http://feeds.pasadenastarnews.com/mngi/rss/CustomRssServlet/206/200728.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9bb"),
  "title": "Pasadenastarnews.com  -  local news",
  "groupname": "Pasadenastarnews.com",
  "updateurl": "http://feeds.pasadenastarnews.com/mngi/rss/CustomRssServlet/206/200366.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9bc"),
  "title": "Pasadenastarnews.com  -  Latest News",
  "groupname": "Pasadenastarnews.com",
  "updateurl": "http://feeds.pasadenastarnews.com/mngi/rss/CustomRssServlet/206/200461.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9bd"),
  "title": "Pasadenastarnews.com  -  sports",
  "groupname": "Pasadenastarnews.com",
  "updateurl": "http://feeds.pasadenastarnews.com/mngi/rss/CustomRssServlet/206/200462.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9be"),
  "title": "Redlandsdailyfacts.com - local news",
  "groupname": "Redlandsdailyfacts.com",
  "updateurl": "http://feeds.redlandsdailyfacts.com/mngi/rss/CustomRssServlet/209/200398.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9bf"),
  "title": "Redlandsdailyfacts.com - sports",
  "groupname": "Redlandsdailyfacts.com",
  "updateurl": "http://feeds.redlandsdailyfacts.com/mngi/rss/CustomRssServlet/209/200400.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9c0"),
  "title": "Sgvtribune.com - local news",
  "groupname": "Sgvtribune.com",
  "updateurl": "http://feeds.sgvtribune.com/mngi/rss/CustomRssServlet/205/200427.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9c1"),
  "title": "Sgvtribune.com - business",
  "groupname": "Sgvtribune.com",
  "updateurl": "http://feeds.sgvtribune.com/mngi/rss/CustomRssServlet/205/200428.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9c2"),
  "title": "Sgvtribune.com - sports",
  "groupname": "Sgvtribune.com",
  "updateurl": "http://feeds.sgvtribune.com/mngi/rss/CustomRssServlet/205/201012.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dfc321d3be0004e9c3"),
  "title": "Wltx.com - health",
  "groupname": "Wltx.com",
  "updateurl": "http://www.wltx.com/rss/health/291/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9c4"),
  "title": "Whittierdailynews.com - business",
  "groupname": "Whittierdailynews.com",
  "updateurl": "http://feeds.whittierdailynews.com/mngi/rss/CustomRssServlet/207/200705.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9c5"),
  "title": "Whittierdailynews.com - local news",
  "groupname": "Whittierdailynews.com",
  "updateurl": "http://feeds.whittierdailynews.com/mngi/rss/CustomRssServlet/207/200445.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9c6"),
  "title": "Whittierdailynews.com - sports",
  "groupname": "Whittierdailynews.com",
  "updateurl": "http://feeds.whittierdailynews.com/mngi/rss/CustomRssServlet/207/200706.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9c7"),
  "title": "Contracostatimes.com - local news",
  "groupname": "Contracostatimes",
  "updateurl": "http://feeds.contracostatimes.com/mngi/rss/CustomRssServlet/571/200207.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9c8"),
  "title": "Insidebayarea.com - Fremont Argus News",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/247505.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9c9"),
  "title": "Insidebayarea.com - Top Alameda Times-Star Headlines",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201303.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9ca"),
  "title": "Insidebayarea.com - business",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201308.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9cb"),
  "title": "Insidebayarea.com - Sharks news",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201315.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9cc"),
  "title": "Insidebayarea.com - Giants news",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201313.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9cd"),
  "title": "Insidebayarea.com - Oakland news",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201312.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9ce"),
  "title": "Insidebayarea.com - 49ers news",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201311.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9cf"),
  "title": "Insidebayarea.com - Cal Sports - news",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/201316.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9d0"),
  "title": "Insidebayarea.com - East Bay High School Sports",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/246203.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9d1"),
  "title": "Insidebayarea.com - restaurants",
  "groupname": "Insidebayarea.com",
  "updateurl": "http://feeds.insidebayarea.com/mngi/rss/CustomRssServlet/181/205001.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9d2"),
  "title": "Chicoer.com - local news",
  "groupname": "Chicoer.com",
  "updateurl": "http://feeds.chicoer.com/mngi/rss/CustomRssServlet/135/201927.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9d3"),
  "title": "Chicoer.com - business",
  "groupname": "Chicoer.com",
  "updateurl": "http://feeds.chicoer.com/mngi/rss/CustomRssServlet/135/200423.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e0c321d3be0004e9d4"),
  "title": "Chicoer.com - lifestyle",
  "groupname": "Chicoer.com",
  "updateurl": "http://feeds.chicoer.com/mngi/rss/CustomRssServlet/135/201931.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9d5"),
  "title": "Chicoer.com - sports",
  "groupname": "Chicoer.com",
  "updateurl": "http://feeds.chicoer.com/mngi/rss/CustomRssServlet/135/200424.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9d6"),
  "title": "Wltx.com - sport",
  "groupname": "Wltx.com",
  "updateurl": "http://www.wltx.com/rss/sports/4/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9d7"),
  "title": "Dailydemocrat.com - sports",
  "groupname": "Dailydemocrat.com",
  "updateurl": "http://feeds.dailydemocrat.com/mngi/rss/CustomRssServlet/136/200381.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9d8"),
  "title": "Dailydemocrat.com - life",
  "groupname": "Dailydemocrat.com",
  "updateurl": "http://feeds.dailydemocrat.com/mngi/rss/CustomRssServlet/136/202405.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9d9"),
  "title": "Times-standard.com - local news",
  "groupname": "Times-standard.com",
  "updateurl": "http://feeds.times-standard.com/mngi/rss/CustomRssServlet/127/200361.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9da"),
  "title": "Times-standard.com - sports",
  "groupname": "Times-standard.com",
  "updateurl": "http://feeds.times-standard.com/mngi/rss/CustomRssServlet/127/200363.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9db"),
  "title": "Times-standard.com - business",
  "groupname": "Times-standard.com",
  "updateurl": "http://feeds.times-standard.com/mngi/rss/CustomRssServlet/127/200362.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9dc"),
  "title": "Times-standard.com - entertainment",
  "groupname": "Times-standard.com",
  "updateurl": "http://feeds.times-standard.com/mngi/rss/CustomRssServlet/127/202301.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9dd"),
  "title": "Times-standard.com - lifestyle",
  "groupname": "Times-standard.com",
  "updateurl": "http://feeds.times-standard.com/mngi/rss/CustomRssServlet/127/202302.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9de"),
  "title": "Marinij.com - Marin news",
  "groupname": "Marinij.com",
  "updateurl": "http://feeds.marinij.com/mngi/rss/CustomRssServlet/234/200414.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9df"),
  "title": "Firstcoastnews.com - money",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/money?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e0"),
  "title": "Marinij.com - san rafael news",
  "groupname": "Marinij.com",
  "updateurl": "http://feeds.marinij.com/mngi/rss/CustomRssServlet/234/200402.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e1"),
  "title": "Marinij.com - sports",
  "groupname": "Marinij.com",
  "updateurl": "http://feeds.marinij.com/mngi/rss/CustomRssServlet/234/200411.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e2"),
  "title": "Marinij.com - entertainment",
  "groupname": "Marinij.com",
  "updateurl": "http://feeds.marinij.com/mngi/rss/CustomRssServlet/234/200412.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e3"),
  "title": "Vcstar.com - sports",
  "groupname": "Vcstar.com",
  "updateurl": "http://www.vcstar.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e4"),
  "title": "Santacruzsentinel.com - local news",
  "groupname": "Santacruzsentinel.com",
  "updateurl": "http://feeds.santacruzsentinel.com/mngi/rss/CustomRssServlet/6/203501.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e5"),
  "title": "Santacruzsentinel.com - Business",
  "groupname": "Santacruzsentinel.com",
  "updateurl": "http://feeds.santacruzsentinel.com/mngi/rss/CustomRssServlet/6/200335.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e1c321d3be0004e9e6"),
  "title": "Santacruzsentinel.com - sports",
  "groupname": "Santacruzsentinel.com",
  "updateurl": "http://feeds.santacruzsentinel.com/mngi/rss/CustomRssServlet/6/200337.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9e7"),
  "title": "Siliconvalley.com - local",
  "groupname": "Siliconvalley.com",
  "updateurl": "http://extras.mnginteractive.com/live/xsl/memv/xml/573_most_viewed_rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9e8"),
  "title": "Ukiahdailyjournal.com - local news",
  "groupname": "Ukiahdailyjournal.com",
  "updateurl": "http://feeds.ukiahdailyjournal.com/mngi/rss/CustomRssServlet/91/200385.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9e9"),
  "title": "Thereporter.com - local news",
  "groupname": "Thereporter.com",
  "updateurl": "http://rss.thereporter.com/mngi/rss/CustomRssServlet/295/202219.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9ea"),
  "title": "Thereporter.com - sports",
  "groupname": "Thereporter.com",
  "updateurl": "http://rss.thereporter.com/mngi/rss/CustomRssServlet/295/200359.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9eb"),
  "title": "Thereporter.com - business",
  "groupname": "Thereporter.com",
  "updateurl": "http://rss.thereporter.com/mngi/rss/CustomRssServlet/295/200358.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9ec"),
  "title": "Timesheraldonline.com - local news",
  "groupname": "Timesheraldonline.com",
  "updateurl": "http://feeds.timesheraldonline.com/mngi/rss/CustomRssServlet/296/200437.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9ed"),
  "title": "Timesheraldonline.com - sports",
  "groupname": "Timesheraldonline.com",
  "updateurl": "http://feeds.timesheraldonline.com/mngi/rss/CustomRssServlet/296/200438.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9ee"),
  "title": "Timesheraldonline.com - entertainment",
  "groupname": "Timesheraldonline.com",
  "updateurl": "http://feeds.timesheraldonline.com/mngi/rss/CustomRssServlet/296/202305.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9ef"),
  "title": "Carolinalive.com - state news",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?feed=sc_state_news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f0"),
  "title": "Parkrecord.com - local news",
  "groupname": "Parkrecord.com",
  "updateurl": "http://extras.mnginteractive.com/live/xsl/memv/xml/122_most_viewed_rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f1"),
  "title": "Eveningsun.com - local news",
  "groupname": "Eveningsun.com",
  "updateurl": "http://feeds.eveningsun.com/mngi/rss/CustomRssServlet/140/200368.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f2"),
  "title": "Eveningsun.com - sports",
  "groupname": "Eveningsun.com",
  "updateurl": "http://feeds.eveningsun.com/mngi/rss/CustomRssServlet/140/208502.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f3"),
  "title": "Eveningsun.com - business",
  "groupname": "Eveningsun.com",
  "updateurl": "http://feeds.eveningsun.com/mngi/rss/CustomRssServlet/140/202228.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f4"),
  "title": "Eveningsun.com - arts",
  "groupname": "Eveningsun.com",
  "updateurl": "http://feeds.eveningsun.com/mngi/rss/CustomRssServlet/140/208504.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f5"),
  "title": "Yorkdispatch.com - local",
  "groupname": "Yorkdispatch.com",
  "updateurl": "http://extras.mnginteractive.com/live/xsl/memv/xml/138_most_viewed_rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f6"),
  "title": "Ldnews.com - sports",
  "groupname": "Ldnews.com",
  "updateurl": "http://feeds.ldnews.com/mngi/rss/CustomRssServlet/139/200453.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e2c321d3be0004e9f7"),
  "title": "Publicopiniononline.com  - local news",
  "groupname": "Publicopiniononline.com",
  "updateurl": "http://feeds.publicopiniononline.com/mngi/rss/CustomRssServlet/556/200341.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9f8"),
  "title": "Publicopiniononline.com  - sports",
  "groupname": "Publicopiniononline.com",
  "updateurl": "http://feeds.publicopiniononline.com/mngi/rss/CustomRssServlet/556/200342.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9f9"),
  "title": "Publicopiniononline.com  - living",
  "groupname": "Publicopiniononline.com",
  "updateurl": "http://feeds.publicopiniononline.com/mngi/rss/CustomRssServlet/556/202404.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9fa"),
  "title": "Dailymail.com - local news",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/News.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9fb"),
  "title": "Dailymail.com - sports",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/Sports.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9fc"),
  "title": "Dailymail.com - business",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/Business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9fd"),
  "title": "Dailymail.com - election",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/election12.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9fe"),
  "title": "Dailymail.com - food",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/foodandliving.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004e9ff"),
  "title": "Dailymail.com - state news",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/statenews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea00"),
  "title": "Dailymail.com - Technology",
  "groupname": "Dailymail.com",
  "updateurl": "http://dailymail.com/feeds/TechnologyNews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea01"),
  "title": "Kitsapsun.com - sports",
  "groupname": "Kitsapsun.com",
  "updateurl": "http://www.kitsapsun.com/rss/headlines/sports/top-stories/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea02"),
  "title": "Naplesnews.com - sports",
  "groupname": "Naplesnews.com",
  "updateurl": "http://www.naplesnews.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea03"),
  "title": "Caller.com - lifestyle",
  "groupname": "Caller.com",
  "updateurl": "http://www.caller.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea04"),
  "title": "Caller.com - business",
  "groupname": "Caller.com",
  "updateurl": "http://www.caller.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea05"),
  "title": "Naplesnews.com - lifestyle",
  "groupname": "Naplesnews.com",
  "updateurl": "http://www.naplesnews.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea06"),
  "title": "Kitsapsun.com - local news",
  "groupname": "Kitsapsun.com",
  "updateurl": "http://www.kitsapsun.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea07"),
  "title": "Naplesnews.com - local news",
  "groupname": "Naplesnews.com",
  "updateurl": "http://www.naplesnews.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e3c321d3be0004ea08"),
  "title": "Marconews.com - lifestyle",
  "groupname": "Marconews.com",
  "updateurl": "http://www.marconews.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea09"),
  "title": "Caller.com - entertainment",
  "groupname": "Caller.com",
  "updateurl": "http://www.caller.com/rss/headlines/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea0a"),
  "title": "Vcstar.com - business",
  "groupname": "Vcstar.com",
  "updateurl": "http://www.vcstar.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea0b"),
  "title": "Kitsapsun.com - entertainment",
  "groupname": "Kitsapsun.com",
  "updateurl": "http://www.kitsapsun.com/rss/headlines/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea0c"),
  "title": "Caller.com - sports",
  "groupname": "Caller.com",
  "updateurl": "http://www.caller.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea0d"),
  "title": "Marconews.com - local news",
  "groupname": "Marconews.com",
  "updateurl": "http://www.marconews.com/rss/headlines/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea0e"),
  "title": "Marconews.com - sports",
  "groupname": "Marconews.com",
  "updateurl": "http://www.marconews.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea0f"),
  "title": "Vcstar.com - entertainment",
  "groupname": "Vcstar.com",
  "updateurl": "http://www.vcstar.com/rss/headlines/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea10"),
  "title": "Vcstar.com - lifestyle",
  "groupname": "Vcstar.com",
  "updateurl": "http://www.vcstar.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea11"),
  "title": "Timesrecordnews.com - local news",
  "groupname": "Timesrecordnews.com",
  "updateurl": "http://www.timesrecordnews.com/rss/headlines/news/all-local/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea12"),
  "title": "Timesrecordnews.com - sports",
  "groupname": "Timesrecordnews.com",
  "updateurl": "http://www.timesrecordnews.com/rss/headlines/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea13"),
  "title": "Timesrecordnews.com - business",
  "groupname": "Timesrecordnews.com",
  "updateurl": "http://www.timesrecordnews.com/rss/headlines/business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea14"),
  "title": "Timesrecordnews.com - entertainment",
  "groupname": "Timesrecordnews.com",
  "updateurl": "http://www.timesrecordnews.com/rss/headlines/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea15"),
  "title": "Timesrecordnews.com - lifestyle",
  "groupname": "Timesrecordnews.com",
  "updateurl": "http://www.timesrecordnews.com/rss/headlines/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea16"),
  "title": "ABC15.com - local news",
  "groupname": "ABC15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=20000",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea17"),
  "title": "ABC15.com - state news",
  "groupname": "ABC15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=20001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea18"),
  "title": "ABC15.com - national  news",
  "groupname": "Abc15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=20002",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e4c321d3be0004ea19"),
  "title": "ABC15.com - celebs",
  "groupname": "ABC15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=20030",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea1a"),
  "title": "ABC15.com - lifestyle",
  "groupname": "ABC15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=10006",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea1b"),
  "title": "ABC15.com - sports",
  "groupname": "ABC15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=10004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea1c"),
  "title": "ABC15.com - money",
  "groupname": "ABC15.com",
  "updateurl": "http://www.abc15.com/feeds/rssFeed?siteId=10008&amp;obfType=RSS_FEED&amp;categoryId=10007",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea1d"),
  "title": "Times-georgian.com - local news",
  "groupname": "Times-georgian.com",
  "updateurl": "http://times-georgian.com/rss/home/news?content_type=article&amp;tags=TG_home_story+DS_home_story+VR_home_story+TJ_home_story+GB_home_story+BB_home_stor+PS_home_story&amp;page_name=home&amp;tag_inclusion=or&amp;instance=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea1e"),
  "title": "Times-georgian.com - sports",
  "groupname": "Times-georgian.com",
  "updateurl": "http://times-georgian.com/rss/home/sports?content_type=article&amp;tags=TG_home_sports+TG_sports&amp;page_name=home&amp;tag_inclusion=or&amp;instance=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea1f"),
  "title": "Firstcoastnews.com - Georgia news",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/georgia?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea20"),
  "title": "Wbir.com - local news",
  "groupname": "Wbir.com",
  "updateurl": "http://www.wbir.com/rss/news/2/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea21"),
  "title": "Wbir.com - national news",
  "groupname": "Wbir.com",
  "updateurl": "http://www.wbir.com/rss/national/16/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea22"),
  "title": "Wbir.com - regional news",
  "groupname": "Wbir.com",
  "updateurl": "http://www.wbir.com/rss/news/9/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea23"),
  "title": "Wbir.com - sports",
  "groupname": "Wbir.com",
  "updateurl": "http://www.wbir.com/rss/sports/5/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea24"),
  "title": "Wbir.com - health",
  "groupname": "Wbir.com",
  "updateurl": "http://www.wbir.com/rss/health/3/10.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea25"),
  "title": "Firstcoastnews.com - sport Golf",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/golf?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea26"),
  "title": "Medscape.com - health",
  "groupname": "Medscape.com",
  "updateurl": "http://www.medscape.com/cx/rssfeeds/2682.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea27"),
  "title": "Tucsoncitizen.com - sports",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/sports-news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea28"),
  "title": "Tucsoncitizen.com - Arizona news",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/arizona-news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e5c321d3be0004ea29"),
  "title": "Tucsoncitizen.com - Arizona news",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/usa-today-news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea2a"),
  "title": "Tucsoncitizen.com - artts and culture",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/non-wp/rss/?cat=Art+and+Culture",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea2b"),
  "title": "Tucsoncitizen.com - food",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/non-wp/rss/?cat=Food+and+Dining",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea2c"),
  "title": "Tucsoncitizen.com - business",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/non-wp/rss/?cat=Business+%26+Finance",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea2d"),
  "title": "Tucsoncitizen.com - science",
  "groupname": "Tucsoncitizen.com",
  "updateurl": "http://tucsoncitizen.com/non-wp/rss/?cat=Science+%26+Technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea2e"),
  "title": "Pressandguide.com - local news",
  "groupname": "Pressandguide.com",
  "updateurl": "http://www.pressandguide.com/?rss=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea2f"),
  "title": "Pressandguide.com - sports",
  "groupname": "Pressandguide.com",
  "updateurl": "http://www.pressandguide.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea30"),
  "title": "Pressandguide.com - life",
  "groupname": "Pressandguide.com",
  "updateurl": "http://www.pressandguide.com/?rss=life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea31"),
  "title": "Heritage.com - sports",
  "groupname": "Heritage.com",
  "updateurl": "http://www.heritage.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea32"),
  "title": "Heritage.com - life",
  "groupname": "Heritage.com",
  "updateurl": "http://www.heritage.com/?rss=life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea33"),
  "title": "Thenewsherald.com  - local news",
  "groupname": "Thenewsherald.com",
  "updateurl": "http://www.thenewsherald.com/?rss=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea34"),
  "title": "Thenewsherald.com  - sports",
  "groupname": "Thenewsherald.com",
  "updateurl": "http://thenewsherald.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea35"),
  "title": "Thenewsherald.com  - life",
  "groupname": "Thenewsherald.com",
  "updateurl": "http://thenewsherald.com/?rss=life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea36"),
  "title": "Thestreet.com - business",
  "groupname": "Thestreet.com",
  "updateurl": "http://feeds.thestreet.com/tsc/feeds/rss/latest-stories",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea37"),
  "title": "Midlandsconnect.com - entertainment",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?stories=196539&amp;path=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea38"),
  "title": "Thestreet.com - finance",
  "groupname": "Thestreet.com",
  "updateurl": "http://business-news.thestreet.com/news-herald/rss/627",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea39"),
  "title": "Theoaklandpress.com",
  "groupname": "Theoaklandpress.com",
  "updateurl": "http://www.theoaklandpress.com/?rss=news/local_news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e6c321d3be0004ea3a"),
  "title": "Theoaklandpress.com - sports",
  "groupname": "Theoaklandpress.com",
  "updateurl": "http://www.theoaklandpress.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea3b"),
  "title": "Theoaklandpress.com - business",
  "groupname": "Theoaklandpress.com",
  "updateurl": "http://business-news.thestreet.com/the-oakland-press/rss/109411",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea3c"),
  "title": "Theoaklandpress.com - entertainment",
  "groupname": "Theoaklandpress.com",
  "updateurl": "http://www.theoaklandpress.com/?rss=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea3d"),
  "title": "Theoaklandpress.com - life",
  "groupname": "Theoaklandpress.com",
  "updateurl": "http://www.theoaklandpress.com/?rss=life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea3e"),
  "title": "Macombdaily.com - local news",
  "groupname": "Macombdaily.com",
  "updateurl": "http://www.macombdaily.com/?rss=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea3f"),
  "title": "Macombdaily.com - politics",
  "groupname": "Macombdaily.com",
  "updateurl": "http://www.macombdaily.com/?rss=news/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea40"),
  "title": "Macombdaily.com - sports",
  "groupname": "Macombdaily.com",
  "updateurl": "http://www.macombdaily.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea41"),
  "title": "Macombdaily.com - business",
  "groupname": "Macombdaily.com",
  "updateurl": "http://business-news.thestreet.com/the-macomb-daily/rss/109413",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea42"),
  "title": "Macombdaily.com - finance",
  "groupname": "Macombdaily.com",
  "updateurl": "http://business-news.thestreet.com/the-macomb-daily/rss/627",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea43"),
  "title": "Macombdaily.com - entertainment",
  "groupname": "Macombdaily.com",
  "updateurl": "http://www.macombdaily.com/?rss=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea44"),
  "title": "Wqad.com - nation news",
  "groupname": "Wqad.com",
  "updateurl": "http://feeds2.feedburner.com/wqad-nationworld",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea45"),
  "title": "Wqad.com - local  news",
  "groupname": "Wqad.com",
  "updateurl": "http://feeds.feedburner.com/wqad-news-local-area?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea46"),
  "title": "Wcti12.com - local news",
  "groupname": "Wcti12.com",
  "updateurl": "http://www.wcti12.com/news/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea47"),
  "title": "Wcti12.com - national news",
  "groupname": "Wcti12.com",
  "updateurl": "http://www.wcti12.com/nationalnews/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea48"),
  "title": "Wcti12.com - entertainment",
  "groupname": "Wcti12.com",
  "updateurl": "http://www.wcti12.com/entertainment/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea49"),
  "title": "Wcti12.com - money",
  "groupname": "Wcti12.com",
  "updateurl": "http://www.wcti12.com/money/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea4a"),
  "title": "Wcti12.com - health",
  "groupname": "Wcti12.com",
  "updateurl": "http://www.wcti12.com/health/topstory.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea4b"),
  "title": "Gossiponthis.com - sports",
  "groupname": "Gossiponthis.com",
  "updateurl": "http://feeds.gossiponthis.com/got_sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e7c321d3be0004ea4c"),
  "title": "Gossiponthis.com - news",
  "groupname": "Gossiponthis.com",
  "updateurl": "http://feeds.gossiponthis.com/got_news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea4d"),
  "title": "Nbc4i.com - local news",
  "groupname": "Nbc4i.com",
  "updateurl": "http://www2.nbc4i.com/list/feed/rss/rss-local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea4e"),
  "title": "Nbc4i.com - state news",
  "groupname": "Nbc4i.com",
  "updateurl": "http://www2.nbc4i.com/list/feed/rss/rss-state-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea4f"),
  "title": "Nbc4i.com - national news",
  "groupname": "Nbc4i.com",
  "updateurl": "http://www2.nbc4i.com/list/feed/rss/rss-national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea50"),
  "title": "Nbc4i.com - business",
  "groupname": "Nbc4i.com",
  "updateurl": "http://www2.nbc4i.com/list/feed/rss/ap-business/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea51"),
  "title": "Nbc4i.com - politics",
  "groupname": "Nbc4i.com",
  "updateurl": "http://www2.nbc4i.com/list/feed/rss/politics-top-stories/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea52"),
  "title": "Nbc4i.com - health",
  "groupname": "Nbc4i.com",
  "updateurl": "http://www2.nbc4i.com/list/feed/rss/health-top-story/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea53"),
  "title": "Standard.net - sports",
  "groupname": "Standard.net",
  "updateurl": "http://feeds.feedburner.com/standard/sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea54"),
  "title": "Standard.net - business",
  "groupname": "Standard.net",
  "updateurl": "http://feeds.feedburner.com/standard/business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea55"),
  "title": "Standard.net - life",
  "groupname": "Standard.net",
  "updateurl": "http://feeds.feedburner.com/standard/frontpage?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea56"),
  "title": "Wytv.com - Ohio local news",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/2334.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea57"),
  "title": "Wytv.com - Pennsylvania local news",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/3106.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea58"),
  "title": "Wytv.com - national news",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/2336.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea59"),
  "title": "Wytv.com - world news",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/2337.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea5a"),
  "title": "Wytv.com - sports",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/1666.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea5b"),
  "title": "Wytv.com - entertainment",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/2341.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea5c"),
  "title": "Wytv.com - business",
  "groupname": "Wytv.com",
  "updateurl": "http://www.wytv.com/rss/2342.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e8c321d3be0004ea5d"),
  "title": "Publicbroadcasting.net - U. S. news",
  "groupname": "Publicbroadcasting.net",
  "updateurl": "http://www.publicbroadcasting.net/wxxi/news.newsmain?action=rssheadlines&amp;section=2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea5e"),
  "title": "Midlandsconnect.com - South Carolina",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?stories=195159&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea5f"),
  "title": "Publicbroadcasting.net - world news",
  "groupname": "Publicbroadcasting.net",
  "updateurl": "http://www.publicbroadcasting.net/wxxi/news.newsmain?action=rssheadlines&amp;section=3",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea60"),
  "title": "Wjbc.com - local news",
  "groupname": "Wjbc.com",
  "updateurl": "http://wjbc.com/category/local-news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea61"),
  "title": "Wjbc.com - state news",
  "groupname": "Wjbc.com",
  "updateurl": "http://wjbc.com/category/state-news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea62"),
  "title": "Wjbc.com - sports",
  "groupname": "Wjbc.com",
  "updateurl": "http://wjbc.com/category/local-sports/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea63"),
  "title": "Carolinalive.com - local news",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?feed=local_news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea64"),
  "title": "Fox5vegas.com - local news",
  "groupname": "Fox5vegas.com",
  "updateurl": "http://www.fox5vegas.com/category/210851/app-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea65"),
  "title": "Fox5vegas.com - money",
  "groupname": "Fox5vegas.com",
  "updateurl": "http://www.fox5vegas.com/category/210039/money?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea66"),
  "title": "Fox5vegas.com - national news",
  "groupname": "Fox5vegas.com",
  "updateurl": "http://www.fox5vegas.com/category/13530/national-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea67"),
  "title": "Fox5vegas.com - health",
  "groupname": "Fox5vegas.com",
  "updateurl": "http://www.fox5vegas.com/category/165073/health-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea68"),
  "title": "Fox5vegas.com - sports",
  "groupname": "Fox5vegas.com",
  "updateurl": "http://www.fox5vegas.com/category/208643/sports?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea69"),
  "title": "Bucyrustelegraphforum.com - local news",
  "groupname": "Bucyrustelegraphforum.com",
  "updateurl": "http://www.bucyrustelegraphforum.com/section/rss01&amp;mime=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea6a"),
  "title": "Bucyrustelegraphforum.com - sports",
  "groupname": "Bucyrustelegraphforum.com",
  "updateurl": "http://www.bucyrustelegraphforum.com/section/SPORTS&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea6b"),
  "title": "Outcomemag.com - world",
  "groupname": "Outcomemag.com",
  "updateurl": "http://outcomemag.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea6c"),
  "title": "Wggb.com - local news",
  "groupname": "Wggb.com",
  "updateurl": "http://www.wggb.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea6d"),
  "title": "Wsaz.com - sports",
  "groupname": "Wsaz.com",
  "updateurl": "http://www.wsaz.com/sports/headlines/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea6e"),
  "title": "Wsaz.com - Charelston news",
  "groupname": "Wsaz.com",
  "updateurl": "http://www.wsaz.com/charleston/headlines/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00e9c321d3be0004ea6f"),
  "title": "Wsaz.com - Huntington news",
  "groupname": "Wsaz.com",
  "updateurl": "http://www.wsaz.com/huntington/headlines/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea70"),
  "title": "Wsaz.com - Political news",
  "groupname": "Wsaz.com",
  "updateurl": "http://www.wsaz.com/political/headlines/index.rss2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea72"),
  "title": "Cbs19.tv - local news",
  "groupname": "Cbs19.tv",
  "updateurl": "http://www.cbs19.tv/Global/category.asp?C=137100&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea73"),
  "title": "Cbs19.tv - sports",
  "groupname": "Cbs19.tv",
  "updateurl": "http://www.cbs19.tv/Global/category.asp?C=137101&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea74"),
  "title": "Registercitizen.com - local",
  "groupname": "Registercitizen.com",
  "updateurl": "http://www.registercitizen.com/?rss=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea75"),
  "title": "Registercitizen.com - sports",
  "groupname": "Registercitizen.com",
  "updateurl": "http://www.registercitizen.com/?rss=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea76"),
  "title": "Registercitizen.com - business",
  "groupname": "Registercitizen.com",
  "updateurl": "http://business-news.thestreet.com/the-register-citizen/rss/109403",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea77"),
  "title": "Registercitizen.com - finance",
  "groupname": "Registercitizen.com",
  "updateurl": "http://business-news.thestreet.com/the-register-citizen/rss/627",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea78"),
  "title": "Registercitizen.com - green business",
  "groupname": "Registercitizen.com",
  "updateurl": "http://business-news.thestreet.com/the-register-citizen/rss/117435",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea79"),
  "title": "Record-eagle.com - sports",
  "groupname": "Record-eagle.com",
  "updateurl": "http://record-eagle.com/sports/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea7a"),
  "title": "Record-eagle.com - business",
  "groupname": "Record-eagle.com",
  "updateurl": "http://record-eagle.com/business/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea7b"),
  "title": "Record-eagle.com - life",
  "groupname": "Record-eagle.com",
  "updateurl": "http://record-eagle.com/features/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea7c"),
  "title": "Record-eagle.com - Micigan news",
  "groupname": "Record-eagle.com",
  "updateurl": "http://record-eagle.com/statenews/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea7d"),
  "title": "Record-eagle.com - local news",
  "groupname": "Record-eagle.com",
  "updateurl": "http://record-eagle.com/local/atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea7e"),
  "title": "Ktiv.com - Regional news",
  "groupname": "Ktiv.com",
  "updateurl": "http://www.ktiv.com/Global/category.asp?C=133028&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea7f"),
  "title": "Ktiv.com - sports",
  "groupname": "Ktiv.com",
  "updateurl": "http://www.ktiv.com/Global/category.asp?C=123698&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea80"),
  "title": "Ktiv.com - National news",
  "groupname": "Ktiv.com",
  "updateurl": "http://www.ktiv.com/Global/category.asp?C=13530&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea81"),
  "title": "Mccookgazette.com - sports",
  "groupname": "Mccookgazette.com",
  "updateurl": "http://www.mccookgazette.com/feed/rss/sports/week.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea82"),
  "title": "Mccookgazette.com - local news",
  "groupname": "Mccookgazette.com",
  "updateurl": "http://www.mccookgazette.com/feed/rss/news/week.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea83"),
  "title": "Rollcall.com - news",
  "groupname": "Rollcall.com",
  "updateurl": "http://www.rollcall.com/news/?zkDo=showRSS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea84"),
  "title": "Rollcall.com - politics",
  "groupname": "Rollcall.com",
  "updateurl": "http://www.rollcall.com/issues/politics/?zkDo=showRSS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea85"),
  "title": "Rollcall.com - Around the Hill",
  "groupname": "Rollcall.com",
  "updateurl": "http://www.rollcall.com/issues/ath/?zkDo=showRSS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea86"),
  "title": "Kearneyhub.com - local news",
  "groupname": "Kearneyhub.com",
  "updateurl": "http://feeds.feedburner.com/kearneyhub/local_news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea87"),
  "title": "Kearneyhub.com - sports",
  "groupname": "Kearneyhub.com",
  "updateurl": "http://feeds.feedburner.com/kearneyhub/local_sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea88"),
  "title": "Kearneyhub.com - entertainment",
  "groupname": "Kearneyhub.com",
  "updateurl": "http://feeds.feedburner.com/kearneyhub/local_entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea89"),
  "title": "PoliticalWire",
  "groupname": "PoliticalWire",
  "updateurl": "http://feeds.feedburner.com/PoliticalWire",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea8a"),
  "title": "Watchdog.org - news",
  "groupname": "Watchdog.org",
  "updateurl": "http://watchdog.org/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea8b"),
  "title": "Claimsjournal.com - local news",
  "groupname": "Claimsjournal.com",
  "updateurl": "http://www.claimsjournal.com/rss/news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea8c"),
  "title": "Hiphopwired.com - music",
  "groupname": "Hiphopwired.com",
  "updateurl": "http://hiphopwired.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea8d"),
  "title": "Midlandsconnect.com - world",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?stories=195155&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea8e"),
  "title": "Midlandsconnect.com - local news",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?feed=wach_news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea8f"),
  "title": "Midlandsconnect.com - health",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?feed=healthwach",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea90"),
  "title": "Midlandsconnect.com - business",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?stories=195145&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea91"),
  "title": "Midlandsconnect.com - election",
  "groupname": "Midlandsconnect.com",
  "updateurl": "http://www.midlandsconnect.com/rss.aspx?stories=195150&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ebc321d3be0004ea92"),
  "title": "Carolinalive.com - sports",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?feed=local_sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea93"),
  "title": "Carolinalive.com - national news",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=195103&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea94"),
  "title": "Carolinalive.com - financial news",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=327737&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea95"),
  "title": "Carolinalive.com - Political news",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=195105&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea96"),
  "title": "Carolinalive.com - election",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=195098&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea97"),
  "title": "Carolinalive.com - business",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=195093&amp;path=news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea98"),
  "title": "Carolinalive.com - Carolinas sports",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=195125&amp;path=sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea99"),
  "title": "Carolinalive.com - entertainment",
  "groupname": "Carolinalive.com",
  "updateurl": "http://www.carolinalive.com/rss.aspx?stories=196562&amp;path=entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea9a"),
  "title": "Counton2.com - politics",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/news-2-political-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea9b"),
  "title": "Counton2.com - local news",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea9c"),
  "title": "Counton2.com - state news",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/state-and-regional-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea9d"),
  "title": "Counton2.com - national news",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/national-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea9e"),
  "title": "Counton2.com - sports",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/sports/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004ea9f"),
  "title": "Counton2.com - entertainment",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/entertainment/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004eaa0"),
  "title": "Counton2.com - lifestyle",
  "groupname": "Counton2.com",
  "updateurl": "http://www2.counton2.com/list/feed/rss/lifestyles/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004eaa1"),
  "title": "Live5news.com - local news",
  "groupname": "Live5news.com",
  "updateurl": "http://www.live5news.com/Global/category.asp?C=159804&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004eaa2"),
  "title": "Live5news.com - sports",
  "groupname": "Live5news.com",
  "updateurl": "http://www.live5news.com/Global/category.asp?C=128853&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ecc321d3be0004eaa3"),
  "title": "Live5news.com - national news",
  "groupname": "Live5news.com",
  "updateurl": "http://www.live5news.com/Global/category.asp?C=13530&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaa4"),
  "title": "Live5news.com - international news",
  "groupname": "Live5news.com",
  "updateurl": "http://www.live5news.com/Global/category.asp?C=13533&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaa5"),
  "title": "Live5news.com - politics",
  "groupname": "Live5news.com",
  "updateurl": "http://www.live5news.com/Global/category.asp?C=159806&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaa6"),
  "title": "Inthesetimes.com - local news",
  "groupname": "Inthesetimes.com",
  "updateurl": "http://www.inthesetimes.com/ittlist/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaa7"),
  "title": "Themoderatevoice.com - politics",
  "groupname": "Themoderatevoice.com",
  "updateurl": "http://feeds.feedburner.com/themoderatevoice?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaa8"),
  "title": "Hotair.com - local news",
  "groupname": "Hotair.com",
  "updateurl": "http://feeds.feedburner.com/hotair/main",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaa9"),
  "title": "Sdcitybeat.com - San Diego news",
  "groupname": "Sdcitybeat.com",
  "updateurl": "http://www.sdcitybeat.com/sandiego/files/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaaa"),
  "title": "Newsjunkiepost.com - local news",
  "groupname": "Newsjunkiepost.com",
  "updateurl": "http://newsjunkiepost.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaab"),
  "title": "Fredericksburg.com - news",
  "groupname": "Fredericksburg.com",
  "updateurl": "http://fredericksburg.com/RSS/indexscript.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaac"),
  "title": "Poynter.org - local news",
  "groupname": "Poynter.org",
  "updateurl": "http://www.poynter.org/category/latest-news/mediawire/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaad"),
  "title": "Monstersandcritics.com - U.S. news",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/usa?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaae"),
  "title": "Monstersandcritics.com - U.K. news",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/uk?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eaaf"),
  "title": "Monstersandcritics.com - europe",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/europe?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eab0"),
  "title": "Monstersandcritics.com - Middleeast",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/middleeast?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eab1"),
  "title": "Monstersandcritics.com - Southasia newa",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/southasia?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eab2"),
  "title": "Monstersandcritics.com - Africa news",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/africa?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eab3"),
  "title": "Firstcoastnews.com - sports UNF",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/unfsports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eab4"),
  "title": "Monstersandcritics.com - Americas news",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/americas?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00edc321d3be0004eab5"),
  "title": "Monstersandcritics.com - business",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eab6"),
  "title": "Monstersandcritics.com - Consumer health",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/consumerhealth?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eab7"),
  "title": "Monstersandcritics.com - life",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/life?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eab8"),
  "title": "Monstersandcritics.com - Arts",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/arts",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eab9"),
  "title": "Monstersandcritics.com - celebrity",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/people",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eaba"),
  "title": "Monstersandcritics.com - sports",
  "groupname": "Monstersandcritics.com",
  "updateurl": "http://feeds.feedburner.com/monstersandcritics/sport",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eabb"),
  "title": "Algemeiner.com - politics",
  "groupname": "Algemeiner.com",
  "updateurl": "http://www.algemeiner.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eabc"),
  "title": "Fayobserver.com - local news",
  "groupname": "Fayobserver.com",
  "updateurl": "http://fayobserver.com/rss/local",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eabd"),
  "title": "Fayobserver.com - business",
  "groupname": "Fayobserver.com",
  "updateurl": "http://fayobserver.com/rss/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eabe"),
  "title": "Fayobserver.com  - life news",
  "groupname": "Fayobserver.com",
  "updateurl": "http://fayobserver.com/rss/life",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eabf"),
  "title": "Fayobserver.com  - sports",
  "groupname": "Fayobserver.com",
  "updateurl": "http://fayobserver.com/rss/sports",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac0"),
  "title": "Fayobserver.com  - ACC sports",
  "groupname": "Fayobserver.com",
  "updateurl": "http://fayobserver.com/rss/acc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac1"),
  "title": "Thesop.org - business",
  "groupname": "Thesop.org",
  "updateurl": "http://thesop.org/rss/category-business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac2"),
  "title": "Thesop.org - family",
  "groupname": "Thesop.org",
  "updateurl": "http://thesop.org/rss/category-family.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac3"),
  "title": "Thesop.org - entertainment",
  "groupname": "Thesop.org",
  "updateurl": "http://thesop.org/rss/category-entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac4"),
  "title": "Thesop.org - U.S.",
  "groupname": "Thesop.org",
  "updateurl": "http://thesop.org/rss/category-usa.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac5"),
  "title": "Streetinsider.com - local news",
  "groupname": "Streetinsider.com",
  "updateurl": "http://www.streetinsider.com/freefeed.php",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eec321d3be0004eac6"),
  "title": "Newshounds.us - local news",
  "groupname": "Newshounds.us",
  "updateurl": "http://www.newshounds.us/home.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eac7"),
  "title": "Wave3.com - sports",
  "groupname": "Wawe3.com",
  "updateurl": "http://www.wave3.com/category/1181/sports?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eac8"),
  "title": "Bayoubuzz.com - entertainment",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/section/12-entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eac9"),
  "title": "Bayoubuzz.com - Middle east",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/83-middle-east",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eaca"),
  "title": "Bayoubuzz.com - Asia njews",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/88-asia",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eacb"),
  "title": "Bayoubuzz.com - Latin america news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/82-latin-america",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eacc"),
  "title": "Bayoubuzz.com - technology news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/section/14-technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eacd"),
  "title": "Bayoubuzz.com - Luisiana news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://feeds.feedburner.com/bayoubuzz/gUqa?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eace"),
  "title": "Bayoubuzz.com - Luisiana business",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/163-louisiana-business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004eacf"),
  "title": "Bayoubuzz.com - New Orleans news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/151-new-orleans",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead0"),
  "title": "Bayoubuzz.com - Baton Rouge news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/171-baton-rouge-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead1"),
  "title": "Bayoubuzz.com - Shreveport news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/172-shreveport-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead2"),
  "title": "Bayoubuzz.com - Luisiana Goverment news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/173-louisiana-government-news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead3"),
  "title": "Bayoubuzz.com - U.S. Politics",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/183-us-politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead4"),
  "title": "Bayoubuzz.com - Barack Obama",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://www.bayoubuzz.com/bayoubuzz-rss-feeds/xml/RSS2.0/category/67-barack-obama",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead5"),
  "title": "Bayoubuzz.com - Louisiana Sports news",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://feeds.feedburner.com/LouisianaSportsNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead6"),
  "title": "Bayoubuzz.com - New Orleans saints",
  "groupname": "Bayoubuzz.com",
  "updateurl": "http://feeds.feedburner.com/bayoubuzz/ggZX?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00efc321d3be0004ead7"),
  "title": "Rrstar.com - local",
  "groupname": "Rrstar.com",
  "updateurl": "http://www.rrstar.com/blogs/applesauce/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004ead8"),
  "title": "Newsbusters.org - local",
  "groupname": "Newsbusters.org",
  "updateurl": "http://newsbusters.org/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004ead9"),
  "title": "Huliq.com - local",
  "groupname": "Huliq.com",
  "updateurl": "http://www.huliq.com/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eada"),
  "title": "Themoralliberal.com - books",
  "groupname": "Themoralliberal.com",
  "updateurl": "http://feeds.feedburner.com/americandailyherald/zzJV?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eadb"),
  "title": "Gopusa.com - politics",
  "groupname": "Gopusa.com",
  "updateurl": "http://www.gopusa.com/freshink/feed/atom/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eadc"),
  "title": "Gopusa.com - news",
  "groupname": "Gopusa.com",
  "updateurl": "http://www.gopusa.com/news/feed/atom/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eadd"),
  "title": "Wltz.com - local news",
  "groupname": "Wltz.com",
  "updateurl": "http://www.wltz.com/Global/category.asp?C=201225&amp;clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eade"),
  "title": "Montgomeryadvertiser.com - loal news",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/NEWS01&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eadf"),
  "title": "Montgomeryadvertiser.com - sports",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/SPORTS&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae0"),
  "title": "Montgomeryadvertiser.com - State news",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/NEWS02&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae1"),
  "title": "Montgomeryadvertiser.com - business",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/BUSINESS&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae2"),
  "title": "Montgomeryadvertiser.com - life",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/LIFESTYLE&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae3"),
  "title": "Montgomeryadvertiser.com - aubrum sports",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/SPORTS0402&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae4"),
  "title": "Montgomeryadvertiser.com -  Alabama state sports",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/SPORTS0403&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae5"),
  "title": "Montgomeryadvertiser.com - Prep sports",
  "groupname": "Montgomeryadvertiser.com",
  "updateurl": "http://www.montgomeryadvertiser.com/section/SPORTS03&amp;template=rss_gd",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae6"),
  "title": "TheDay.com - entertainment",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss05",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae7"),
  "title": "TheDay.com - state news",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss03",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f0c321d3be0004eae8"),
  "title": "TheDay.com - business",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss04",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eae9"),
  "title": "TheDay.com - local sports",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss07",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaea"),
  "title": "Myfox8.com - local news",
  "groupname": "Myfox8.com",
  "updateurl": "http://myfox8.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaeb"),
  "title": "TheDay.com - professional sport",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss08",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaec"),
  "title": "TheDay.com - UConn sports",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss11",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaed"),
  "title": "TheDay.com - Pharmaceuticals business",
  "groupname": "TheDay.com",
  "updateurl": "http://www.theday.com/section/rss13",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaee"),
  "title": "Nwfdailynews.com - Florida sports",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://www.nwfdailynews.com/common/rss/rss.php?cat=Sports&amp;subcat=News",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaef"),
  "title": "Nwfdailynews.com - National news",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/USHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf0"),
  "title": "Nwfdailynews.com - World news",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/WORLDHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf1"),
  "title": "Nwfdailynews.com - political news",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/POLITICSHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf2"),
  "title": "Nwfdailynews.com - Washington news",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/WASHINGTONHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf3"),
  "title": "Nwfdailynews.com - Business",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/BUSINESSHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf4"),
  "title": "Nwfdailynews.com - technology",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/TECHHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf5"),
  "title": "Nwfdailynews.com - sports",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/SPORTSHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf6"),
  "title": "Nwfdailynews.com - entertainment",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/ENTERTAINMENT-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf7"),
  "title": "Nwfdailynews.com - Health",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/HEALTHHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf8"),
  "title": "Nwfdailynews.com - Science",
  "groupname": "Nwfdailynews.com",
  "updateurl": "http://hosted.ap.org/lineups/SCIENCEHEADS-rss_2.0.xml?SITE=FLFNW&amp;SECTION=HOME",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f1c321d3be0004eaf9"),
  "title": "Wave3.com - Metro Louisville news",
  "groupname": "Wawe3.com",
  "updateurl": "http://www.wave3.com/category/60531/metro-louisville-news?clienttype=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eafa"),
  "title": "Firstcoastnews.com - local news",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/local?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eafb"),
  "title": "Firstcoastnews.com - entertainment",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/entertainment?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eafc"),
  "title": "Firstcoastnews.com - health",
  "groupname": "Firstcoastnews.com",
  "updateurl": "http://feeds.feedburner.com/firstcoastnews/health?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eafd"),
  "title": "Wall Street Journal - money",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7104.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eafe"),
  "title": "Wall Street Journal - arts&amp;entertainment",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7177.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eaff"),
  "title": "Wall Street Journal - travel",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7106.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb00"),
  "title": "Wall Street Journal - sports",
  "groupname": "Wall Street Journal",
  "updateurl": "http://online.wsj.com/xml/rss/3_7204.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb01"),
  "title": "Fox-news - national",
  "groupname": "Fox-news",
  "updateurl": "http://feeds.foxnews.com/foxnews/national?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb02"),
  "title": "Fox-news - scitech",
  "groupname": "Fox-news",
  "updateurl": "http://feeds.foxnews.com/foxnews/scitech",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb03"),
  "title": "Fox-news - travel",
  "groupname": "Fox-news",
  "updateurl": "http://feeds.foxnews.com/foxnews/internal/travel/mixed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb04"),
  "title": "Fox-news - sports",
  "groupname": "Fox-news",
  "updateurl": "http://feeds.foxnews.com/foxnews/sports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb05"),
  "title": "suntime - world",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/news/world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb06"),
  "title": "Fox-news - world",
  "groupname": "Fox-news",
  "updateurl": "http://feeds.foxnews.com/foxnews/world?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb07"),
  "title": "suntime - politics",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/news/politics",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb08"),
  "title": "suntime - national",
  "groupname": "suntimes",
  "updateurl": "http://www.suntimes.com/rss/index.html?path=/suntimes/news/nation",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb09"),
  "title": "time.com - national news",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/time/nation?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb0a"),
  "title": "time.com - world news",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/time/world?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f2c321d3be0004eb0b"),
  "title": "time.com - swampland",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/timeblogs/swampland?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb0c"),
  "title": "time.com - business",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/time/business?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb0d"),
  "title": "time.com - money",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/time/moneyland?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb0e"),
  "title": "time.com - tech",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/timeblogs/nerd_world?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb0f"),
  "title": "time.com - health",
  "groupname": "time.com",
  "updateurl": "http://feeds.feedburner.com/time/healthland?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb10"),
  "title": "Telegraph - finance",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/finance/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb11"),
  "title": "Telegraph - Politics",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/news/politics/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb12"),
  "title": "Telegraph - U.K.",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/news/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb13"),
  "title": "Telegraph - travel",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/travel/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb14"),
  "title": "Telegraph - technology",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/technology/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb15"),
  "title": "Telegraph - sports",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/sport/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb16"),
  "title": "Telegraph - food",
  "groupname": "Telegraph",
  "updateurl": "http://www.telegraph.co.uk/foodanddrink/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb17"),
  "title": "Borneopost - nation news",
  "groupname": "Borneopost",
  "updateurl": "http://www.theborneopost.com/news/nation/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb18"),
  "title": "This is Bath - sports",
  "groupname": "This is Bath",
  "updateurl": "http://www.thisisbath.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb19"),
  "title": "This is Bath - business",
  "groupname": "This is Bath",
  "updateurl": "http://www.thisisbath.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb1a"),
  "title": "This is Bath - entertainment",
  "groupname": "This is Bath",
  "updateurl": "http://www.thisisbath.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb1b"),
  "title": "This is Bath - health",
  "groupname": "This is Bath",
  "updateurl": "http://www.thisisbath.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb1c"),
  "title": "FoxsportAustralia - Tenis",
  "groupname": "FoxsportAustralia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/fs_tennis_21.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f3c321d3be0004eb1d"),
  "title": "Dailyrecord - wotld",
  "groupname": "Dailyrecord",
  "updateurl": "http://www.dailyrecord.co.uk/news/uk-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb1e"),
  "title": "The Sun - politics",
  "groupname": "The Sun",
  "updateurl": "http://www.thesun.co.uk/sol/homepage/news/politics/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb1f"),
  "title": "Plymouth - health",
  "groupname": "Plymouth",
  "updateurl": "http://www.thisisplymouth.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb20"),
  "title": "Plymouth - business",
  "groupname": "Plymouth",
  "updateurl": "http://www.thisisplymouth.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb21"),
  "title": "Plymouth -  entertainment",
  "groupname": "Plymouth",
  "updateurl": "http://www.thisisplymouth.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb22"),
  "title": "Dailystar - celebnews",
  "groupname": "Dailystar",
  "updateurl": "http://uk.dailystar.feedsportal.com/c/33335/f/565839/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb23"),
  "title": "Plymouth -  politics",
  "groupname": "Plymouth",
  "updateurl": "http://www.thisisplymouth.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb24"),
  "title": "Plymouth -  sport",
  "groupname": "Plymouth",
  "updateurl": "http://www.thisisplymouth.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb25"),
  "title": "Thetelegraph and Argus - business",
  "groupname": "Thetelegraph and Argus",
  "updateurl": "http://www.thetelegraphandargus.co.uk/business/business_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb26"),
  "title": "Northumberland Gazette - news",
  "groupname": "Northumberland Gazette",
  "updateurl": "http://www.northumberlandgazette.co.uk/cmlink/1.1334889",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb27"),
  "title": "Independent -  U.K.",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3496/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb28"),
  "title": "Independent - world",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3503/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb29"),
  "title": "Thetelegraph and Argus - local news",
  "groupname": "Thetelegraphandargus",
  "updateurl": "http://www.thetelegraphandargus.co.uk/news/local/localbrad/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb2a"),
  "title": "Independent -  business",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3510/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb2b"),
  "title": "Independent -  science",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3523/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb2c"),
  "title": "Independent -  sports",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3784/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb2d"),
  "title": "The Northern Echo - business",
  "groupname": "The Northern Echo",
  "updateurl": "http://www.thenorthernecho.co.uk/business/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb2e"),
  "title": "Independent -  lifestyle",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3802/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f4c321d3be0004eb2f"),
  "title": "Independent -  arts &amp; entertainment",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3828/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb30"),
  "title": "Birminghampost - u.k. news",
  "groupname": "Birminghampost",
  "updateurl": "http://www.birminghampost.net/news/uk-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb31"),
  "title": "Independent -  travel",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3851/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb32"),
  "title": "Сhichester - showbiz",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.337691",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb33"),
  "title": "Independent -  money",
  "groupname": "Independent",
  "updateurl": "http://rss.feedsportal.com/c/266/f/3863/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb34"),
  "title": "Leicestershire - entertainment",
  "groupname": "Leicestershire",
  "updateurl": "http://www.thisisleicestershire.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb35"),
  "title": "Coventrytelegraph - business",
  "groupname": "Coventrytelegraph",
  "updateurl": "http://www.coventrytelegraph.net/news/business-news/uk-coventry-business-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb36"),
  "title": "Birminghammail - national news",
  "groupname": "Birminghammail",
  "updateurl": "http://www.birminghammail.net/news/national-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb37"),
  "title": "Dailymail - money",
  "groupname": "Dailymail",
  "updateurl": "http://www.dailymail.co.uk/money/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb38"),
  "title": "Dailymail - travel",
  "groupname": "Dailymail",
  "updateurl": "http://www.dailymail.co.uk/travel/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb39"),
  "title": "Dailyrecord -  rugby",
  "groupname": "Dailyrecord",
  "updateurl": "http://www.dailyrecord.co.uk/sport/rugby-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb3a"),
  "title": "Dailyrecord - health",
  "groupname": "Dailyrecord",
  "updateurl": "http://www.dailyrecord.co.uk/news/health-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb3b"),
  "title": "Leicestershire - politics",
  "groupname": "Leicestershire",
  "updateurl": "http://www.thisisleicestershire.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb3c"),
  "title": "Dailyrecord - business",
  "groupname": "Dailyrecord",
  "updateurl": "http://www.dailyrecord.co.uk/news/business-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb3d"),
  "title": "Scotsman - U.K.",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957042",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb3e"),
  "title": "Scotsman - international",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957043",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb3f"),
  "title": "Scotsman - politics",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957044",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f5c321d3be0004eb40"),
  "title": "Scotsman - footbal",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957060",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb41"),
  "title": "Scotsman - rugby",
  "groupname": "",
  "updateurl": "http://www.scotsman.com/cmlink/1.957071",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb42"),
  "title": "Scotsman - golf",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957075",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb43"),
  "title": "Scotsman - tenis",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957076",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb44"),
  "title": "Scotsman - boxing",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957079",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb45"),
  "title": "Scotsman - economics",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957092",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb46"),
  "title": "Scotsman - travel",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957114",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb47"),
  "title": "Nottingham - local news",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb48"),
  "title": "Scotsman - technology",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.2027059",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb49"),
  "title": "Scotsman - health",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957124",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb4a"),
  "title": "Scotsman - fashion",
  "groupname": "Scotsman",
  "updateurl": "http://www.scotsman.com/cmlink/1.957122",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb4b"),
  "title": "This is London - London news",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/news/london/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb4c"),
  "title": "This is London - politics",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/news/politics/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb4d"),
  "title": "Dailymail - sport",
  "groupname": "Dailymail",
  "updateurl": "http://www.dailymail.co.uk/sport/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb4e"),
  "title": "This is London - footbal",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/sport/football/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb4f"),
  "title": "This is London - business",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/business/business-news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb50"),
  "title": "This is London - money",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/business/money/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f6c321d3be0004eb51"),
  "title": "This is London - London life",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/lifestyle/london-life/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb52"),
  "title": "This is London - fashion",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/lifestyle/fashion/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb53"),
  "title": "This is London - travel",
  "groupname": "This is London",
  "updateurl": "http://www.thisislondon.co.uk/lifestyle/travel/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb54"),
  "title": "Coventrytelegraph - sports",
  "groupname": "Coventrytelegraph",
  "updateurl": "http://www.coventrytelegraph.net/coventry-warwickshire-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb55"),
  "title": "Yorkshireeveningpost - businees",
  "groupname": "Yorkshireeveningpost",
  "updateurl": "http://www.yorkshireeveningpost.co.uk/cmlink/1.3079162",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb56"),
  "title": "Sportcouk - news",
  "groupname": "Sportcouk",
  "updateurl": "http://feeds.feedburner.com/SportcoukNewsRssFeed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb57"),
  "title": "Leicestershire - sport",
  "groupname": "Leicestershire",
  "updateurl": "http://www.thisisleicestershire.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb58"),
  "title": "Borneopost - business",
  "groupname": "Borneopost",
  "updateurl": "http://www.theborneopost.com/news/business/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb59"),
  "title": "Dailyrecord - scottish news",
  "groupname": "Dailyrecord",
  "updateurl": "http://www.dailyrecord.co.uk/news/scottish-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb5a"),
  "title": "Dailyrecord - politics",
  "groupname": "Dailyrecord",
  "updateurl": "http://www.dailyrecord.co.uk/news/politics-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb5b"),
  "title": "Lancashiretelegraph - sports",
  "groupname": "Lancashiretelegraph",
  "updateurl": "http://www.lancashiretelegraph.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb5c"),
  "title": "The Sun - footbal",
  "groupname": "The Sun",
  "updateurl": "http://www.thesun.co.uk/sol/homepage/sport/football/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb5d"),
  "title": "Borneopost - local news",
  "groupname": "Borneopost",
  "updateurl": "http://www.theborneopost.com/news/news/local/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb5e"),
  "title": "The Sun - tenis",
  "groupname": "The Sun",
  "updateurl": "http://www.thesun.co.uk/sol/homepage/sport/tennis/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb5f"),
  "title": "Channel4 - u.k.",
  "groupname": "Channel4",
  "updateurl": "http://www.channel4.com/news/uk/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb60"),
  "title": "Channel4 - world",
  "groupname": "Channel4",
  "updateurl": "http://www.channel4.com/news/world-news/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb61"),
  "title": "Channel4 - politics",
  "groupname": "Channel4",
  "updateurl": "http://www.channel4.com/news/politics/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb62"),
  "title": "Channel4 - business",
  "groupname": "Channel4",
  "updateurl": "http://www.channel4.com/news/business/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f7c321d3be0004eb63"),
  "title": "Channel4 - sci-tech",
  "groupname": "Channel4",
  "updateurl": "http://www.channel4.com/news/sci-tech/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb64"),
  "title": "Dailystar - news",
  "groupname": "Dailystar",
  "updateurl": "http://uk.dailystar.feedsportal.com/c/33335/f/565814/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb65"),
  "title": "Pressandjournal - news",
  "groupname": "Pressandjournal",
  "updateurl": "http://www.pressandjournal.co.uk/RSS.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb68"),
  "title": "Stv - Glasgow",
  "groupname": "Stv",
  "updateurl": "http://news.stv.tv/scotland/west-central/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb69"),
  "title": "Stv - Highlands &amp; Islands",
  "groupname": "Stv",
  "updateurl": "http://news.stv.tv/scotland/highlands-islands/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb6c"),
  "title": "Stv - eneterttainment",
  "groupname": "Stv",
  "updateurl": "http://entertainment.stv.tv/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb6d"),
  "title": "Dailymail - u.k. news",
  "groupname": "Dailymail",
  "updateurl": "http://www.dailymail.co.uk/news/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb6e"),
  "title": "Sky - world",
  "groupname": "Sky",
  "updateurl": "http://news.sky.com/sky-news/rss/world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb6f"),
  "title": "Sky - politics",
  "groupname": "Sky",
  "updateurl": "http://news.sky.com/sky-news/rss/politics/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb70"),
  "title": "Cambridge-news - local news",
  "groupname": "Cambridge-news",
  "updateurl": "http://www.cambridge-news.co.uk/Home/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb71"),
  "title": "Coventrytelegraph - lifestyle",
  "groupname": "Coventrytelegraph",
  "updateurl": "http://www.coventrytelegraph.net/lifestyle-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb72"),
  "title": "Dailypost - business",
  "groupname": "Dailypost",
  "updateurl": "http://www.dailypost.co.uk/business-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb73"),
  "title": "Peterboroughtoday - lifestyle",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.2650129",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb74"),
  "title": "Dailypost - world",
  "groupname": "Dailypost",
  "updateurl": "http://www.dailypost.co.uk/news/uk-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb75"),
  "title": "Dailypost - north-wales-news",
  "groupname": "Dailypost",
  "updateurl": "http://www.dailypost.co.uk/news/north-wales-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb76"),
  "title": "Dailypost - footbal",
  "groupname": "Dailypost",
  "updateurl": "http://www.dailypost.co.uk/sport-news/football-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb77"),
  "title": "Dailypost - sports",
  "groupname": "Dailypost",
  "updateurl": "http://www.dailypost.co.uk/sport-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb78"),
  "title": "Chesterchronicle - local news",
  "groupname": "Chesterchronicle",
  "updateurl": "http://www.chesterchronicle.co.uk/chester-news/local-chester-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb79"),
  "title": "Shropshirestar - u.k.",
  "groupname": "Shropshirestar",
  "updateurl": "http://www.shropshirestar.com/uk/uk-news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb7a"),
  "title": "The Northern Echo - sports",
  "groupname": "The Northern Echo",
  "updateurl": "http://www.thenorthernecho.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb7b"),
  "title": "Chesterchronicle - liverpool fc",
  "groupname": "Chesterchronicle",
  "updateurl": "http://www.chesterchronicle.co.uk/chester-sport/liverpool-fc-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb7c"),
  "title": "Chesterchronicle - Everton fc",
  "groupname": "Chesterchronicle",
  "updateurl": "http://www.chesterchronicle.co.uk/chester-sport/everton-fc-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb7d"),
  "title": "Chesterchronicle - entertainment news",
  "groupname": "Chesterchronicle",
  "updateurl": "http://www.chesterchronicle.co.uk/entertainment-chester/news-reviews/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb7e"),
  "title": "Bucksherald - sport",
  "groupname": "Bucksherald",
  "updateurl": "http://www.bucksherald.co.uk/cmlink/1.336102",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb7f"),
  "title": "Shropshirestar - local news",
  "groupname": "Shropshirestar",
  "updateurl": "http://www.shropshirestar.com/news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb80"),
  "title": "Express - U.K.",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565859/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb81"),
  "title": "Dailymail - health",
  "groupname": "Dailymail",
  "updateurl": "http://www.dailymail.co.uk/health/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb82"),
  "title": "Express - world",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565860/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb83"),
  "title": "Express - sport",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565863/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb84"),
  "title": "Express - money",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565875/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb85"),
  "title": "Express - health",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565883/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb86"),
  "title": "Newsandstar - sport",
  "groupname": "Newsandstar",
  "updateurl": "http://www.newsandstar.co.uk/se/news-star-sport-latest-1.49999",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f9c321d3be0004eb87"),
  "title": "Express - entertainment",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565889/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb88"),
  "title": "Express - fashion",
  "groupname": "Express",
  "updateurl": "http://uk.express.feedsportal.com/c/33338/f/565884/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb89"),
  "title": "Southwales - entertainment",
  "groupname": "Southwales",
  "updateurl": "http://www.thisissouthwales.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb8a"),
  "title": "Southwales - sports",
  "groupname": "Southwales",
  "updateurl": "http://www.thisissouthwales.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb8b"),
  "title": "Southwales - Politics",
  "groupname": "Southwales",
  "updateurl": "http://www.thisissouthwales.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb8c"),
  "title": "Peterboroughtoday - east midlands",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.320371",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb8d"),
  "title": "Southwales - lifestyle",
  "groupname": "Southwales",
  "updateurl": "http://www.thisissouthwales.co.uk/lifestyle.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb8e"),
  "title": "Southwales - business",
  "groupname": "Southwales",
  "updateurl": "http://www.thisissouthwales.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb8f"),
  "title": "Southwales - local news",
  "groupname": "Southwales",
  "updateurl": "http://www.thisissouthwales.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb90"),
  "title": "Thetelegraph and Argus - sport",
  "groupname": "Thetelegraph and Argus",
  "updateurl": "http://www.thetelegraphandargus.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb91"),
  "title": "Newsandstar - news",
  "groupname": "Newsandstar",
  "updateurl": "http://www.newsandstar.co.uk/se/news-round-up-1.50001",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb92"),
  "title": "Gloucestershire - politics",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb93"),
  "title": "Gloucestershire - sports",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb94"),
  "title": "Gloucestershire - lifestyle",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/lifestyle.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb95"),
  "title": "Gloucestershire - entertainment",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb96"),
  "title": "Gloucestershire - business",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb97"),
  "title": "Gloucestershire - South West Business",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/southwestbusiness.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb98"),
  "title": "Gloucestershire - local news",
  "groupname": "Gloucestershire",
  "updateurl": "http://www.thisisgloucestershire.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fac321d3be0004eb99"),
  "title": "Liverpooldailypost - business",
  "groupname": "Liverpooldailypost",
  "updateurl": "http://www.liverpooldailypost.co.uk/ldpbusiness/business-local/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eb9a"),
  "title": "Liverpooldailypost - Liverpool news",
  "groupname": "Liverpooldailypost",
  "updateurl": "http://www.liverpooldailypost.co.uk/liverpool-news/regional-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eb9b"),
  "title": "Liverpooldailypost - uk-world",
  "groupname": "Liverpooldailypost",
  "updateurl": "http://www.liverpooldailypost.co.uk/liverpool-news/uk-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eb9c"),
  "title": "Liverpooldailypost - sports",
  "groupname": "Liverpooldailypost",
  "updateurl": "http://www.liverpooldailypost.co.uk/sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eb9d"),
  "title": "Peterboroughtoday - Politics",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.2650096",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eb9e"),
  "title": "Peterboroughtoday - local news",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.2650095",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eb9f"),
  "title": "Belfast Newsletter - health",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1571552",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba0"),
  "title": "Peterboroughtoday - business",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.320373",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba1"),
  "title": "Peterboroughtoday - health news",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.2921941",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba2"),
  "title": "The Northern Echo - news",
  "groupname": "The Northern Echo",
  "updateurl": "http://www.thenorthernecho.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba3"),
  "title": "Peterboroughtoday - sport",
  "groupname": "Peterboroughtoday",
  "updateurl": "http://www.peterboroughtoday.co.uk/cmlink/1.320392",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba4"),
  "title": "Sabotagetimes - music",
  "groupname": "Sabotagetimes",
  "updateurl": "http://www.sabotagetimes.com/category/music/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba5"),
  "title": "Borneopost - world news",
  "groupname": "Borneopost",
  "updateurl": "http://www.theborneopost.com/news/world/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba6"),
  "title": "Shropshirestar - entertainment",
  "groupname": "Shropshirestar",
  "updateurl": "http://www.shropshirestar.com/entertainment/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba7"),
  "title": "Bucksherald - entertainment",
  "groupname": "Bucksherald",
  "updateurl": "http://www.bucksherald.co.uk/cmlink/1.1372262",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba8"),
  "title": "Shropshirestar - money",
  "groupname": "Shropshirestar",
  "updateurl": "http://www.shropshirestar.com/money/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004eba9"),
  "title": "Birminghampost - sports",
  "groupname": "Birminghampost",
  "updateurl": "http://www.birminghampost.net/midlands-birmingham-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fbc321d3be0004ebaa"),
  "title": "Shropshirestar - fashion",
  "groupname": "Shropshirestar",
  "updateurl": "http://www.shropshirestar.com/lifestyle/fashion/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebab"),
  "title": "Staffordshire - business",
  "groupname": "Staffordshire",
  "updateurl": "http://www.thisisstaffordshire.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebac"),
  "title": "Staffordshire - entertainment",
  "groupname": "Staffordshire",
  "updateurl": "http://www.thisisstaffordshire.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebad"),
  "title": "Staffordshire - politics",
  "groupname": "Staffordshire",
  "updateurl": "http://www.thisisstaffordshire.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebae"),
  "title": "Staffordshire - sports",
  "groupname": "Staffordshire",
  "updateurl": "http://www.thisisstaffordshire.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebaf"),
  "title": "Staffordshire",
  "groupname": "Staffordshire",
  "updateurl": "http://www.thisisstaffordshire.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb0"),
  "title": "Staffordshire - local news",
  "groupname": "Staffordshire",
  "updateurl": "http://www.thisisstaffordshire.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb1"),
  "title": "Sunderlandecho - national",
  "groupname": "Sunderlandecho",
  "updateurl": "http://www.sunderlandecho.com/cmlink/1.981445",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb2"),
  "title": "Sunderlandecho - business",
  "groupname": "Sunderlandecho",
  "updateurl": "http://www.sunderlandecho.com/cmlink/1.2043769",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb3"),
  "title": "Thetelegraph and Argus - business",
  "groupname": "Thetelegraph and Argus",
  "updateurl": "http://www.thetelegraphandargus.co.uk/uk_national_entertainment/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb4"),
  "title": "Sunderlandecho - local news",
  "groupname": "Sunderlandecho",
  "updateurl": "http://www.sunderlandecho.com/cmlink/1.2043768",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb5"),
  "title": "Sunderlandecho - politics",
  "groupname": "Sunderlandecho",
  "updateurl": "http://www.sunderlandecho.com/cmlink/1.3310504",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb6"),
  "title": "Sunderlandecho - footbal",
  "groupname": "Sunderlandecho",
  "updateurl": "http://www.sunderlandecho.com/cmlink/1.2043780",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb7"),
  "title": "Hull and Eastriding - health",
  "groupname": "Hull and Eastriding",
  "updateurl": "http://www.thisishullandeastriding.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb8"),
  "title": "Hull and Eastriding - lifestyle",
  "groupname": "Hull and Eastriding",
  "updateurl": "http://www.thisishullandeastriding.co.uk/lifestyle.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fcc321d3be0004ebb9"),
  "title": "Hull and Eastriding - local news",
  "groupname": "Hull and Eastriding",
  "updateurl": "http://www.thisishullandeastriding.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebba"),
  "title": "Hull and Eastriding - health",
  "groupname": "Hull and Eastriding",
  "updateurl": "http://www.thisishullandeastriding.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebbb"),
  "title": "Hull and Eastriding - politics",
  "groupname": "Hull and Eastriding",
  "updateurl": "http://www.thisishullandeastriding.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebbc"),
  "title": "Hull and Eastriding - entainment",
  "groupname": "Hull and Eastriding",
  "updateurl": "http://www.thisishullandeastriding.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebbd"),
  "title": "Sunderlandecho - national sport",
  "groupname": "Sunderlandecho",
  "updateurl": "http://www.sunderlandecho.com/cmlink/1.2043799",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebbe"),
  "title": "Grimsby - business",
  "groupname": "Grimsby",
  "updateurl": "http://www.thisisgrimsby.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebbf"),
  "title": "Grimsby - health",
  "groupname": "Grimsby",
  "updateurl": "http://www.thisisgrimsby.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc0"),
  "title": "Grimsby - politics",
  "groupname": "Grimsby",
  "updateurl": "http://www.thisisgrimsby.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc1"),
  "title": "Grimsby - entertainment",
  "groupname": "Grimsby",
  "updateurl": "http://www.thisisgrimsby.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc2"),
  "title": "Grimsby - sports",
  "groupname": "Grimsby",
  "updateurl": "http://www.thisisgrimsby.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc3"),
  "title": "Grimsby - local news",
  "groupname": "Grimsby",
  "updateurl": "http://www.thisisgrimsby.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc4"),
  "title": "Birminghammail - lifestyle",
  "groupname": "Birminghammail",
  "updateurl": "http://www.birminghammail.net/lifestyle/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc5"),
  "title": "Birminghammail - Birmingham news",
  "groupname": "Birminghammail",
  "updateurl": "http://www.birminghammail.net/news/birmingham-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc6"),
  "title": "Birminghammail - sports",
  "groupname": "Birminghammail",
  "updateurl": "http://www.birminghammail.net/birmingham-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc7"),
  "title": "Dailymail - science",
  "groupname": "Dailymail",
  "updateurl": "http://www.dailymail.co.uk/sciencetech/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc8"),
  "title": "Birminghampost - politics",
  "groupname": "Birminghampost",
  "updateurl": "http://www.birminghampost.net/news/politics-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebc9"),
  "title": "Birminghampost - life",
  "groupname": "Birminghampost",
  "updateurl": "http://www.birminghampost.net/life-leisure-birmingham-guide/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fdc321d3be0004ebca"),
  "title": "Leicestershire - local news",
  "groupname": "Leicestershire",
  "updateurl": "http://www.thisisleicestershire.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebcb"),
  "title": "Yorkshireeveningpost - sport",
  "groupname": "Yorkshireeveningpost",
  "updateurl": "http://www.yorkshireeveningpost.co.uk/cmlink/1.3041342",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebcc"),
  "title": "Yorkshireeveningpost - national news",
  "groupname": "Yorkshireeveningpost",
  "updateurl": "http://www.yorkshireeveningpost.co.uk/cmlink/1.1581854",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebcd"),
  "title": "Thetelegraph and Argus - national news",
  "groupname": "Thetelegraph and Argus",
  "updateurl": "http://www.thetelegraphandargus.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebce"),
  "title": "The Week - sport",
  "groupname": "The Week",
  "updateurl": "http://www.theweek.co.uk/feeds/sport",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebcf"),
  "title": "The Week - news",
  "groupname": "The Week",
  "updateurl": "http://www.theweek.co.uk/feeds/all",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd0"),
  "title": "Belfasttelegraph - Northern-ireland news",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://www.belfasttelegraph.co.uk/news/local-national/northern-ireland/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd1"),
  "title": "Borneopost - sports",
  "groupname": "Borneopost",
  "updateurl": "http://www.theborneopost.com/news/sports/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd2"),
  "title": "Belfasttelegraph - u.k.",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://www.belfasttelegraph.co.uk/news/local-national/uk/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd3"),
  "title": "Belfasttelegraph - world",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://rss.feedsportal.com/c/845/f/10677/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd4"),
  "title": "Belfasttelegraph - sports",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://rss.feedsportal.com/c/845/f/10683/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd5"),
  "title": "Belfasttelegraph - health",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://www.belfasttelegraph.co.uk/news/health/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd6"),
  "title": "Belfasttelegraph - health",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://rss.feedsportal.com/c/845/f/10703/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd7"),
  "title": "Belfasttelegraph - entertainment",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://www.belfasttelegraph.co.uk/entertainment/news/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd8"),
  "title": "Belfasttelegraph - fashion",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://www.belfasttelegraph.co.uk/woman/fashion-beauty/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebd9"),
  "title": "Sabotagetimes - sports",
  "groupname": "Sabotagetimes",
  "updateurl": "http://www.sabotagetimes.com/category/football-sport/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebda"),
  "title": "Belfasttelegraph - politics",
  "groupname": "Belfasttelegraph",
  "updateurl": "http://rss.feedsportal.com/c/845/f/10678/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebdb"),
  "title": "Huffingtonpost - u.k. politics",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-politics/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00fec321d3be0004ebdc"),
  "title": "Huffingtonpost - u.k. entertainment",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-entertainment/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebdd"),
  "title": "Kentonline - Kentish news",
  "groupname": "Kentonline",
  "updateurl": "http://www.kentonline.co.uk/feeds/kentish_express_news_feed.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebde"),
  "title": "Huffingtonpost - u.k. world",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-world/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebdf"),
  "title": "Huffingtonpost - u.k. lifestyle",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-lifestyle/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe0"),
  "title": "Huffingtonpost - u.k. news",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe1"),
  "title": "Huffingtonpost - u.k. tech",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-tech/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe2"),
  "title": "Huffingtonpost - u.k. sport",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-sport/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe3"),
  "title": "Sabotagetimes - life",
  "groupname": "Sabotagetimes",
  "updateurl": "http://www.sabotagetimes.com/category/life/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe4"),
  "title": "Huffingtonpost - u.k. fashion",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-fashion/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe5"),
  "title": "Huffingtonpost - u.k. celebrity",
  "groupname": "Huffingtonpost",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/uk-celebrity/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe6"),
  "title": "Leader-Post  local news",
  "groupname": "Leader-Post",
  "updateurl": "http://rss.canada.com/get/?F1643",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe7"),
  "title": "This is Bristol - health",
  "groupname": "This is Bristol",
  "updateurl": "http://www.thisisbristol.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe8"),
  "title": "This is Bristol - lifestyle",
  "groupname": "This is Bristol",
  "updateurl": "http://www.thisisbristol.co.uk/lifestyle.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebe9"),
  "title": "This is Bristol - politics",
  "groupname": "This is Bristol",
  "updateurl": "http://www.thisisbristol.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebea"),
  "title": "This is Bristol - sport",
  "groupname": "This is Bristol",
  "updateurl": "http://www.thisisbristol.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebeb"),
  "title": "This is Bristol - entertainment",
  "groupname": "This is Bristol",
  "updateurl": "http://www.thisisbristol.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00ffc321d3be0004ebec"),
  "title": "Lancashiretelegraph - news",
  "groupname": "Lancashiretelegraph",
  "updateurl": "http://www.lancashiretelegraph.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebed"),
  "title": "Ibtimes - u.k. economics",
  "groupname": "Ibtimes",
  "updateurl": "http://www.ibtimes.co.uk/rss/articles/categories/24.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebee"),
  "title": "Ibtimes - world",
  "groupname": "Ibtimes",
  "updateurl": "http://www.ibtimes.co.uk/rss/articles/categories/9.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebef"),
  "title": "Ibtimes - u.k. travel",
  "groupname": "Ibtimes",
  "updateurl": "http://www.ibtimes.co.uk/travel/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf0"),
  "title": "Ibtimes - u.k. tech/",
  "groupname": "Ibtimes",
  "updateurl": "http://www.ibtimes.co.uk/rss/articles/categories/6.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf1"),
  "title": "Cityam - local news",
  "groupname": "Cityam",
  "updateurl": "http://www.cityam.com/taxonomy/term/1/all/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf2"),
  "title": "Cityam - lifestyle",
  "groupname": "Cityam",
  "updateurl": "http://www.cityam.com/taxonomy/term/3/all/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf3"),
  "title": "Cityam - business",
  "groupname": "Cityam",
  "updateurl": "http://www.cityam.com/taxonomy/term/4/all/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf4"),
  "title": "Cityam - sport",
  "groupname": "Cityam",
  "updateurl": "http://www.cityam.com/taxonomy/term/8/all/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf5"),
  "title": "Reuters - u.k.",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKdomesticNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf6"),
  "title": "Reuters - u.k. world",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKWorldNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf7"),
  "title": "Reuters - u.k. technology",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/technologyNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf8"),
  "title": "Reuters - u.k. science",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKScienceNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebf9"),
  "title": "Reuters - u.k.",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKHealthNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebfa"),
  "title": "Reuters - u.k. sports",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKSportsNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebfb"),
  "title": "Reuters - u.k. entertainment",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKEntertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebfc"),
  "title": "Reuters - u.k. personal finance",
  "groupname": "Reuters",
  "updateurl": "http://mf.feeds.reuters.com/reuters/UKPersonalFinanceNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebfd"),
  "title": "Liverpoolecho - entertainment",
  "groupname": "Liverpoolecho",
  "updateurl": "http://www.liverpoolecho.co.uk/liverpool-entertainment/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0100c321d3be0004ebfe"),
  "title": "Liverpoolecho - life",
  "groupname": "Liverpoolecho",
  "updateurl": "http://www.liverpoolecho.co.uk/liverpool-life/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ebff"),
  "title": "Liverpoolecho - politics",
  "groupname": "Liverpoolecho",
  "updateurl": "http://www.liverpoolecho.co.uk/liverpool-news/politics/politics-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec00"),
  "title": "Liverpoolecho - Liverpool news",
  "groupname": "Liverpoolecho",
  "updateurl": "http://www.liverpoolecho.co.uk/liverpool-news/local-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec01"),
  "title": "Liverpoolecho - sports",
  "groupname": "Liverpoolecho",
  "updateurl": "http://www.liverpoolecho.co.uk/sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec02"),
  "title": "Leicestershire - business",
  "groupname": "Leicestershire",
  "updateurl": "http://www.thisisleicestershire.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec03"),
  "title": "Dailystar - sports",
  "groupname": "Dailystar",
  "updateurl": "http://uk.dailystar.feedsportal.com/c/33335/f/565815/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec04"),
  "title": "Morningstar - world",
  "groupname": "Morningstar",
  "updateurl": "http://www.morningstaronline.co.uk/index.php/news/rss/feed/world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec05"),
  "title": "Sportcouk - footbal",
  "groupname": "Sportcouk",
  "updateurl": "http://feeds.feedburner.com/SportcoukFootballRssFeed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec06"),
  "title": "Tribalfootball - news",
  "groupname": "Tribalfootball",
  "updateurl": "http://www.tribalfootball.com/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec07"),
  "title": "Nottingham - lifestyle",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/lifestyle.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec08"),
  "title": "Lincolnshire - entertainment",
  "groupname": "Lincolnshire",
  "updateurl": "http://www.thisislincolnshire.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec09"),
  "title": "Nottingham - entertainment",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec0a"),
  "title": "Nottingham - business",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec0b"),
  "title": "Morningstar - u.k. news",
  "groupname": "Morningstar",
  "updateurl": "http://www.morningstaronline.co.uk/index.php/news/rss/feed/britain",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec0c"),
  "title": "Torontolife - news",
  "groupname": "Torontolife",
  "updateurl": "http://www.torontolife.com/daily/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec0d"),
  "title": "Citywire - news",
  "groupname": "Citywire",
  "updateurl": "http://citywire.co.uk/money/latest-news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec0e"),
  "title": "Guardian - u.k. news",
  "groupname": "Guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/uk/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0101c321d3be0004ec0f"),
  "title": "Guardian - politics",
  "groupname": "Guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/politics/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec10"),
  "title": "Guardian - world news",
  "groupname": "Guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/world/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec11"),
  "title": "Guardian - technology",
  "groupname": "Guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/technology/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec12"),
  "title": "Guardian - money",
  "groupname": "Guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/money/rss?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec13"),
  "title": "Guardian - life",
  "groupname": "Guardian",
  "updateurl": "http://feeds.guardian.co.uk/theguardian/lifeandstyle/rss?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec14"),
  "title": "Northamptonchron - politics",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.2572546",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec15"),
  "title": "Northamptonchron - health",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.2572548",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec16"),
  "title": "Northamptonchron - business",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.2572544",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec17"),
  "title": "Northamptonchron - national news",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.1000731",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec18"),
  "title": "Northamptonchron - business",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.344525",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec19"),
  "title": "Northamptonchron - footbal news",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.2572563",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec1a"),
  "title": "Northamptonchron - rugby union",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.2572566",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec1b"),
  "title": "Northamptonchron - lifestyle",
  "groupname": "Northamptonchron",
  "updateurl": "http://www.northamptonchron.co.uk/cmlink/1.344521",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec1c"),
  "title": "Pcpro - news",
  "groupname": "Pcpro",
  "updateurl": "http://feeds.pcpro.co.uk/pcpro-news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec1d"),
  "title": "Jarrow and hebburn gazette - national news",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.1500199",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec1f"),
  "title": "Orange u.k. - u.k. &amp; world news",
  "groupname": "Orange uk.k",
  "updateurl": "http://web.orange.co.uk/ice_article/feed.php?channel=news_uk_world&amp;format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0102c321d3be0004ec20"),
  "title": "Orange u.k. - entertainment news",
  "groupname": "Orange u.k.",
  "updateurl": "http://web.orange.co.uk/ice_article/feed.php?channel=news_entertainment&amp;format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec21"),
  "title": "Orange u.k. - finance",
  "groupname": "Orange u.k.",
  "updateurl": "http://web.orange.co.uk/ice_article/feed.php?channel=news_finance&amp;format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec22"),
  "title": "Orange u.k. -technology",
  "groupname": "Orange u.k.",
  "updateurl": "http://web.orange.co.uk/ice_article/feed.php?channel=news_technology&amp;format=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec23"),
  "title": "BBCi - England news",
  "groupname": "BBCi",
  "updateurl": "http://feeds.bbci.co.uk/news/england/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec24"),
  "title": "BBCi  Nothern ireland news",
  "groupname": "BBCi",
  "updateurl": "http://feeds.bbci.co.uk/news/northern_ireland/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec25"),
  "title": "BBCi  Scotland",
  "groupname": "BBCi",
  "updateurl": "http://feeds.bbci.co.uk/news/scotland/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec26"),
  "title": "BBCi politics",
  "groupname": "BBCi",
  "updateurl": "http://feeds.bbci.co.uk/news/politics/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec27"),
  "title": "This is Money - news",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/news/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec28"),
  "title": "This is Money - sport",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/sport/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec29"),
  "title": "This is Money - tv&amp;showbiz",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/tvshowbiz/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec2a"),
  "title": "This is Money - femail",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/femail/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec2b"),
  "title": "This is Money - health",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/health/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec2c"),
  "title": "This is Money - science",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/sciencetech/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec2d"),
  "title": "This is Money - money",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/money/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec2e"),
  "title": "This is Money - travel",
  "groupname": "This is Money",
  "updateurl": "http://www.thisismoney.co.uk/travel/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec2f"),
  "title": "Spectator - local",
  "groupname": "Spectator",
  "updateurl": "http://www.spectator.co.uk/blogs/index.txml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec30"),
  "title": "Rossendale free Press - news",
  "groupname": "Rossendalefreepress",
  "updateurl": "http://menmedia.co.uk/rossendalefreepress/news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec31"),
  "title": "Swindonadvertiser - local news",
  "groupname": "Swindonadvertiser",
  "updateurl": "http://www.swindonadvertiser.co.uk/news/local/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0103c321d3be0004ec32"),
  "title": "Spectator - boocs",
  "groupname": "Spectator",
  "updateurl": "http://www.spectator.co.uk/books/blog/rss.txml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec33"),
  "title": "Somerset - local news",
  "groupname": "Somerset",
  "updateurl": "http://www.thisissomerset.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec34"),
  "title": "Menmedia - sports",
  "groupname": "Menmedia",
  "updateurl": "http://menmedia.co.uk/manchestereveningnews/sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec35"),
  "title": "Menmedia - news",
  "groupname": "Menmedia",
  "updateurl": "http://menmedia.co.uk/manchestereveningnews/news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec36"),
  "title": "Menmedia - business",
  "groupname": "Menmedia",
  "updateurl": "http://menmedia.co.uk/manchestereveningnews/news/business/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec37"),
  "title": "Fco - travel news",
  "groupname": "Fco",
  "updateurl": "http://www.fco.gov.uk/content/en/rss-outbound/travel-advice/travel-news-rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec38"),
  "title": "Mrc - news",
  "groupname": "Mrc",
  "updateurl": "http://www.mrc.ac.uk/Newspublications/News/RSSfeeds/News_General/news_general.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec39"),
  "title": "News from Scotland Yard",
  "groupname": "News from Scotland Yard",
  "updateurl": "http://content.met.police.uk/cs/Satellite?c=Page&amp;cid=1257246745756&amp;feed=news&amp;p=1257246745756&amp;pagename=MPS_CMS_Internet%2FMPSRSSLayout",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec3a"),
  "title": "Mod - news",
  "groupname": "Mod",
  "updateurl": "http://www.mod.uk/DefenceInternet/DefenceNews/rss.aspx?feed=top5defencenews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec3b"),
  "title": "Mod - news",
  "groupname": "Mod",
  "updateurl": "http://www.mod.uk/DefenceInternet/DefenceNews/rss.aspx?feed=last7daysnews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec3d"),
  "title": "People.co.uk - celebs",
  "groupname": "People.co.uk",
  "updateurl": "http://www.people.co.uk/celebs-tv/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec3e"),
  "title": "People.co.uk - lifestyle",
  "groupname": "People.co.uk",
  "updateurl": "http://www.people.co.uk/lifestyle/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec3f"),
  "title": "People.co.uk - news",
  "groupname": "People.co.uk",
  "updateurl": "http://www.people.co.uk/news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec40"),
  "title": "People.co.uk - sports",
  "groupname": "People.co.uk",
  "updateurl": "http://www.people.co.uk/sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec41"),
  "title": "Department for Business",
  "groupname": "Department for Business",
  "updateurl": "http://feeds.feedburner.com/bis-news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0104c321d3be0004ec42"),
  "title": "Marieclaire - fashion news",
  "groupname": "Marieclaire",
  "updateurl": "http://www.marieclaire.co.uk/feeds/fashion.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec43"),
  "title": "Marieclaire - beauty news",
  "groupname": "Marieclaire",
  "updateurl": "http://feeds.feedburner.com/marieclaire/beauty?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec44"),
  "title": "Marieclaire - celebrity news",
  "groupname": "Marieclaire",
  "updateurl": "http://feeds.feedburner.com/marieclaire/celebrity?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec45"),
  "title": "Newsthump - u.k. news",
  "groupname": "Newsthump",
  "updateurl": "http://newsthump.com/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec46"),
  "title": "Teamtalk - news",
  "groupname": "Teamtalk",
  "updateurl": "http://www.teamtalk.com/rss/1765",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec47"),
  "title": "Fulhamchronicle - sport",
  "groupname": "Fulhamchronicle",
  "updateurl": "http://www.fulhamchronicle.co.uk/london-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec48"),
  "title": "Nottingham - health",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec49"),
  "title": "Morningstar - life",
  "groupname": "Morningstar",
  "updateurl": "http://www.morningstaronline.co.uk/index.php/news/rss/feed/features",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec4a"),
  "title": "Chichester - enetrtainment",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.1580180",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec4b"),
  "title": "Swindonadvertiser - national news",
  "groupname": "Swindonadvertiser",
  "updateurl": "http://www.swindonadvertiser.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec4c"),
  "title": "Morningstar - sport",
  "groupname": "Morningstar",
  "updateurl": "http://www.morningstaronline.co.uk/index.php/news/rss/feed/sport",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec4d"),
  "title": "Kenilworth weekly news - national sport",
  "groupname": "Kenilworth weekly news",
  "updateurl": "http://www.kenilworthweeklynews.co.uk/cmlink/1.1157251",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec4e"),
  "title": "Nottingham - sport",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec4f"),
  "title": "Nottingham - politics",
  "groupname": "Nottingham",
  "updateurl": "http://www.thisisnottingham.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec50"),
  "title": "London24 - local news",
  "groupname": "London24",
  "updateurl": "http://www.london24.com/cmlink/london24_news_1_773183",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec51"),
  "title": "Morning Advertiser - general news",
  "groupname": "Morning Advertiser",
  "updateurl": "http://feeds.feedburner.com/MorningAdvertiser/General-News?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec52"),
  "title": "Morning Advertiser - city news",
  "groupname": "Morning Advertiser",
  "updateurl": "http://feeds.feedburner.com/MorningAdvertiser/City-News?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec53"),
  "title": "Mhwmagazine - business",
  "groupname": "Mhwmagazine",
  "updateurl": "http://www.mhwmagazine.co.uk/rss.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0105c321d3be0004ec54"),
  "title": "Local London - London news",
  "groupname": "Local London",
  "updateurl": "http://www.thisislocallondon.co.uk/news/londonnews/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec55"),
  "title": "Local London - sports",
  "groupname": "Local London",
  "updateurl": "http://www.thisislocallondon.co.uk/sport/sporttopstories/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec56"),
  "title": "Local London - entertainment",
  "groupname": "Local London",
  "updateurl": "http://www.thisislocallondon.co.uk/uk_national_entertainment/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec57"),
  "title": "Local London - business",
  "groupname": "Local London",
  "updateurl": "http://www.thisislocallondon.co.uk/news/business/businessupload/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec58"),
  "title": "Bucksfreepress - politics",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/news/politics/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec59"),
  "title": "Bucksfreepress - footbal",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/sport/football/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec5a"),
  "title": "Bucksfreepress - rugby",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/sport/rugby/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec5b"),
  "title": "Bucksfreepress - food",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/leisure/food/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec5c"),
  "title": "Bucksfreepress - business",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/business/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec5d"),
  "title": "Bucksfreepress - national news",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec5e"),
  "title": "Bucksfreepress - national sports",
  "groupname": "Bucksfreepress",
  "updateurl": "http://www.bucksfreepress.co.uk/uk_national_sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec5f"),
  "title": "Watfordobserver - local sport",
  "groupname": "Watfordobserver",
  "updateurl": "http://www.watfordobserver.co.uk/sport/localsport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec60"),
  "title": "Watfordobserver - local news",
  "groupname": "Watfordobserver",
  "updateurl": "http://www.watfordobserver.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec61"),
  "title": "Guardian series - local news",
  "groupname": "Guardian series",
  "updateurl": "http://www.guardian-series.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec62"),
  "title": "Guardian series - sports",
  "groupname": "Guardian series",
  "updateurl": "http://www.guardian-series.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec63"),
  "title": "Newsshopper - politics",
  "groupname": "Newsshopper",
  "updateurl": "http://www.newsshopper.co.uk/news/politics/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec64"),
  "title": "Newsshopper - health",
  "groupname": "Newsshopper",
  "updateurl": "http://www.newsshopper.co.uk/news/health/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec65"),
  "title": "Newsshopper - local news",
  "groupname": "Newsshopper",
  "updateurl": "http://www.newsshopper.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0106c321d3be0004ec66"),
  "title": "Newsshopper - sports",
  "groupname": "Newsshopper",
  "updateurl": "http://www.newsshopper.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec67"),
  "title": "The Record - business news",
  "groupname": "The Record",
  "updateurl": "http://www.therecord.com/rss?query=/news/business&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec68"),
  "title": "Yourlocalguardian - local news",
  "groupname": "Yourlocalguardian",
  "updateurl": "http://www.yourlocalguardian.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec69"),
  "title": "Chichester - national sport",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.1580179",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec6a"),
  "title": "Chichester - footbal",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.1580169",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec6b"),
  "title": "Yourlocalguardian - politics",
  "groupname": "Yourlocalguardian",
  "updateurl": "http://www.yourlocalguardian.co.uk/news/politics/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec6c"),
  "title": "Yourlocalguardian - businesss",
  "groupname": "Yourlocalguardian",
  "updateurl": "http://www.yourlocalguardian.co.uk/news/business/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec6d"),
  "title": "Yourlocalguardian - rugby union",
  "groupname": "Yourlocalguardian",
  "updateurl": "http://www.yourlocalguardian.co.uk/sport/rugby/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec6e"),
  "title": "Yourlocalguardian - sports",
  "groupname": "Yourlocalguardian",
  "updateurl": "http://www.yourlocalguardian.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec6f"),
  "title": "Bournelocal - local news",
  "groupname": "Bournelocal",
  "updateurl": "http://www.bournelocal.co.uk/cmlink/1.335669",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec70"),
  "title": "Lethbridgeherald - world news",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/world-news/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec71"),
  "title": "Bournelocal - sports",
  "groupname": "Bournelocal",
  "updateurl": "http://www.bournelocal.co.uk/cmlink/1.335703",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec72"),
  "title": "Bournelocal - lifestyle",
  "groupname": "Bournelocal",
  "updateurl": "http://www.bournelocal.co.uk/cmlink/1.335670",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec73"),
  "title": "Fulhamchronicle - lifestyle",
  "groupname": "Fulhamchronicle",
  "updateurl": "http://www.fulhamchronicle.co.uk/london-lifestyle/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec75"),
  "title": "Fulhamchronicle - local news",
  "groupname": "Fulhamchronicle",
  "updateurl": "http://www.fulhamchronicle.co.uk/fulham-and-hammersmith-news/local-fulham-and-hammersmith-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec76"),
  "title": "Stamfordmercury - local news",
  "groupname": "Stamfordmercury",
  "updateurl": "http://www.stamfordmercury.co.uk/cmlink/1.3162832",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec77"),
  "title": "Stamfordmercury - national news",
  "groupname": "Stamfordmercury",
  "updateurl": "http://www.stamfordmercury.co.uk/cmlink/1.3162739",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec78"),
  "title": "Stamfordmercury - sports",
  "groupname": "Stamfordmercury",
  "updateurl": "http://www.stamfordmercury.co.uk/cmlink/1.347384",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0107c321d3be0004ec79"),
  "title": "Macleans - world news",
  "groupname": "Macleans",
  "updateurl": "http://www2.macleans.ca/category/world/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec7a"),
  "title": "Stamfordmercury - lifestyle",
  "groupname": "Stamfordmercury",
  "updateurl": "http://www.stamfordmercury.co.uk/cmlink/1.347352",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec7b"),
  "title": "Somerset - othersport",
  "groupname": "Somerset",
  "updateurl": "http://www.thisissomerset.co.uk/othersport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec7c"),
  "title": "Lincolnshire - local news",
  "groupname": "Lincolnshire",
  "updateurl": "http://www.thisislincolnshire.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec7d"),
  "title": "Politics  - news",
  "groupname": "Politics",
  "updateurl": "http://www.politics.co.uk/news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec7e"),
  "title": "Cbc canada - health",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/health.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec7f"),
  "title": "Politics - blog",
  "groupname": "Politics",
  "updateurl": "http://www.politics.co.uk/blogs/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec80"),
  "title": "Myfinances",
  "groupname": "Myfinances",
  "updateurl": "http://www.myfinances.co.uk/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec81"),
  "title": "Publicservice - news",
  "groupname": "Publicservice",
  "updateurl": "http://www.publicservice.co.uk/feeds/feed-news.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec82"),
  "title": "Publicservice - health",
  "groupname": "Publicservice",
  "updateurl": "http://www.publicservice.co.uk/feeds/feed-health-and-social-care.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec83"),
  "title": "Shieldsgazette - national news",
  "groupname": "Shieldsgazette",
  "updateurl": "http://www.shieldsgazette.com/cmlink/1.1238126",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec84"),
  "title": "Northumberland Gazette - lifestyle",
  "groupname": "Northumberland Gazette",
  "updateurl": "http://www.northumberlandgazette.co.uk/cmlink/1.1334890",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec85"),
  "title": "Fulhamchronicle - world",
  "groupname": "Fulhamchronicle",
  "updateurl": "http://www.fulhamchronicle.co.uk/fulham-and-hammersmith-news/world-uk-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec86"),
  "title": "Somerset - footbal",
  "groupname": "Somerset",
  "updateurl": "http://www.thisissomerset.co.uk/football.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec87"),
  "title": "Northumberland Gazette - sport",
  "groupname": "Northumberland Gazette",
  "updateurl": "http://www.northumberlandgazette.co.uk/cmlink/1.1335074",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec88"),
  "title": "Bucksherald - local news",
  "groupname": "Bucksherald",
  "updateurl": "http://www.bucksherald.co.uk/cmlink/1.2858194",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec89"),
  "title": "Burtonmail - news",
  "groupname": "Burtonmail",
  "updateurl": "http://www.burtonmail.co.uk/News/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec8a"),
  "title": "Hertfordshiremercury - sport",
  "groupname": "Hertfordshiremercury",
  "updateurl": "http://www.hertfordshiremercury.co.uk/Sport/3/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0108c321d3be0004ec8b"),
  "title": "Opendemocracy",
  "groupname": "Opendemocracy",
  "updateurl": "http://feeds.feedburner.com/opendemocracy?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec8c"),
  "title": "Bucksherald - national news",
  "groupname": "Bucksherald",
  "updateurl": "http://www.bucksherald.co.uk/cmlink/1.1372250",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec8d"),
  "title": "Hertfordshiremercury - news",
  "groupname": "Hertfordshiremercury",
  "updateurl": "http://www.hertfordshiremercury.co.uk/Hertfordshire/5/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec8e"),
  "title": "Belfast Newsletter - local news",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1595035",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec8f"),
  "title": "Bridlington free press - local news",
  "groupname": "Bridlington free press",
  "updateurl": "http://www.bridlingtonfreepress.co.uk/cmlink/1.2006806",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec90"),
  "title": "Bridlington free press - national news",
  "groupname": "Bridlington free press",
  "updateurl": "http://www.bridlingtonfreepress.co.uk/cmlink/1.35289",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec91"),
  "title": "Newmarketjournal - showbiz",
  "groupname": "Newmarketjournal",
  "updateurl": "http://www.newmarketjournal.co.uk/cmlink/1.358374",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec92"),
  "title": "Bridlington free press - national sport",
  "groupname": "Bridlington free press",
  "updateurl": "http://www.bridlingtonfreepress.co.uk/cmlink/1.2006815",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec93"),
  "title": "Bridlington free press - showbiz",
  "groupname": "Bridlington free press",
  "updateurl": "http://www.bridlingtonfreepress.co.uk/cmlink/1.35195",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec94"),
  "title": "Bury free press - business",
  "groupname": "Bury free press",
  "updateurl": "http://www.buryfreepress.co.uk/cmlink/1.338881",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec95"),
  "title": "Bury free press - health",
  "groupname": "Bury free press",
  "updateurl": "http://www.buryfreepress.co.uk/cmlink/1.1148159",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec96"),
  "title": "Bury free press - politics",
  "groupname": "Bury free press",
  "updateurl": "http://www.buryfreepress.co.uk/cmlink/1.1148161",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec97"),
  "title": "Bury free press - sport",
  "groupname": "Bury free press",
  "updateurl": "http://www.buryfreepress.co.uk/cmlink/1.338900",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec98"),
  "title": "Bury free press - lifestyle",
  "groupname": "Bury free press",
  "updateurl": "http://www.buryfreepress.co.uk/cmlink/1.338875",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec99"),
  "title": "Morpethherald - national news",
  "groupname": "Morpethherald",
  "updateurl": "http://www.morpethherald.co.uk/cmlink/1.1310188",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec9a"),
  "title": "Morpethherald - business",
  "groupname": "Morpethherald",
  "updateurl": "http://www.morpethherald.co.uk/cmlink/1.1652168",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec9b"),
  "title": "Morpethherald - national sport",
  "groupname": "Morpethherald",
  "updateurl": "http://www.morpethherald.co.uk/cmlink/1.1652176",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec9c"),
  "title": "Morpethherald - showbiz",
  "groupname": "Morpethherald",
  "updateurl": "http://www.morpethherald.co.uk/cmlink/1.1310094",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0109c321d3be0004ec9d"),
  "title": "Morpethherald - health",
  "groupname": "Morpethherald",
  "updateurl": "http://www.morpethherald.co.uk/cmlink/1.1310096",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ec9e"),
  "title": "Hayling today - regional news",
  "groupname": "Hayling today",
  "updateurl": "http://www.haylingtoday.co.uk/cmlink/1.331633",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ec9f"),
  "title": "Hayling today - showbiz",
  "groupname": "Hayling today",
  "updateurl": "http://www.haylingtoday.co.uk/cmlink/1.331637",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca0"),
  "title": "Granthamjournal - business",
  "groupname": "Granthamjournal",
  "updateurl": "http://www.granthamjournal.co.uk/cmlink/1.3162948",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca1"),
  "title": "Granthamjournal - national news",
  "groupname": "Granthamjournal",
  "updateurl": "http://www.granthamjournal.co.uk/cmlink/1.3163040",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca2"),
  "title": "Granthamjournal - sports",
  "groupname": "Granthamjournal",
  "updateurl": "http://www.granthamjournal.co.uk/cmlink/1.3163161",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca3"),
  "title": "Hastingsobserver - local news",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.1558244",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca4"),
  "title": "Hastingsobserver - regional news",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.332073",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca5"),
  "title": "Hastingsobserver - health",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.332079",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca6"),
  "title": "Hastingsobserver - showbiz",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.332077",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca7"),
  "title": "Hastingsobserver - hasting united",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.2480338",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca8"),
  "title": "Hastingsobserver - other sport",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.1472574",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004eca9"),
  "title": "Hastingsobserver - national sport",
  "groupname": "Hastingsobserver",
  "updateurl": "http://www.hastingsobserver.co.uk/cmlink/1.1472570",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ecaa"),
  "title": "Gazettelive - fashion",
  "groupname": "Gazettelive",
  "updateurl": "http://www.gazettelive.co.uk/lifestyle/fashion-and-beauty/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ecab"),
  "title": "EDP24 - sports",
  "groupname": "EDP24",
  "updateurl": "http://www.edp24.co.uk/cmlink/edp24_sport_1_595723",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ecac"),
  "title": "Kentonline - news",
  "groupname": "Kentonline",
  "updateurl": "http://www.kentonline.co.uk/feeds/kent_online_news_feed.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ecad"),
  "title": "Gazettelive - local news",
  "groupname": "Gazettelive",
  "updateurl": "http://www.gazettelive.co.uk/news/teesside-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ecae"),
  "title": "Gazettelive - world",
  "groupname": "Gazettelive",
  "updateurl": "http://www.gazettelive.co.uk/news/uk-and-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ac321d3be0004ecaf"),
  "title": "Gazettelive - sports",
  "groupname": "Gazettelive",
  "updateurl": "http://www.gazettelive.co.uk/north-east-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb0"),
  "title": "Sundaysun - world news",
  "groupname": "Sundaysun",
  "updateurl": "http://www.sundaysun.co.uk/news/uk-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb1"),
  "title": "Sundaysun - news",
  "groupname": "Sundaysun",
  "updateurl": "http://www.sundaysun.co.uk/news/breaking-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb2"),
  "title": "Sundaysun - sport",
  "groupname": "Sundaysun",
  "updateurl": "http://www.sundaysun.co.uk/sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb3"),
  "title": "Sundaymercury - world news",
  "groupname": "Sundaymercury",
  "updateurl": "http://www.sundaymercury.net/news/world-uk-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb4"),
  "title": "Sundaymercury - sports",
  "groupname": "Sundaymercury",
  "updateurl": "http://www.sundaymercury.net/midlands-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb5"),
  "title": "Midhurstandpetworth - local news",
  "groupname": "Midhurstandpetworth",
  "updateurl": "http://www.midhurstandpetworth.co.uk/cmlink/1.1586733",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb6"),
  "title": "Sundaymercury - lifestyle",
  "groupname": "Sundaymercury",
  "updateurl": "http://www.sundaymercury.net/lifestyle-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb7"),
  "title": "Walesonline - business",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/business-in-wales/business-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb8"),
  "title": "Walesonline - business featires",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/business-in-wales/business-features/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecb9"),
  "title": "Sky News Australia - sport",
  "groupname": "Sky News Australia",
  "updateurl": "http://rss.skynews.com.au/c/34485/f/628638/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecba"),
  "title": "Walesonline - footbal news",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/footballnation/football-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecbb"),
  "title": "Midhurstandpetworth - health",
  "groupname": "Midhurstandpetworth",
  "updateurl": "http://www.midhurstandpetworth.co.uk/cmlink/1.336885",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecbc"),
  "title": "Walesonline - lifestyle",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/showbiz-and-lifestyle/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecbd"),
  "title": "Walesonline - u.k. news",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/news/uk-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecbe"),
  "title": "Walesonline - world news",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/news/latest-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecbf"),
  "title": "Walesonline - politics",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/news/welsh-politics/welsh-politics-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010bc321d3be0004ecc0"),
  "title": "Walesonline - health",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/news/health-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc1"),
  "title": "Walesonline - sports",
  "groupname": "Walesonline",
  "updateurl": "http://www.walesonline.co.uk/sports/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc2"),
  "title": "Lincolnshire - health",
  "groupname": "Lincolnshire",
  "updateurl": "http://www.thisislincolnshire.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc3"),
  "title": "Matlockmercury - local news",
  "groupname": "Matlockmercury",
  "updateurl": "http://www.matlockmercury.co.uk/cmlink/1.1539637",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc4"),
  "title": "Matlockmercury - business",
  "groupname": "Matlockmercury",
  "updateurl": "http://www.matlockmercury.co.uk/cmlink/1.1539642",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc5"),
  "title": "Matlockmercury - regional news",
  "groupname": "Matlockmercury",
  "updateurl": "http://www.matlockmercury.co.uk/cmlink/1.39453",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc6"),
  "title": "Swindonadvertiser - sports",
  "groupname": "Swindonadvertiser",
  "updateurl": "http://www.swindonadvertiser.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc7"),
  "title": "Matlockmercury - sports",
  "groupname": "Matlockmercury",
  "updateurl": "http://www.matlockmercury.co.uk/cmlink/1.39474",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc8"),
  "title": "Matlockmercury - lifestyle",
  "groupname": "Matlockmercury",
  "updateurl": "http://www.matlockmercury.co.uk/cmlink/1.39449",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecc9"),
  "title": "Derbyshiretimes - local news",
  "groupname": "Derbyshiretimes",
  "updateurl": "http://www.derbyshiretimes.co.uk/cmlink/1.1613691",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecca"),
  "title": "EDP24 - news",
  "groupname": "EDP24",
  "updateurl": "http://www.edp24.co.uk/cmlink/edp24_news_1_595700",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004eccb"),
  "title": "Derbyshiretimes - local sport",
  "groupname": "Derbyshiretimes",
  "updateurl": "http://www.derbyshiretimes.co.uk/cmlink/1.1613694",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004eccc"),
  "title": "Derbyshiretimes - lifestyle",
  "groupname": "Derbyshiretimes",
  "updateurl": "http://www.derbyshiretimes.co.uk/cmlink/1.35934",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004eccd"),
  "title": "Newspostleader - local news",
  "groupname": "Newspostleader",
  "updateurl": "http://www.newspostleader.co.uk/cmlink/1.1642393",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecce"),
  "title": "Newspostleader - local sport",
  "groupname": "Newspostleader",
  "updateurl": "http://www.newspostleader.co.uk/cmlink/1.1642396",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004eccf"),
  "title": "Newspostleader - national sport",
  "groupname": "Newspostleader",
  "updateurl": "http://www.newspostleader.co.uk/cmlink/1.1642397",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecd0"),
  "title": "Rabble - news",
  "groupname": "Rabble",
  "updateurl": "http://feeds.feedburner.com/rabble-news?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecd1"),
  "title": "Lancashir evening post - local news",
  "groupname": "Lancashir evening post",
  "updateurl": "http://www.lep.co.uk/cmlink/1.2536",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010cc321d3be0004ecd2"),
  "title": "Buckinghamshireadvertiser - sport",
  "groupname": "Buckinghamshireadvertiser",
  "updateurl": "http://www.buckinghamshireadvertiser.co.uk/south-buckinghamshire-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd3"),
  "title": "Lancashir evening post - regional news",
  "groupname": "Lancashir evening post",
  "updateurl": "http://www.lep.co.uk/cmlink/1.2537",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd4"),
  "title": "Lancashir evening post - business",
  "groupname": "Lancashir evening post",
  "updateurl": "http://www.lep.co.uk/cmlink/1.2539",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd5"),
  "title": "Lancashir evening post - entertainment",
  "groupname": "Lancashir evening post",
  "updateurl": "http://www.lep.co.uk/cmlink/1.2541",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd6"),
  "title": "Lancashir evening post - sport",
  "groupname": "Lancashir evening post",
  "updateurl": "http://www.lep.co.uk/cmlink/1.2558",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd7"),
  "title": "Midhurstandpetworth - entertainment",
  "groupname": "Midhurstandpetworth",
  "updateurl": "http://www.midhurstandpetworth.co.uk/cmlink/1.1586749",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd8"),
  "title": "Lancashir evening post - lifestyle",
  "groupname": "Lancashir evening post",
  "updateurl": "http://www.lep.co.uk/cmlink/1.2533",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecd9"),
  "title": "Kentonline - business",
  "groupname": "Kentonline",
  "updateurl": "http://www.kentonline.co.uk/feeds/kent_business_news_feed.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecda"),
  "title": "Adelaide now - entertainment_confidential",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_entertainment_confidential_251.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecdb"),
  "title": "Newmarketjournal - lifestyle",
  "groupname": "Newmarketjournal",
  "updateurl": "http://www.newmarketjournal.co.uk/cmlink/1.3093903",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecdc"),
  "title": "Newmarketjournal - national news",
  "groupname": "Newmarketjournal",
  "updateurl": "http://www.newmarketjournal.co.uk/cmlink/1.1167028",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecdd"),
  "title": "Lincolnshire - business",
  "groupname": "Lincolnshire",
  "updateurl": "http://www.thisislincolnshire.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecde"),
  "title": "EDP24 - business",
  "groupname": "EDP24",
  "updateurl": "http://www.edp24.co.uk/cmlink/edp_business_news_1_595540",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ecdf"),
  "title": "Kentonline - sport",
  "groupname": "Kentonline",
  "updateurl": "http://www.kentonline.co.uk/feeds/kentonline_sport_feed.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ece0"),
  "title": "Lincolnshire - politics",
  "groupname": "Lincolnshire",
  "updateurl": "http://www.thisislincolnshire.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ece1"),
  "title": "Lincolnshire - sport",
  "groupname": "Lincolnshire",
  "updateurl": "http://www.thisislincolnshire.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ece2"),
  "title": "Chichester - regional news",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.337687",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ece3"),
  "title": "Kent - business",
  "groupname": "Kent",
  "updateurl": "http://www.thisiskent.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010dc321d3be0004ece4"),
  "title": "Kent - entertainment",
  "groupname": "Kent",
  "updateurl": "http://www.thisiskent.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ece5"),
  "title": "Kentonline - news",
  "groupname": "Kent",
  "updateurl": "http://www.thisiskent.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ece6"),
  "title": "Kent - politics",
  "groupname": "Kent",
  "updateurl": "http://www.thisiskent.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ece8"),
  "title": "Chichester - national news",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.1580168",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ece9"),
  "title": "Scunthorpe - business",
  "groupname": "Scunthorpe",
  "updateurl": "http://www.thisisscunthorpe.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecea"),
  "title": "Scunthorpe - entertainment",
  "groupname": "Scunthorpe",
  "updateurl": "http://www.thisisscunthorpe.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004eceb"),
  "title": "Scunthorpe - health",
  "groupname": "Scunthorpe",
  "updateurl": "http://www.thisisscunthorpe.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecec"),
  "title": "Scunthorpe - news",
  "groupname": "Scunthorpe",
  "updateurl": "http://www.thisisscunthorpe.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004eced"),
  "title": "Scunthorpe - sport",
  "groupname": "Scunthorpe",
  "updateurl": "http://www.thisisscunthorpe.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecee"),
  "title": "Scunthorpe - other sport",
  "groupname": "Scunthorpe",
  "updateurl": "http://www.thisisscunthorpe.co.uk/othersport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecef"),
  "title": "Chichester - health",
  "groupname": "Chichester",
  "updateurl": "http://www.chichester.co.uk/cmlink/1.337693",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecf0"),
  "title": "Сornwall - business",
  "groupname": "Сornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/business.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecf1"),
  "title": "Сornwall - entertainment",
  "groupname": "Сornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/entertainment.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecf2"),
  "title": "Cornwall - health",
  "groupname": "Cornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/health.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecf3"),
  "title": "Cornwall - news",
  "groupname": "Cornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/news.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010ec321d3be0004ecf4"),
  "title": "Cornwall - politics",
  "groupname": "Cornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/politics.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecf5"),
  "title": "Cornwall - sport",
  "groupname": "Cornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/sport.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecf6"),
  "title": "Cornwall - nigtlife",
  "groupname": "Cornwall",
  "updateurl": "http://www.thisiscornwall.co.uk/goingout.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecf7"),
  "title": "Crewechronicle - sport",
  "groupname": "Crewechronicle",
  "updateurl": "http://www.crewechronicle.co.uk/crewe-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecf8"),
  "title": "Bedfordshire - sports",
  "groupname": "Bedfordshire",
  "updateurl": "http://www.bedfordshire-news.co.uk/Sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecf9"),
  "title": "4 RFV - national tv",
  "groupname": "4 RFV",
  "updateurl": "http://www.4rfv.co.uk/rssnews.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecfa"),
  "title": "Retfordtoday - news",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/cmlink/1.1643774",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecfb"),
  "title": "Kenilworth weekly news - national news",
  "groupname": "Kenilworth weekly news",
  "updateurl": "http://www.kenilworthweeklynews.co.uk/cmlink/1.382493",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecfc"),
  "title": "Retfordtoday - Yorkshire &amp; Humber news",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/cmlink/1.41212",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecfd"),
  "title": "Retfordtoday - national news",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/cmlink/1.41310",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecfe"),
  "title": "Retfordtoday - health",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/cmlink/1.41218",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ecff"),
  "title": "Retfordtoday - local sports",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/cmlink/1.1643776",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed00"),
  "title": "Retfordtoday - national sport",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/sport/national-sport",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed01"),
  "title": "Retfordtoday - lifestyle",
  "groupname": "Retfordtoday",
  "updateurl": "http://www.retfordtoday.co.uk/cmlink/1.3598651",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed02"),
  "title": "Iomtoday - politics",
  "groupname": "Iomtoday",
  "updateurl": "http://www.iomtoday.co.im/cmlink/1.1643897",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed03"),
  "title": "Iomtoday - business",
  "groupname": "Iomtoday",
  "updateurl": "http://www.iomtoday.co.im/cmlink/1.1643896",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed04"),
  "title": "Iomtoday - sports",
  "groupname": "Iomtoday",
  "updateurl": "http://www.iomtoday.co.im/cmlink/1.1643906",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed05"),
  "title": "Crewechronicle - world",
  "groupname": "Crewechronicle",
  "updateurl": "http://www.crewechronicle.co.uk/crewe-news/uk-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e010fc321d3be0004ed06"),
  "title": "4 N I - Northern Ireland",
  "groupname": "4 N I",
  "updateurl": "http://www.4ni.co.uk/rssnews.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed07"),
  "title": "Dinningtontoday - national sport",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.2364031",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed08"),
  "title": "Build - irish national news",
  "groupname": "Build",
  "updateurl": "http://www.build.ie/rss_irish_news.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed09"),
  "title": "Hertsandessexobserver - news",
  "groupname": "Hertsandessexobserver",
  "updateurl": "http://www.hertsandessexobserver.co.uk/Bishops-Stortford/5/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed0a"),
  "title": "Shieldsgazette - local news",
  "groupname": "Shieldsgazette",
  "updateurl": "http://www.shieldsgazette.com/cmlink/1.1551020",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed0b"),
  "title": "Blackpoolcitizen - national news",
  "groupname": "Blackpoolcitizen",
  "updateurl": "http://www.blackpoolcitizen.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed0c"),
  "title": "Dinningtontoday - showbiz",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.36101",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed0d"),
  "title": "Andoveradvertiser - naional news",
  "groupname": "Andoveradvertiser",
  "updateurl": "http://www.andoveradvertiser.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed0e"),
  "title": "Andoveradvertiser - business",
  "groupname": "Andoveradvertiser",
  "updateurl": "http://www.andoveradvertiser.co.uk/business/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed0f"),
  "title": "Getwokingham - news",
  "groupname": "Getwokingham",
  "updateurl": "http://www.getwokingham.co.uk/news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed10"),
  "title": "Msncanada - tech",
  "groupname": "Msncanada",
  "updateurl": "http://ca.msn.com/rss/tech.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed11"),
  "title": "Getwokingham - footbal",
  "groupname": "Getwokingham",
  "updateurl": "http://www.getwokingham.co.uk/sport/football/readingfc/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed12"),
  "title": "Getwokingham - entertainment",
  "groupname": "Getwokingham",
  "updateurl": "http://www.getwokingham.co.uk/entertainment/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed13"),
  "title": "Getwokingham - lifestyle",
  "groupname": "Getwokingham",
  "updateurl": "http://www.getwokingham.co.uk/lifestyle/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed14"),
  "title": "Dailymash - local news",
  "groupname": "Dailymash",
  "updateurl": "http://www.thedailymash.co.uk/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed15"),
  "title": "Register - business",
  "groupname": "Register",
  "updateurl": "http://www.theregister.co.uk/business/headlines.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed16"),
  "title": "Register - science",
  "groupname": "Register",
  "updateurl": "http://www.theregister.co.uk/science/headlines.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed17"),
  "title": "Register - music",
  "groupname": "Register",
  "updateurl": "http://www.theregister.co.uk/music_media/headlines.atom",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0110c321d3be0004ed18"),
  "title": "Mancunianmatters - news",
  "groupname": "Mancunianmatters",
  "updateurl": "http://mancunianmatters.co.uk/news/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed19"),
  "title": "Mancunianmatters - sport",
  "groupname": "Mancunianmatters",
  "updateurl": "http://mancunianmatters.co.uk/sport/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed1a"),
  "title": "Sportcouk - teniss",
  "groupname": "Sportcouk",
  "updateurl": "http://feeds.feedburner.com/SportcoukTennisRssFeed?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed1b"),
  "title": "Macworld - news",
  "groupname": "Macworld",
  "updateurl": "http://rss.feedsportal.com/c/570/f/7332/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed1c"),
  "title": "Cnet - computers",
  "groupname": "Cnet",
  "updateurl": "http://www.cnet.co.uk/rss/computers/n-6j6/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed1d"),
  "title": "Cnet - mobile phones",
  "groupname": "Cnet",
  "updateurl": "http://www.cnet.co.uk/rss/mobile-phones-and-apps/n-6j8/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed1e"),
  "title": "Techradar - news",
  "groupname": "Techradar",
  "updateurl": "http://feeds.feedburner.com/techradar/allnews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed1f"),
  "title": "Flintshire Chronicle - world news",
  "groupname": "Flintshire Chronicle",
  "updateurl": "http://www.flintshirechronicle.co.uk/flintshire-news/uk-world-news/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed20"),
  "title": "Lethbridgeherald - national news",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/national-news/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed21"),
  "title": "Bedfordshire - news",
  "groupname": "Bedfordshire",
  "updateurl": "http://www.bedfordshire-news.co.uk/News/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed22"),
  "title": "Ottawa Citizen - sports",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F292",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed23"),
  "title": "Flintshire Chronicle - national sport",
  "groupname": "Flintshire Chronicle",
  "updateurl": "http://www.flintshirechronicle.co.uk/flintshire-news/national-sport/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed24"),
  "title": "Dinningtontoday - lifestyle",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.3598260",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed25"),
  "title": "Belfast Newsletter - showbiz",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1571550",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed26"),
  "title": "Jarrow and hebburn gazette - local news",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.2928697",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed27"),
  "title": "Belfast Newsletter - politics",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1595036",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed28"),
  "title": "Moneycontrol - business",
  "groupname": "Moneycontrol",
  "updateurl": "http://www.moneycontrol.com/rss/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed29"),
  "title": "Moneycontrol - world",
  "groupname": "Moneycontrol",
  "updateurl": "http://www.moneycontrol.com/rss/worldnews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed2a"),
  "title": "Stage - news",
  "groupname": "Stage",
  "updateurl": "http://feeds.feedburner.com/TheStageNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0111c321d3be0004ed2b"),
  "title": "Whatsonstage - teatre",
  "groupname": "Whatsonstage",
  "updateurl": "http://www.whatsonstage.com/news/theatre/london/E8831334500720/Full+List+%26+Photos%3A+2012+Olivier+Award+winners.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed2c"),
  "title": "Theatermania - news",
  "groupname": "Theatermania",
  "updateurl": "http://www.theatermania.com/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed2d"),
  "title": "Ottawa Citizen - Life",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F7791",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed2e"),
  "title": "Msncanada - cp-world news",
  "groupname": "Msncanada",
  "updateurl": "http://news.ca.msn.com/rss/cp-world.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed2f"),
  "title": "Liverpoolfc - news",
  "groupname": "Liverpoolfc",
  "updateurl": "http://www.liverpoolfc.tv/rss/news/latest",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed30"),
  "title": "Dinningtontoday - health",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.36103",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed31"),
  "title": "Chichester.gov - news",
  "groupname": "Chichester.gov",
  "updateurl": "http://www.chichester.gov.uk/index.cfm?ArticleID=2261&amp;RSS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed32"),
  "title": "Hortweek - news",
  "groupname": "Hortweek",
  "updateurl": "http://www.hortweek.com/rss/news",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed33"),
  "title": "Torontosun - money",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/money/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed34"),
  "title": "Sky News Australia - showbiz",
  "groupname": "Sky News Australia",
  "updateurl": "http://rss.skynews.com.au/c/34485/f/628640/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed35"),
  "title": "Farminguk - news",
  "groupname": "Farminguk",
  "updateurl": "http://www.farminguk.com/rss.asp",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed36"),
  "title": "Shieldsgazette - footbal",
  "groupname": "Shieldsgazette",
  "updateurl": "http://www.shieldsgazette.com/cmlink/1.1551025",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed37"),
  "title": "Worcester news -  local news",
  "groupname": "Worcester news",
  "updateurl": "http://www.worcesternews.co.uk/news/local/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed38"),
  "title": "Worcester news -  entertainment",
  "groupname": "Worcester news",
  "updateurl": "http://www.worcesternews.co.uk/uk_national_entertainment/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed39"),
  "title": "PC Advisor -  news",
  "groupname": "PC Advisor",
  "updateurl": "http://rss.feedsportal.com/c/559/f/7174/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed3a"),
  "title": "Worcester news -  national news",
  "groupname": "Worcester news",
  "updateurl": "http://www.worcesternews.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed3b"),
  "title": "Worcester news -  national sport",
  "groupname": "Worcester news",
  "updateurl": "http://www.worcesternews.co.uk/uk_national_sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed3c"),
  "title": "Worcester news -  local sport",
  "groupname": "Worcester news",
  "updateurl": "http://www.worcesternews.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0112c321d3be0004ed3d"),
  "title": "Dinningtontoday - national news",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.36195",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed3e"),
  "title": "Rds - football",
  "groupname": "Rds",
  "updateurl": "http://www.rds.ca/football/fildepresse_rds.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed3f"),
  "title": "Dinningtontoday - local sport",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.2364030",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed40"),
  "title": "Rds - baseball",
  "groupname": "Rds",
  "updateurl": "http://www.rds.ca/baseball/fildepresse_rds.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed41"),
  "title": "Insideireland - news",
  "groupname": "Insideireland",
  "updateurl": "http://insideireland.ie/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed42"),
  "title": "Shieldsgazette - local news",
  "groupname": "Shieldsgazette",
  "updateurl": "http://www.shieldsgazette.com/cmlink/1.1551009",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed43"),
  "title": "Shieldsgazette - regional news",
  "groupname": "Shieldsgazette",
  "updateurl": "http://www.shieldsgazette.com/cmlink/1.1238028",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed44"),
  "title": "Dinningtontoday - Yorkshir &amp; Humber news",
  "groupname": "Dinningtontoday",
  "updateurl": "http://www.dinningtontoday.co.uk/cmlink/1.36097",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed45"),
  "title": "Shieldsgazette - entertainment",
  "groupname": "Shieldsgazette",
  "updateurl": "http://www.shieldsgazette.com/cmlink/1.1641939",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed47"),
  "title": "Halifaxcourier - local news",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.2816172",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed48"),
  "title": "Halifaxcourier - regional news",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.37038",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed49"),
  "title": "Halifaxcourier - national news",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.37136",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed4a"),
  "title": "Halifaxcourier - business",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.2816173",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed4b"),
  "title": "Kenilworth weekly news - showbiz",
  "groupname": "Kenilworth weekly news",
  "updateurl": "http://www.kenilworthweeklynews.co.uk/cmlink/1.382391",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed4c"),
  "title": "Halifaxcourier - health",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.37044",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed4d"),
  "title": "Halifaxcourier - footbal",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.2816177",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed4e"),
  "title": "Halifaxcourier - rugby leag",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.2816178",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0113c321d3be0004ed4f"),
  "title": "Halifaxcourier - local sport",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.2816181",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed50"),
  "title": "Halifaxcourier - life style",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.3283185",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed51"),
  "title": "Halifaxcourier - showbiz",
  "groupname": "Halifaxcourier",
  "updateurl": "http://www.halifaxcourier.co.uk/cmlink/1.37042",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed52"),
  "title": "Heraldscotland - politics",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishPoliticsNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed53"),
  "title": "Heraldscotland - world",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishNewsWorldNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed54"),
  "title": "Thespec - local",
  "groupname": "Thespec",
  "updateurl": "http://www.thespec.com/rss?query=/news/local&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed55"),
  "title": "Heraldscotland - home news",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishNewsHeraldScotlandNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed56"),
  "title": "Heraldscotland - scotish footbal",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishFootballNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed57"),
  "title": "Heraldscotland -  rugby news",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishRugbyNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed58"),
  "title": "Heraldscotland -  golf news",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishGolfNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed59"),
  "title": "Heraldscotland -  food &amp; drink",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishFoodDrinkNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed5a"),
  "title": "Heraldscotland -  fashion &amp; beauty",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishFashionBeautyNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed5b"),
  "title": "Heraldscotland -  business",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishBusinessNews",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed5c"),
  "title": "Heraldscotland -  entertainment",
  "groupname": "Heraldscotland",
  "updateurl": "http://feeds.feedburner.com/ScottishArtsEntertainmentNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed5d"),
  "title": "Belfast Newsletter - local sport",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1595040",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed5e"),
  "title": "Belfast Newsletter - national sport",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1595041",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed5f"),
  "title": "Berwick Advertiser - North East news",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.51601",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed60"),
  "title": "Berwick Advertiser - national news",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.51699",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0114c321d3be0004ed61"),
  "title": "Berwick Advertiser - NHS news",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.51607",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed62"),
  "title": "Berwick Advertiser - business news",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.51603",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed63"),
  "title": "Berwick Advertiser - local sport",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.285496",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed64"),
  "title": "Berwick Advertiser - North East sport",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.285498",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed65"),
  "title": "Berwick Advertiser - lifestyle",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.2230472",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed66"),
  "title": "Thespec - business",
  "groupname": "Thespec",
  "updateurl": "http://www.thespec.com/rss?query=/news/business&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed67"),
  "title": "Berwick Advertiser - showbiz",
  "groupname": "Berwick Advertiser",
  "updateurl": "http://www.berwick-advertiser.co.uk/cmlink/1.51605",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed68"),
  "title": "Melton Times - local news",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3217982",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed69"),
  "title": "Jarrow and hebburn gazette - national sport",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.2928726",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed6a"),
  "title": "Melton Times - Health",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3217986",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed6b"),
  "title": "TheAustralian - politics",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.news.com.au/tigerspike/rss/rss_aus_politics_2340.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed6c"),
  "title": "Melton Times - national news",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3217991",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed6d"),
  "title": "Melton Times - football",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3217992",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed6e"),
  "title": "Melton Times - cricket",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3217993",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed6f"),
  "title": "Melton Times - cricket",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3217999",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed70"),
  "title": "Melton Times - arts",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.3218000",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed71"),
  "title": "Sportsnet - hockey",
  "groupname": "Sportsnet",
  "updateurl": "http://www.sportsnet.ca/hockey/index-pics-ontario.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00eac321d3be0004ea71"),
  "title": "Mrfood.com",
  "groupname": "Mrfood.com",
  "updateurl": "http://www.mrfood.com/rss-feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb66"),
  "title": "Stv - sports",
  "groupname": "Stv",
  "updateurl": "http://sport.stv.tv/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00f8c321d3be0004eb67"),
  "title": "Stv - Scotland",
  "groupname": "Stv",
  "updateurl": "http://news.stv.tv/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed72"),
  "title": "Melton Times - showbiz",
  "groupname": "Melton Times",
  "updateurl": "http://www.meltontimes.co.uk/cmlink/1.344119",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0115c321d3be0004ed73"),
  "title": "Leightonbuzzardonline - local news",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.2859997",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed74"),
  "title": "Leightonbuzzardonline - entertainment news",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1214878",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed75"),
  "title": "Leightonbuzzardonline - regional news",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.344930",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed76"),
  "title": "Kenilworth weekly news - entertainment",
  "groupname": "Kenilworth weekly news",
  "updateurl": "http://www.kenilworthweeklynews.co.uk/cmlink/1.1157252",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed77"),
  "title": "Leightonbuzzardonline - national news",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1103333",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed78"),
  "title": "Leightonbuzzardonline - footboll",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1214880",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed79"),
  "title": "Leightonbuzzardonline - rugby",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1214883",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed7a"),
  "title": "Leightonbuzzardonline - other sport",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1214893",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed7b"),
  "title": "Leightonbuzzardonline - national sport",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1214894",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed7c"),
  "title": "Jarrow and hebburn gazette - Politics",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.2928702",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed7d"),
  "title": "Leightonbuzzardonline - leissure",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.1214895",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed7e"),
  "title": "Canoe - world",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/CNEWS/World/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed7f"),
  "title": "Leightonbuzzardonline - showbiz",
  "groupname": "Leightonbuzzardonline",
  "updateurl": "http://www.leightonbuzzardonline.co.uk/cmlink/1.344934",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed80"),
  "title": "The Star - local news",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938901",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed81"),
  "title": "The Star - regional news",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.41627",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed82"),
  "title": "The Star - national news",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.41725",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed83"),
  "title": "The Star - business",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938902",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0116c321d3be0004ed84"),
  "title": "The Star - health",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938904",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed85"),
  "title": "Newsaustralia - world news",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.feedburner.com/newscomauworldnewsndm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed86"),
  "title": "The Star - footbal",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938905",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed87"),
  "title": "The Star - national sport",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938912",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed88"),
  "title": "The Star - ice hockey",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938914",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed89"),
  "title": "The Star - music news",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.co.uk/cmlink/1.2938928",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed8a"),
  "title": "Echo news - news",
  "groupname": "Echo news",
  "updateurl": "http://www.echo-news.co.uk/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed8b"),
  "title": "Echo news - sport",
  "groupname": "Echo news",
  "updateurl": "http://www.echo-news.co.uk/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed8c"),
  "title": "Echo news - national news",
  "groupname": "Echo news",
  "updateurl": "http://www.echo-news.co.uk/uk_national_news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed8d"),
  "title": "Echo news - national sport",
  "groupname": "Echo news",
  "updateurl": "http://www.echo-news.co.uk/uk_national_sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed8e"),
  "title": "Echo news - entertainment news",
  "groupname": "Echo news",
  "updateurl": "http://www.echo-news.co.uk/uk_national_entertainment/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed8f"),
  "title": "Torontosun - Ontario stories",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/news/ontario/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed90"),
  "title": "Eveningexpress - news",
  "groupname": "Eveningexpress",
  "updateurl": "http://www.eveningexpress.co.uk/RSS.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed91"),
  "title": "The journal - news",
  "groupname": "The journal",
  "updateurl": "http://www.thejournal.ie/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed92"),
  "title": "Kenilworth weekly news - health",
  "groupname": "Kenilworth weekly news",
  "updateurl": "http://www.kenilworthweeklynews.co.uk/cmlink/1.382393",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed93"),
  "title": "Jarrow and hebburn gazette - footbal news",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.2928704",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed94"),
  "title": "Belfast Newsletter - football news",
  "groupname": "Belfast Newsletter",
  "updateurl": "http://www.newsletter.co.uk/cmlink/1.1595038",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed95"),
  "title": "Jarrow and hebburn gazette - showbiz",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.1500100",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed96"),
  "title": "Jarrow and hebburn gazette - entertainment",
  "groupname": "Jarrow and hebburn gazette",
  "updateurl": "http://www.jarrowandhebburngazette.com/cmlink/1.2928727",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0117c321d3be0004ed97"),
  "title": "Hartlepool mail - local news",
  "groupname": "Hartlepool mail",
  "updateurl": "http://www.hartlepoolmail.co.uk/cmlink/1.1547470",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed98"),
  "title": "Msncanada - monreal news",
  "groupname": "Msncanada",
  "updateurl": "http://news.ca.msn.com/rss/montreal.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed99"),
  "title": "Hartlepool mail - national news",
  "groupname": "Hartlepool mail",
  "updateurl": "http://www.hartlepoolmail.co.uk/cmlink/1.978057",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed9a"),
  "title": "Edmontonsun - edmonton news",
  "groupname": "Edmontonsun",
  "updateurl": "http://www.edmontonsun.com/news/edmonton/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed9b"),
  "title": "Hartlepoolmail - health",
  "groupname": "Hartlepoolmail",
  "updateurl": "http://www.hartlepoolmail.co.uk/cmlink/1.977965",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed9c"),
  "title": "Buckinghamtoday - Buckingham news",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.3029438",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed9d"),
  "title": "Cbc canada - arts",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/arts.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed9e"),
  "title": "Buckinghamtoday -Bicester news",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.1155580",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004ed9f"),
  "title": "Buckinghamtoday - Towcester news",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.1155582",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda0"),
  "title": "Buckinghamtoday -  Winslow news",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.1155583",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda1"),
  "title": "Buckinghamtoday - business",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.1155585",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda2"),
  "title": "Buckinghamtoday - regional news",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.334467",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda3"),
  "title": "Buckinghamtoday -  entertainment",
  "groupname": "Buckinghamtoday",
  "updateurl": "http://www.buckinghamtoday.co.uk/cmlink/1.1155601",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda4"),
  "title": "Lancasterguardian - enetertainment",
  "groupname": "Lancasterguardian",
  "updateurl": "http://www.lancasterguardian.co.uk/cmlink/1.4036519",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda5"),
  "title": "Miltonkeynes - business",
  "groupname": "Miltonkeynes",
  "updateurl": "http://www.miltonkeynes.co.uk/cmlink/1.1672476",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda6"),
  "title": "Miltonkeynes - lifestyle",
  "groupname": "Miltonkeynes",
  "updateurl": "http://www.miltonkeynes.co.uk/cmlink/1.345327",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda7"),
  "title": "Burnley express - business",
  "groupname": "Burnley express",
  "updateurl": "http://www.burnleyexpress.net/cmlink/1.1564861",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda8"),
  "title": "Burnley express - showbiz",
  "groupname": "Burnley express",
  "updateurl": "http://www.burnleyexpress.net/cmlink/1.6502",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0118c321d3be0004eda9"),
  "title": "Burnley express - sport",
  "groupname": "Burnley express",
  "updateurl": "http://www.burnleyexpress.net/cmlink/1.6519",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edaa"),
  "title": "Burnley express - entertainment",
  "groupname": "Burnley express",
  "updateurl": "http://www.burnleyexpress.net/cmlink/1.6494",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edab"),
  "title": "Egovmonitor - u.k. news",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/announcement/51/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edac"),
  "title": "Egovmonitor - europe news",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/announcement/52/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edad"),
  "title": "Egovmonitor - Latest Features",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/feature/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edae"),
  "title": "Egovmonitor - international news",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/announcement/53/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edaf"),
  "title": "Egovmonitor - Economy and Business",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/announcement/54/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb0"),
  "title": "Egovmonitor - health",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/announcement/17/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb1"),
  "title": "Egovmonitor - Technology &amp; Innovation",
  "groupname": "Egovmonitor",
  "updateurl": "http://www.egovmonitor.com/list/announcement/61/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb2"),
  "title": "Torontosun - national news",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/news/canada/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb3"),
  "title": "Bdaily - business",
  "groupname": "Bdaily",
  "updateurl": "http://bdaily.co.uk/feeds/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb4"),
  "title": "Msncanada - sports",
  "groupname": "Msncanada",
  "updateurl": "http://ca.msn.com/rss/sports.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb5"),
  "title": "Lethbridgeherald - local news",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/local-news/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb6"),
  "title": "Msncanada - Calgary news",
  "groupname": "Msncanada",
  "updateurl": "http://news.ca.msn.com/rss/calgary.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb7"),
  "title": "Science.gc - news",
  "groupname": "Science.gc",
  "updateurl": "http://blogs.science.gc.ca/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb8"),
  "title": "Msncanada -cbchockey news",
  "groupname": "Msncanada",
  "updateurl": "http://sports.ca.msn.com/rss/cbchockey.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edb9"),
  "title": "Cbc canada - technology",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/technology.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edba"),
  "title": "The Record - local news",
  "groupname": "The Record",
  "updateurl": "http://www.therecord.com/rss?query=/news/local&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0119c321d3be0004edbb"),
  "title": "Msncanada - cbs-canada news",
  "groupname": "Msncanada",
  "updateurl": "http://news.ca.msn.com/rss/cbc-canada.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edbc"),
  "title": "Msncanada - cp-hockey news",
  "groupname": "Msncanada",
  "updateurl": "http://sports.ca.msn.com/rss/cphockey.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edbd"),
  "title": "Cbc canada -politics",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/politics.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edbe"),
  "title": "Msncanada - Toronto news",
  "groupname": "Msncanada",
  "updateurl": "http://news.ca.msn.com/rss/toronto.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edbf"),
  "title": "Cbc canada - business",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc0"),
  "title": "Msncanada - entertainment",
  "groupname": "Msncanada",
  "updateurl": "http://ca.msn.com/rss/entertainment.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc1"),
  "title": "Msncanada - lifestyle",
  "groupname": "Msncanada",
  "updateurl": "http://ca.msn.com/rss/lifestyle.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc2"),
  "title": "Cbc canada -world",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/world.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc3"),
  "title": "Torontoist - news",
  "groupname": "Torontoist",
  "updateurl": "http://torontoist.com/tag/news/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc4"),
  "title": "Msncanada - Edmonton  news",
  "groupname": "Msncanada",
  "updateurl": "http://news.ca.msn.com/rss/edmonton.aspx",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc5"),
  "title": "Cbc canada - national",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc6"),
  "title": "Cbc canada - sports",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/sports.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc7"),
  "title": "FoxsportAustarlia - rugby",
  "groupname": "FoxsportAustarlia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/fs_rugby_union_19.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc8"),
  "title": "Cbc canada - Toronto news",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-toronto.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edc9"),
  "title": "Cbc canada - Monreal news",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-montreal.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edca"),
  "title": "Cbc canada - north news",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-north.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edcb"),
  "title": "Cbc canada - ottawa news",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-ottawa.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edcc"),
  "title": "Cbc canada - Saskatchewan News",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-saskatchewan.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ac321d3be0004edcd"),
  "title": "Cbc canada - Newfoundland and Labrador News",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-newfoundland.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edce"),
  "title": "Cbc canada -  Prince Edward Island",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-pei.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edcf"),
  "title": "Ottawa Citizen - technology",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F7813",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd0"),
  "title": "Cbc canada - novascotia  news",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-novascotia.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd1"),
  "title": "Cbc canada - britishcolumbia news",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-britishcolumbia.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd2"),
  "title": "Cbc canada - Manitoba News",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-manitoba.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd3"),
  "title": "Cbc canada -  Thunder Bay News",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-thunderbay.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd4"),
  "title": "Cbc canada - sudbury",
  "groupname": "Cbc canada",
  "updateurl": "http://rss.cbc.ca/lineup/canada-sudbury.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd5"),
  "title": "Nationalpost - national news",
  "groupname": "Nationalpost",
  "updateurl": "http://www.nationalpost.com/news/canada/17096.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd6"),
  "title": "Nationalpost - world news",
  "groupname": "Nationalpost",
  "updateurl": "http://feeds.feedburner.com/NPWorld?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd7"),
  "title": "Nationalpost -  Canada news",
  "groupname": "Nationalpost",
  "updateurl": "http://news.nationalpost.com/category/news/canada/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd8"),
  "title": "Nationalpost - life",
  "groupname": "Nationalpost",
  "updateurl": "http://www.nationalpost.com/life/17126.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edd9"),
  "title": "Nationalpost - sport",
  "groupname": "Nationalpost",
  "updateurl": "http://feeds.feedburner.com/NPSports?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edda"),
  "title": "Financialpost - economy",
  "groupname": "Financialpost",
  "updateurl": "http://business.financialpost.com/category/news/economy/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004eddb"),
  "title": "Financialpost - business",
  "groupname": "Financialpost",
  "updateurl": "http://business.financialpost.com/category/business-insider/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004eddc"),
  "title": "Financialpost - personal finance",
  "groupname": "Financialpost",
  "updateurl": "http://business.financialpost.com/category/personal-finance/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004eddd"),
  "title": "Newsaustralia - money",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/news_money_505.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004edde"),
  "title": "Windsor Star - Windsor news",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F286",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011bc321d3be0004eddf"),
  "title": "Windsor Star - national news",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F238",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede0"),
  "title": "Windsor Star - entertainment",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F289",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede1"),
  "title": "Calgary Herald - politics",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F7551",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede2"),
  "title": "Windsor Star - travel",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F7605",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede3"),
  "title": "Windsor Star - life",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F7620",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede4"),
  "title": "Windsor Star - health",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F7625",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede5"),
  "title": "Macleans - business news",
  "groupname": "Macleans",
  "updateurl": "http://www2.macleans.ca/category/business/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede6"),
  "title": "Windsor Star - sport",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F287",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede7"),
  "title": "Windsor Star - business",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F288",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede8"),
  "title": "Windsor Star - technology",
  "groupname": "Windsor Star",
  "updateurl": "http://rss.canada.com/get/?F7642",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004ede9"),
  "title": "Ottawa Citizen - health",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F7796",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edea"),
  "title": "Thestar - national news",
  "groupname": "Thestar",
  "updateurl": "http://www.thestar.com/rss/97467?categories=312",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edeb"),
  "title": "The Star - politics",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss/944149?categories=6996",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edec"),
  "title": "The Star - world",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss?categories=313",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004eded"),
  "title": "The Star - Toronto news",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss?categories=309",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edee"),
  "title": "The Star - Ontario news",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss/97449?categories=311",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edef"),
  "title": "Canoe - national",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/CNEWS/Canada/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edf0"),
  "title": "The Star - travel",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss/82858?",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edf1"),
  "title": "The Star - sport",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss?categories=295",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011cc321d3be0004edf2"),
  "title": "The Star - technology",
  "groupname": "The Star",
  "updateurl": "http://www.thestar.com/rss?categories=6484",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf3"),
  "title": "Macleans - arts",
  "groupname": "Macleans",
  "updateurl": "http://www2.macleans.ca/category/arts/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf4"),
  "title": "Montrealgazette - local news",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F242",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf5"),
  "title": "Montrealgazette - national",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F7364",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf6"),
  "title": "Montrealgazette - world news",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F7365",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf7"),
  "title": "Montrealgazette - entertainment",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F7366",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf8"),
  "title": "Montrealgazette - life",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F6934",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edf9"),
  "title": "Edmontonsun - alberta news",
  "groupname": "Edmontonsun",
  "updateurl": "http://www.edmontonsun.com/news/alberta/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edfa"),
  "title": "Torontosun - world news",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/news/world/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edfb"),
  "title": "Montrealgazette - health",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F7397",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edfc"),
  "title": "Montrealgazette - sports",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F299",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edfd"),
  "title": "Montrealgazette - business",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F6939",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edfe"),
  "title": "Montrealgazette - technology",
  "groupname": "Montrealgazette",
  "updateurl": "http://rss.canada.com/get/?F7411",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004edff"),
  "title": "Winnipeg Free press - business",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fbusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004ee00"),
  "title": "Winnipeg Free press - finance",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fbusiness%2Ffinance",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004ee01"),
  "title": "Winnipeg Free press - local news",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Flocal",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004ee02"),
  "title": "Winnipeg Free press - national news",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fcanada",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004ee03"),
  "title": "Winnipeg Free press - world",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fworld",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011dc321d3be0004ee04"),
  "title": "Winnipeg Free press - Bomber Report",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fsports%2Ffootball%2Fbombers",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee05"),
  "title": "Winnipeg Free press - Basketball",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fsports%2Fbasketball",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee06"),
  "title": "Winnipeg Free press - footbal",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fsports%2Ffootball",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee07"),
  "title": "Winnipeg Free press -  hockey",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fsports%2Fhockey",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee08"),
  "title": "Winnipeg Free press -  tennis",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fsports%2Ftennis",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee09"),
  "title": "Winnipeg Free press - Basetball",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Fsports%2Fbaseball",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee0a"),
  "title": "FoxsportAustralia - motorsport",
  "groupname": "FoxsportAustralia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/fs_motor_sports_17.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee0b"),
  "title": "Winnipeg Free press -  arts",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Farts-and-life%2Fentertainment%2Farts",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee0c"),
  "title": "Winnipeg Free press -  music news",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Farts-and-life%2Fentertainment%2Fmusic",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee0d"),
  "title": "Winnipeg Free press -  tv",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Farts-and-life%2Fentertainment%2FTV",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee0e"),
  "title": "Winnipeg Free press -  travel",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Ftravel",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee0f"),
  "title": "Winnipeg Free press -  life",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Farts-and-life%2Flife",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee10"),
  "title": "Winnipeg Free press -  health",
  "groupname": "Winnipeg Free press",
  "updateurl": "http://www.winnipegfreepress.com/rss/?path=%2Farts-and-life%2Flife%2Fhealth",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee11"),
  "title": "Macleans - national news",
  "groupname": "Macleans",
  "updateurl": "http://www2.macleans.ca/category/canada/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee12"),
  "title": "Torontosun - Toronto &amp; GTA news",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/news/toronto-and-gta/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee13"),
  "title": "Vancouver Sun - Vancouver news",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F259",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee14"),
  "title": "Thespec - nanional news",
  "groupname": "Thespec",
  "updateurl": "http://www.thespec.com/rss?query=/news/canada&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee15"),
  "title": "Vancouver Sun - national news",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F7431",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011ec321d3be0004ee16"),
  "title": "Torontosun - Tech news",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/tech/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee17"),
  "title": "Vancouver Sun - world news",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F7432",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee18"),
  "title": "Vancouver Sun - entertainment",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F6962",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee19"),
  "title": "Calgary Herald - national news",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F7552",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee1a"),
  "title": "Vancouver Sun - life",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F6966",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee1b"),
  "title": "Vancouver Sun - travel",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F7439",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee1c"),
  "title": "Vancouver Sun - health",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F7462",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee1d"),
  "title": "Vancouver Sun - sports",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F260",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee1e"),
  "title": "Vancouver Sun - business",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F7477",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee1f"),
  "title": "Vancouver Sun - Technology",
  "groupname": "Vancouver Sun",
  "updateurl": "http://rss.canada.com/get/?F7481",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee20"),
  "title": "Ottawa Citizen - Ottawa news",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F291",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee21"),
  "title": "Ottawa Citizen - national news",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F7765",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee22"),
  "title": "Ottawa Citizen - world news",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F7766",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee23"),
  "title": "Ottawa Citizen - entertainment",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F294",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee24"),
  "title": "Ottawa Citizen - travel",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F7773",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee25"),
  "title": "Rds - hokcey",
  "groupname": "Rds",
  "updateurl": "http://www.rds.ca/hockey/fildepresse_rds.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee26"),
  "title": "Torontosun - travel",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/travel/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee27"),
  "title": "Sportsnet - autoracing",
  "groupname": "Sportsnet",
  "updateurl": "http://www.sportsnet.ca/autoracing/index-pics-ontario.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e011fc321d3be0004ee28"),
  "title": "Torontosun - life news",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/life/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee29"),
  "title": "Torontosun - entertainment",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/entertainment/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee2a"),
  "title": "Ottawa Citizen - business",
  "groupname": "Ottawa Citizen",
  "updateurl": "http://rss.canada.com/get/?F293",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee2b"),
  "title": "Torontosun - sports",
  "groupname": "Torontosun",
  "updateurl": "http://www.torontosun.com/sports/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee2c"),
  "title": "Calgary Herald - entertainment",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F271",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee2d"),
  "title": "Calgary Herald - life",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F6911",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee2e"),
  "title": "Calgary Herald - health",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F6918",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee2f"),
  "title": "Calgary Herald - sports",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F273",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee30"),
  "title": "Calgary Herald - business",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F272",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee31"),
  "title": "Calgary Herald - Technology",
  "groupname": "Calgary Herald",
  "updateurl": "http://rss.canada.com/get/?F6914",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee32"),
  "title": "Calgarysun - alberta news",
  "groupname": "Calgarysun",
  "updateurl": "http://www.calgarysun.com/news/alberta/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee33"),
  "title": "Calgarysun - Calgary news",
  "groupname": "Calgarysun",
  "updateurl": "http://www.calgarysun.com/news/calgary/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee34"),
  "title": "Castanet - Kelowna",
  "groupname": "Castanet",
  "updateurl": "http://www.castanet.net/rss/page-1.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee35"),
  "title": "Castanet - West Kelowna",
  "groupname": "Castanet",
  "updateurl": "http://www.castanet.net/rss/page-101.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee36"),
  "title": "Castanet - national news",
  "groupname": "Castanet",
  "updateurl": "http://www.castanet.net/rss/page-4.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee37"),
  "title": "Castanet - world news",
  "groupname": "Castanet",
  "updateurl": "http://www.castanet.net/rss/page-5.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee38"),
  "title": "Castanet - entertainment",
  "groupname": "Castanet",
  "updateurl": "http://www.castanet.net/rss/page-8.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee39"),
  "title": "Newsaustralia - travel",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/trav_travelnews_512.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0120c321d3be0004ee3a"),
  "title": "Sportsnet - tennis",
  "groupname": "Sportsnet",
  "updateurl": "http://www.sportsnet.ca/tennis/index-pics-ontario.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee3b"),
  "title": "Times Colonist - local news",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F249",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee3c"),
  "title": "Times Colonist - Travel",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F7658",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee3d"),
  "title": "Times Colonist - Life",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F252",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee3e"),
  "title": "Times Colonist - Health",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F7679",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee3f"),
  "title": "Times Colonist - Sports",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F250",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee40"),
  "title": "Times Colonist - business",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F251",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee41"),
  "title": "Times Colonist - Technology",
  "groupname": "Times Colonist",
  "updateurl": "http://rss.canada.com/get/?F7698",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee42"),
  "title": "Straight - news",
  "groupname": "Straight",
  "updateurl": "http://www.straight.com/content/rss/news-and-views",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee43"),
  "title": "The Record - sports news",
  "groupname": "The Record",
  "updateurl": "http://www.therecord.com/rss?query=/sports/local&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee44"),
  "title": "Straight - technology",
  "groupname": "Straight",
  "updateurl": "http://www.straight.com/content/rss/technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee45"),
  "title": "Straight - arts",
  "groupname": "Straight",
  "updateurl": "http://www.straight.com/content/rss/arts",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee46"),
  "title": "Straight - lifestyle",
  "groupname": "Straight",
  "updateurl": "http://www.straight.com/content/rss/lifestyle",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee47"),
  "title": "Edmonton Journal - news  edmonton &amp; alberta",
  "groupname": "Edmonton Journal",
  "updateurl": "http://rss.canada.com/get/?F231",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee48"),
  "title": "Edmonton Journal -  National news",
  "groupname": "Edmonton Journal",
  "updateurl": "http://rss.canada.com/get/?F7709",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee49"),
  "title": "Edmonton Journal - Travel",
  "groupname": "Edmonton Journal",
  "updateurl": "http://rss.canada.com/get/?F7716",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee4a"),
  "title": "Edmonton Journal - health",
  "groupname": "Edmonton Journal",
  "updateurl": "http://rss.canada.com/get/?F7738",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee4b"),
  "title": "Edmonton Journal - Technology",
  "groupname": "Edmonton Journal",
  "updateurl": "http://rss.canada.com/get/?F7756",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee4c"),
  "title": "Rds - boxe",
  "groupname": "Rds",
  "updateurl": "http://www.rds.ca/boxe/fildepresse_rds.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0121c321d3be0004ee4d"),
  "title": "CNW - general news",
  "groupname": "CNW",
  "updateurl": "http://rss.newswire.ca/en/newswire/rls_a_en.xml?67FBB17C8AE211E18B4DCC7957AE55BA",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee4e"),
  "title": "CNW -  financial news",
  "groupname": "CNW",
  "updateurl": "http://rss.newswire.ca/en/newswire/rls_f_en.xml?67FBB17C8AE211E18B4DCC7957AE55BA",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee4f"),
  "title": "Tsn - news",
  "groupname": "Tsn",
  "updateurl": "http://www.tsn.ca/datafiles/rss/Stories.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee50"),
  "title": "Winnipegsun - Winnipeg",
  "groupname": "Winnipegsun",
  "updateurl": "http://www.winnipegsun.com/news/winnipeg/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee51"),
  "title": "Winnipegsun - Manitoba news",
  "groupname": "Winnipegsun",
  "updateurl": "http://www.winnipegsun.com/news/manitoba/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee52"),
  "title": "Citytv - Toronto news",
  "groupname": "Citytv",
  "updateurl": "http://www.citytv.com/toronto/citynews/news/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee53"),
  "title": "Citytv - life",
  "groupname": "Citytv",
  "updateurl": "http://www.citytv.com/toronto/citynews/life/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee54"),
  "title": "Citytv - sports",
  "groupname": "Citytv",
  "updateurl": "http://www.citytv.com/toronto/citynews/sports/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee55"),
  "title": "The Record - national news",
  "groupname": "The Record",
  "updateurl": "http://www.therecord.com/rss?query=/news/canada&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee56"),
  "title": "Huffingtonpost - canada sports",
  "groupname": "Huffingtonpost canada",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/canada-sports/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee57"),
  "title": "Lethbridgeherald - business",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/business/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee58"),
  "title": "Thespec - world",
  "groupname": "Thespec",
  "updateurl": "http://www.thespec.com/rss?query=/news/world&amp;assetType=Article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee59"),
  "title": "Canoe - science",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/CNEWS/Science/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee5a"),
  "title": "Canoe - life",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/Lifewise/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee5b"),
  "title": "Rds - tenis",
  "groupname": "Rds",
  "updateurl": "http://www.rds.ca/tennis/fildepresse_rds.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee5c"),
  "title": "News1130 - national news",
  "groupname": "News1130",
  "updateurl": "http://www.news1130.com/news/national/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee5d"),
  "title": "News1130 - local news",
  "groupname": "News1130",
  "updateurl": "http://www.news1130.com/news/local/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee5e"),
  "title": "News1130 - sport",
  "groupname": "News1130",
  "updateurl": "http://www.news1130.com/sports/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0122c321d3be0004ee5f"),
  "title": "Sunnewsnetwork - politics",
  "groupname": "Sunnewsnetwork",
  "updateurl": "http://www.sunnewsnetwork.ca/rss/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee60"),
  "title": "Standard Freeholder - cornwall news",
  "groupname": "Standard F reeholder",
  "updateurl": "http://www.standard-freeholder.com/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee61"),
  "title": "The barrie examiner - news",
  "groupname": "The Barrie Examiner",
  "updateurl": "http://www.thebarrieexaminer.com/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee62"),
  "title": "Canoe - Technology",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/Technology/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee63"),
  "title": "Canadianbusiness - news",
  "groupname": "Canadianbusiness",
  "updateurl": "http://www.canadianbusiness.com/rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee64"),
  "title": "Moneysense - news",
  "groupname": "Moneysense",
  "updateurl": "http://www.moneysense.ca/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee65"),
  "title": "Adelaide now - travel",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_travel_192.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee66"),
  "title": "Canoe - travel",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/Travel/News/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee67"),
  "title": "Newsaustralia - national news",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.feedburner.com/newscomaunationalbreakingnewsndm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee68"),
  "title": "Sportsnet - basketball",
  "groupname": "Sportsnet",
  "updateurl": "http://www.sportsnet.ca/basketball/index-pics-ontario.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee69"),
  "title": "Sportsnet - baseball",
  "groupname": "Sportsnet",
  "updateurl": "http://www.sportsnet.ca/baseball/index-pics-ontario.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee6a"),
  "title": "Environment Canada - news",
  "groupname": "Environment Canada",
  "updateurl": "http://www.ec.gc.ca/default.asp?lang=En&amp;SyndFeed=714D9AAE-4360-4B63-A5D5-459FE28601C9",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee6c"),
  "title": "Sportsnet - juniots hockey",
  "groupname": "Sportsnet",
  "updateurl": "http://www.sportsnet.ca/hockey/juniors/index-pics-ontario.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee6d"),
  "title": "News center - national news",
  "groupname": "News center",
  "updateurl": "http://news.gc.ca/web/rss-eng.do?mthd=ntnl",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee6e"),
  "title": "News centre - business",
  "groupname": "News centre",
  "updateurl": "http://news.gc.ca/web/rss-eng.do?mthd=aud&amp;crtr.aud1D=2",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee6f"),
  "title": "News center - goverment news",
  "groupname": "News center",
  "updateurl": "http://news.gc.ca/web/rss-eng.do?mthd=aud&amp;crtr.aud1D=7",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee70"),
  "title": "News center - ontario",
  "groupname": "News center",
  "updateurl": "http://news.gc.ca/web/rss-eng.do?mthd=prvcl&amp;crtr.lc1D=6",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee71"),
  "title": "News center - Quebec",
  "groupname": "News center",
  "updateurl": "http://news.gc.ca/web/rss-eng.do?mthd=prvcl&amp;crtr.lc1D=5",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee72"),
  "title": "News center - travellers",
  "groupname": "News center",
  "updateurl": "http://news.gc.ca/web/rss-eng.do?mthd=aud&amp;crtr.aud1D=16",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee73"),
  "title": "Newsaustralia - Midleeast",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.feedburner.com/newscomaumiddleeastndm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee74"),
  "title": "FoxsportAustralia - footbal",
  "groupname": "FoxsportAustralia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/fs_football_20.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee75"),
  "title": "Phys - nanotechnology news",
  "groupname": "Phys",
  "updateurl": "http://phys.org/rss-feed/breaking/nanotech-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee76"),
  "title": "Phys - Space &amp; Earth News",
  "groupname": "Phys",
  "updateurl": "http://phys.org/rss-feed/breaking/space-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee77"),
  "title": "TheAustralian - lfood&amp;wine",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianExecutiveLifestyleFoodAndWine?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee79"),
  "title": "Adelaide now -national news",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_national_188.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee7a"),
  "title": "Newstalk - local news",
  "groupname": "Newstalk",
  "updateurl": "http://www.newstalk1010.com/_shared/blogs/RSS/blogrss.aspx?BlogID=1002326",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee7b"),
  "title": "Newsaustarlia - business",
  "groupname": "NewsAustarlia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/business_breaking_news_611.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee7c"),
  "title": "Newsaustarlia - western australia",
  "groupname": "NewsAustarlia",
  "updateurl": "http://feeds.feedburner.com/newscomauwandm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee7d"),
  "title": "Toronto.com - arts",
  "groupname": "Toronto.com",
  "updateurl": "http://www.toronto.com/rss?categories=5454",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee7e"),
  "title": "Toronto.com - music",
  "groupname": "Toronto.com",
  "updateurl": "http://www.toronto.com/rss?categories=5618",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee7f"),
  "title": "Toronto.com - resturants",
  "groupname": "Toronto.com",
  "updateurl": "http://www.toronto.com/article/723869--sliced-gourmet-review",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee80"),
  "title": "Toronto.ca -  Toronto news",
  "groupname": "Toronto.ca",
  "updateurl": "http://wx.toronto.ca/inter/it/newsrel.nsf/CityofTorontoNews.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee81"),
  "title": "Huffingtonpost - canada business",
  "groupname": "Huffingtonpost canada",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/canada-business/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee82"),
  "title": "Toronto Blue Jays News",
  "groupname": "Toronto Blue Jays",
  "updateurl": "http://mlb.mlb.com/partnerxml/gen/news/rss/tor.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee83"),
  "title": "Lethbridgeherald - entertainment",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/entertainment/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee84"),
  "title": "Huffingtonpost - canada politics",
  "groupname": "Huffingtonpost canada",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/canada-politics/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee85"),
  "title": "Lethbridgeherald - sport",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/local-sports/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee86"),
  "title": "Lethbridgeherald - Provincial News",
  "groupname": "Lethbridgeherald",
  "updateurl": "http://www.lethbridgeherald.com/alberta-news/feed/rss.html",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee87"),
  "title": "Adelaide now - sport",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_sport_190.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee88"),
  "title": "ABC Australia - Australian Capital Territory news",
  "groupname": "ABC  Australia",
  "updateurl": "http://www.abc.net.au/news/feed/48320/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee89"),
  "title": "Newsaustralia - africa",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.feedburner.com/newscomauafricandm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee8a"),
  "title": "CJAD - local",
  "groupname": "CJAD",
  "updateurl": "http://www.cjad.com/_shared/blogs/RSS/blogrss.aspx?BlogID=1002658",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee8b"),
  "title": "Huffingtonpost - canada lifestyle",
  "groupname": "Huffingtonpost canada",
  "updateurl": "http://www.huffingtonpost.com/feeds/verticals/canada-lifestyle/news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee8c"),
  "title": "Adelaide now - music news",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_music_451.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee8d"),
  "title": "Newsaustralia - technology",
  "groupname": "NewsaAustralia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/news_tech_506.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee8e"),
  "title": "Sky News Australia - health",
  "groupname": "Sky News Australia",
  "updateurl": "http://rss.skynews.com.au/c/34485/f/628642/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee8f"),
  "title": "Sky News Australia - eco",
  "groupname": "Sky News Australia",
  "updateurl": "http://rss.skynews.com.au/c/34485/f/628641/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee90"),
  "title": "The Sudbury star - local news",
  "groupname": "The Sudbury star",
  "updateurl": "http://www.thesudburystar.com/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee91"),
  "title": "FoxsportAustarlia - golf",
  "groupname": "FoxsportAustarlia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/fs_golf_16.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee94"),
  "title": "Newsaustarlia - entertainment",
  "groupname": "NewsAustarlia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/ent_top-stories_294.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee95"),
  "title": "Stcatharinesstandard - local news",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/news/local/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee96"),
  "title": "Stcatharinesstandard - Ontario news",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/news/provincial/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee97"),
  "title": "Stcatharinesstandard - national news",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/news/canada/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee98"),
  "title": "Stcatharinesstandard - world",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/news/world/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee99"),
  "title": "Stcatharinesstandard - sports",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/sports/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee9a"),
  "title": "Stcatharinesstandard - entertainment",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/entertainment/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee9b"),
  "title": "Stcatharinesstandard - life",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/life/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee9c"),
  "title": "Stcatharinesstandard - money",
  "groupname": "Stcatharinesstandard",
  "updateurl": "http://www.stcatharinesstandard.ca/money/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee9d"),
  "title": "Newsaustralia - south australia",
  "groupname": "NewsAustralia",
  "updateurl": "http://feeds.feedburner.com/newscomausandm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee9e"),
  "title": "News Australia - europe",
  "groupname": "News Australia",
  "updateurl": "http://feeds.feedburner.com/newscomaueuropendm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004ee9f"),
  "title": "Msn Austarlia",
  "groupname": "Msn Austarlia",
  "updateurl": "http://data.9msn.com.au/Services/Service.axd/feeds/rss/news/national",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea0"),
  "title": "Msn Austarlia - technology",
  "groupname": "Msn Austarlia",
  "updateurl": "http://news.ninemsn.com.au/rss/scitech/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea1"),
  "title": "Msn Austarlia - business",
  "groupname": "Msn Austarlia",
  "updateurl": "http://data.9msn.com.au/Services/Service.axd/feeds/rss/news/business",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea2"),
  "title": "Msn Austarlia - sport",
  "groupname": "Msn Austarlia",
  "updateurl": "http://data.9msn.com.au/Services/Service.axd/feeds/rss/news/sport",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea3"),
  "title": "Telegraph Australia - world news",
  "groupname": "Telegraph Australia",
  "updateurl": "http://feeds.feedburner.com/dailytelegraphworldnewsndm?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea4"),
  "title": "Sky News Australia - business",
  "groupname": "Sky News Australia",
  "updateurl": "http://rss.skynews.com.au/c/34485/f/628637/index.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea5"),
  "title": "ABC Australia - national news",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/46182/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea6"),
  "title": "ABC Australia - Tasmania news",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/50042/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea7"),
  "title": "ABC Australia - South Australia news",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/54702/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0126c321d3be0004eea8"),
  "title": "ABC  Australia - business",
  "groupname": "ABC  Australia",
  "updateurl": "http://www.abc.net.au/news/feed/51892/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eea9"),
  "title": "ABC Australia - world news",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/52278/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeaa"),
  "title": "TheAustralian - national newws",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianTheNationNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeab"),
  "title": "Sidney Morning Herald - business",
  "groupname": "Sidney Morning Herald",
  "updateurl": "http://www.smh.com.au/rssheadlines/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeac"),
  "title": "TheAustralian - world news",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianTheWorld?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eead"),
  "title": "TheAustralian - local news",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianNewsNDM?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeae"),
  "title": "Sidney Morning Herald - national news",
  "groupname": "Sidney Morning Herald",
  "updateurl": "http://feeds.smh.com.au/rssheadlines/national.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeaf"),
  "title": "TheAustralian - world business",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianBusinessWorldBusNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb0"),
  "title": "Sidney Morning Herald - world news",
  "groupname": "Sidney Morning Herald",
  "updateurl": "http://feeds.smh.com.au/rssheadlines/world.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb1"),
  "title": "Adelaide now - SANFL",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_safl_189.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb2"),
  "title": "TheAustralian - lifestyle",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianExecutiveLifestyle?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb3"),
  "title": "TheAustralian - business news",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianBusNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb4"),
  "title": "TheAustralian - sport",
  "groupname": "TheAustralian",
  "updateurl": "http://feeds.feedburner.com/TheAustralianSportsNews?format=xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb5"),
  "title": "Sidney Morning Herald - entertainment",
  "groupname": "Sidney Morning Herald -",
  "updateurl": "http://feeds.smh.com.au/rssheadlines/entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb6"),
  "title": "Sidney Morning Herald - sport",
  "groupname": "Sidney Morning Herald",
  "updateurl": "http://feeds.smh.com.au/rssheadlines/sport.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb7"),
  "title": "Sidney Morning Herald - tehnology",
  "groupname": "Sidney Morning Herald",
  "updateurl": "http://feeds.smh.com.au/rssheadlines/technology.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb8"),
  "title": "Brisbanetimes - national news",
  "groupname": "Brisbanetimes",
  "updateurl": "http://feeds.brisbanetimes.com.au/rssheadlines/national.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeb9"),
  "title": "Brisbanetimes - world news",
  "groupname": "Brisbanetimes",
  "updateurl": "http://feeds.brisbanetimes.com.au/rssheadlines/world.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0127c321d3be0004eeba"),
  "title": "Brisbanetimes - business",
  "groupname": "Brisbanetimes",
  "updateurl": "http://www.brisbanetimes.com.au/rssheadlines/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eebb"),
  "title": "Brisbanetimes - sport",
  "groupname": "Brisbanetimes",
  "updateurl": "http://feeds.brisbanetimes.com.au/rssheadlines/sport.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eebc"),
  "title": "The Age - national news",
  "groupname": "The Age",
  "updateurl": "http://feeds.theage.com.au/rssheadlines/national.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eebd"),
  "title": "The Age - world news",
  "groupname": "The Age",
  "updateurl": "http://feeds.theage.com.au/rssheadlines/world.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eebe"),
  "title": "Msn Austarlia - entertainment",
  "groupname": "Msn Austarlia",
  "updateurl": "http://data.9msn.com.au/Services/Service.axd/feeds/rss/news/entertainment",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eebf"),
  "title": "The Age - business news",
  "groupname": "The Age",
  "updateurl": "http://www.theage.com.au/rssheadlines/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec0"),
  "title": "The Age - entertainment",
  "groupname": "The Age",
  "updateurl": "http://feeds.theage.com.au/rssheadlines/entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec1"),
  "title": "The Age - business news",
  "groupname": "The Age",
  "updateurl": "http://feeds.theage.com.au/rssheadlines/technology.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec2"),
  "title": "The Age - sports",
  "groupname": "The Age",
  "updateurl": "http://feeds.theage.com.au/rssheadlines/sport.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec3"),
  "title": "Goldcoast - news",
  "groupname": "Goldcoast",
  "updateurl": "http://www.goldcoast.com.au/rss/local-gold-coast-news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec4"),
  "title": "Goldcoast - business",
  "groupname": "Goldcoast",
  "updateurl": "http://www.goldcoast.com.au/rss/gold-coast-business-news.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec5"),
  "title": "Msn Austarlia - world news",
  "groupname": "Msn Austarlia",
  "updateurl": "http://data.9msn.com.au/Services/Service.axd/feeds/rss/news/world",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec6"),
  "title": "Msn Austarlia - health",
  "groupname": "Msn Austarlia",
  "updateurl": "http://news.ninemsn.com.au/rss/health/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec7"),
  "title": "Courier Mail Australia - business",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_business_news_64.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec8"),
  "title": "Courier Mail Australia - entertainment",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_entertainment_news_256.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eec9"),
  "title": "Courier Mail Australia - sports",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_sports_news_65.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eeca"),
  "title": "Courier Mail Australia - technology",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_technology_news_66.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eecb"),
  "title": "Courier Mail Australia - Queensland news",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_queensland_news_70.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0128c321d3be0004eecc"),
  "title": "Courier Mail Australia - Qconfidential news",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_qconfidential_470.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eecd"),
  "title": "Courier Mail Australia - money",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_making_money_678.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eece"),
  "title": "Courier Mail Australia - news",
  "groupname": "Courier Mail Australia",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/bcm_news_69.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eecf"),
  "title": "ABC Australia - sport",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/45924/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed0"),
  "title": "ABC Australia - entertainment",
  "groupname": "ABC  Australia",
  "updateurl": "http://www.abc.net.au/news/feed/46800/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed1"),
  "title": "ABC Australia - Western Australia",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/52764/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed2"),
  "title": "ABC  Australia - New South Wales news",
  "groupname": "ABC  Australia",
  "updateurl": "http://www.abc.net.au/news/feed/52498/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed3"),
  "title": "ABC Australia - Victoria news",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/54242/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed4"),
  "title": "ABC Australia - Queensland",
  "groupname": "ABC Australia",
  "updateurl": "http://www.abc.net.au/news/feed/50990/rss.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed5"),
  "title": "Adelaide now - world",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_world_193.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed6"),
  "title": "Adelaide now - entertainment",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_entertainment_187.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed7"),
  "title": "Adelaide now - business",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_business_186.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed8"),
  "title": "Adelaide now - confidential news",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_confidential_news_476.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eed9"),
  "title": "Adelaide now - Afl Carlton news",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_carlton_521.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eeda"),
  "title": "Adelaide now - Afl Colingwood",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_collingwood_522.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eedb"),
  "title": "Adelaide now - Afl Essendon",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_essendon_523.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eedc"),
  "title": "Adelaide now -  Fremantle",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_fremantle_524.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eedd"),
  "title": "Adelaide now - Afl Geelong news",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_geelong_525.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0129c321d3be0004eede"),
  "title": "Adelaide now -  AFL - Hawthorn",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_hawthorn_526.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eedf"),
  "title": "Adelaide now -  AFL - Kangaroos",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_kangaroos_527.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee0"),
  "title": "Adelaide now -  AFL - Melbourne",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_melbourne_528.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee1"),
  "title": "Adelaide now -  AFL - Port Adelaide",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_portadelaide_529.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee2"),
  "title": "Adelaide now - AFL - St Kilda",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_stkilda_531.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee3"),
  "title": "AdelaideNow -  AFL - Sydney",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_sydney_532.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee4"),
  "title": "Adelaide now -  AFL - West Coast Eagles",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_westcoasteagles_534.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee5"),
  "title": "Adelaide now -  AFL - Western Bulldogs",
  "groupname": "Adelaide now",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/anow_afl_westernbulldogs_533.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee6"),
  "title": "PerthNow  -  State News",
  "groupname": "PerthNow",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/pnow_westau_168.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee7"),
  "title": "PerthNow - Sports News",
  "groupname": "PerthNow",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/pnow_sport_173.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee8"),
  "title": "PerthNow  -  life style",
  "groupname": "PerthNow",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/pnow_lifestyle_175.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eee9"),
  "title": "PerthNow  -  entertainment",
  "groupname": "PerthNow",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/pnow_entertainment_169.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eeea"),
  "title": "PerthNow  - business",
  "groupname": "PerthNow",
  "updateurl": "http://feeds.news.com.au/public/rss/2.0/pnow_business_170.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eeeb"),
  "title": "Sbs - national news",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Section/National",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eeec"),
  "title": "Sbs - finance",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Section/Finance",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eeed"),
  "title": "Sbs - sport",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Section/Sport",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eeee"),
  "title": "Sbs - Asia Pacific",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Region/Asia-Pacific",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eeef"),
  "title": "Sbs - Meadle east",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Region/Middle%20East",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eef0"),
  "title": "Sbs - europe",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Region/Europe",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012ac321d3be0004eef1"),
  "title": "Sbs - africa news",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Region/Africa",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef2"),
  "title": "Sbs - north america news",
  "groupname": "Sbs",
  "updateurl": "http://www.sbs.com.au/news/rss/Region/North%20America",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef3"),
  "title": "Bigpondnews - national news",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/National",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef4"),
  "title": "Bigpondnews - entertainment",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Entertainment/Celebrity",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef5"),
  "title": "Bigpondnews - sport",
  "groupname": "Bigpondnews",
  "updateurl": "http://www.bigpondsport.com/_data/Rss.aspx?rssid=0&amp;imagesizeid=5",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef6"),
  "title": "Bigpondnews - business",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Finance/NationalBusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef7"),
  "title": "Bigpondnews - world business",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Finance/WorldBusiness",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef8"),
  "title": "Bigpondnews - asia pacific",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/World/AsiaPacific",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eef9"),
  "title": "Bigpondnews - north america news",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/World/NorthAmerica",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eefa"),
  "title": "Bigpondnews - europe",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/World/Europe",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eefb"),
  "title": "Bigpondnews - Africa news",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/World/Africa",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eefc"),
  "title": "Bigpondnews - national politics",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Politics/National",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eefd"),
  "title": "Bigpondnews - world politics",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Politics/World",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eefe"),
  "title": "Bigpondnews - technology",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Technology",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004eeff"),
  "title": "Bigpondnews - health",
  "groupname": "Bigpondnews",
  "updateurl": "http://bigpondnews.com/rssfeed/Health",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004ef00"),
  "title": "Express-advocate - local news",
  "groupname": "Express-advocate",
  "updateurl": "http://express-advocate-wyong.whereilive.com.au/news/rss/category/local-news/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004ef01"),
  "title": "Express-advocate - travel news",
  "groupname": "Express-advocate",
  "updateurl": "http://express-advocate-wyong.whereilive.com.au/lifestyle/rss/category/travel/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004ef02"),
  "title": "Ibtimes Austarlia - finance",
  "groupname": "Ibtimes Austarlia",
  "updateurl": "http://au.ibtimes.com/rss/articles/specialcat/158.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012bc321d3be0004ef03"),
  "title": "Ibtimes Austarlia - economy",
  "groupname": "Ibtimes Austarlia",
  "updateurl": "http://au.ibtimes.com/rss/articles/categories/24.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef04"),
  "title": "Ibtimes Austarlia - news",
  "groupname": "Ibtimes Austarlia",
  "updateurl": "http://au.ibtimes.com/rss/articles/countries/13.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef05"),
  "title": "Ibtimes Austarlia - global markets",
  "groupname": "Ibtimes Austarlia",
  "updateurl": "http://au.ibtimes.com/rss/articles/categories/4.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef06"),
  "title": "Ibtimes Austarlia - world news",
  "groupname": "Ibtimes Austarlia",
  "updateurl": "http://au.ibtimes.com/rss/articles/categories/9.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef07"),
  "title": "Livetradingnews news",
  "groupname": "Livetradingnews",
  "updateurl": "http://www.livetradingnews.com/feed",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef08"),
  "title": "Canberratimes - world news",
  "groupname": "Canberratimes",
  "updateurl": "http://feeds.canberratimes.com.au/rssheadlines/world.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef09"),
  "title": "Canberratimes - national news",
  "groupname": "Canberratimes",
  "updateurl": "http://feeds.canberratimes.com.au/rssheadlines/national.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef0a"),
  "title": "Canberratimes - business",
  "groupname": "Canberratimes",
  "updateurl": "http://www.canberratimes.com.au/rssheadlines/business.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef0b"),
  "title": "Canberratimes - entertainment",
  "groupname": "Canberratimes",
  "updateurl": "http://feeds.canberratimes.com.au/rssheadlines/entertainment.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef0c"),
  "title": "Canberratimes - tech",
  "groupname": "Canberratimes",
  "updateurl": "http://feeds.canberratimes.com.au/rssheadlines/technology.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e012cc321d3be0004ef0d"),
  "title": "Canberratimes - sport",
  "groupname": "Canberratimes",
  "updateurl": "http://feeds.canberratimes.com.au/rssheadlines/sport.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2d7"),
  "title": "cnn-World",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_world.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0078c321d3be0004e2de"),
  "title": "cnn - U.S.",
  "groupname": "cnn",
  "updateurl": "http://rss.cnn.com/rss/edition_us.rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007ec321d3be0004e34c"),
  "title": "npr - world",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1004",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e007fc321d3be0004e350"),
  "title": "npr - sports",
  "groupname": "npr",
  "updateurl": "http://www.npr.org/rss/rss.php?id=1055",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e37b"),
  "title": "usnews - money",
  "groupname": "usnews",
  "updateurl": "http://www.usnews.com/rss/money",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e37e"),
  "title": "rt.com -  usa news",
  "groupname": "rt.com",
  "updateurl": "http://rt.com/usa/news/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0081c321d3be0004e37f"),
  "title": "rt.com -  sport news",
  "groupname": "rt.com",
  "updateurl": "http://rt.com/sport/rss/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3bf"),
  "title": "Stltoday - business technology",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=business%2Ftechnology&amp;l=50&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c1"),
  "title": "Stltoday - entertainment",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=entertainment&amp;l=100&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c2"),
  "title": "Stltoday - life &amp; style",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=lifestyles&amp;l=100&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c3"),
  "title": "Stltoday - sports",
  "groupname": "Stltoday",
  "updateurl": "http://www.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=sports*&amp;k=NOT+%23slsa*+*:*&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c5"),
  "title": "Stltoday - politics",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=news%2Flocal%2fgovt-and-politics&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e445"),
  "title": "Rapidcityjournal - health",
  "groupname": "Rapidcityjournal",
  "updateurl": "http://rapidcityjournal.com/search/?f=rss&amp;t=article&amp;c=lifestyles/health-med-fit&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e453"),
  "title": "Tennessean.com - sports",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2072&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=SPORTS",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008ec321d3be0004e454"),
  "title": "Tennessean.com - local state news",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2244&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=NEWS%20STATE",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e486"),
  "title": "Tennessean.com - local news",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2276&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=UPDATES",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e488"),
  "title": "Tennessean.com - travel",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2268&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=TRAVEL",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e489"),
  "title": "Tennessean.com - business",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?rsstitle=BUSINESS&amp;prof=2047&amp;Category=profilerss&amp;mime=xml&amp;nocache=1",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e48a"),
  "title": "Tennessean.com - entertainment",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2256&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=ENTERTAINMENT",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0091c321d3be0004e48b"),
  "title": "Tennessean.com - lifestyle",
  "groupname": "Tennessean.com",
  "updateurl": "http://www.tennessean.com/apps/pbcs.dll/section?prof=2222&amp;Category=profilerss&amp;mime=xml&amp;nocache=1&amp;rsstitle=LIFE",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9ae"),
  "title": "Gazettes.com - local news",
  "groupname": "Gazettes.com",
  "updateurl": "http://www.gazettes.com/search/?q=&amp;t=article&amp;l=25&amp;d=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c[]=news*&amp;f=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9af"),
  "title": "Gazettes.com - sports",
  "groupname": "Gazettes.com",
  "updateurl": "http://www.gazettes.com/search/?q=&amp;t=article&amp;l=25&amp;d=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c[]=sports*&amp;f=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00dec321d3be0004e9b0"),
  "title": "Gazettes.com - life",
  "groupname": "Gazettes.com",
  "updateurl": "http://www.gazettes.com/search/?q=&amp;t=article&amp;l=25&amp;d=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c[]=lifestyle*&amp;f=rss",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0123c321d3be0004ee6b"),
  "title": "Canoe - money",
  "groupname": "Canoe",
  "updateurl": "http://rss.canoe.ca/Money/home.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0124c321d3be0004ee78"),
  "title": "Metronews",
  "groupname": "Metronews",
  "updateurl": "http://metronews.ca/feed/",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee92"),
  "title": "Dose - celebrites",
  "groupname": "Dose",
  "updateurl": "http://rss.canada.com/get/?F8276",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0125c321d3be0004ee93"),
  "title": "Dose - music",
  "groupname": "Dose",
  "updateurl": "http://rss.canada.com/get/?F8275",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3be"),
  "title": "Stltoday - business",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=business*l&amp;l=100&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0085c321d3be0004e3c0"),
  "title": "Stltoday - travel",
  "groupname": "Stltoday",
  "updateurl": "http://www2.stltoday.com/search/?q=&amp;d1=&amp;d2=&amp;s=start_time&amp;sd=desc&amp;c=travel*&amp;l=100&amp;f=rss&amp;t=article",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e442"),
  "title": "Rapidcityjournal - local news",
  "groupname": "Rapidcityjournal",
  "updateurl": "http://rapidcityjournal.com/search/?f=rss&amp;t=article&amp;c=news/local&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e008dc321d3be0004e444"),
  "title": "Rapidcityjournal - entertainment",
  "groupname": "Rapidcityjournal",
  "updateurl": "http://rapidcityjournal.com/search/?f=rss&amp;t=article&amp;c=entertainment&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e0095c321d3be0004e4ce"),
  "title": "Clickondetroit.com - local Detroit news",
  "groupname": "Clickondetroit.com",
  "updateurl": "http://www.clickondetroit.com/-/1719524/4905432/-/format/rss_2.0/view/asFeed/-/8x6ocn/-/index.xml",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e009fc321d3be0004e58a"),
  "title": "Magicvalley.com - entertainment",
  "groupname": "Magicvaley.com",
  "updateurl": "http://magicvalley.com/search/?f=rss&amp;t=article&amp;c=entertainment&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00a0c321d3be0004e58f"),
  "title": "Pantagraph.com - entertainment",
  "groupname": "Pantagraph.com",
  "updateurl": "http://www.pantagraph.com/search/?f=rss&amp;t=article&amp;c=entertainment&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e69b"),
  "title": "Nctimes.com - state news",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=news/state-and-regional&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e69f"),
  "title": "Nctimes.com - Escondido news",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=news/local/escondido&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00afc321d3be0004e6a0"),
  "title": "Nctimes.com - San-Marcos news",
  "groupname": "Nctimes.com",
  "updateurl": "http://www.nctimes.com/search/?f=rss&amp;t=article&amp;c=news/local/san-marcos&amp;l=25&amp;s=start_time&amp;sd=desc",
  "errors": NumberInt(0)
});
db.getCollection("feeds").insert({
  "_id": ObjectId("565e00b6c321d3be0004e70f"),
  "title": "Mysanantonio.com - local news",
  "groupname": "Mysanantonio.com",
  "updateurl": "http://www.mysanantonio.com/news/local_news/collectionRss/News-Local-News-Story-Index-Headline-List-8428.php",
  "errors": NumberInt(0)
});
