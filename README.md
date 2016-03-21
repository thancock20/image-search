# image-search
My implementation of the Image Search Abstraction Layer project from freeCodeCamp.

[See the app on Heroku](https://cryptic-dawn-13485.herokuapp.com/)

Implements the following User stories:
* I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* I can get a list of the most recently submitted search strings.

## Getting Started
```
npm install
node server.js
```

## Example Search Usage:
`http://localhost:8080/imagesearch/lolcats%20funny?offset=10`

## Example Search Output:
```
[
  {
    "imageUrl": "http://www.dumpaday.com/wp-content/uploads/2013/01/funny-lolcats.jpg",
    "altText": "funny lolcats",
    "pageUrl": "http://dumpaday.com/random-pictures/funny-pictures/funny-pictures-41-pics"
  },
  {
    "imageUrl": "http://www.innocentenglish.com/cute-pictures/wp/wp-content/uploads/2008/05/funnyt-lolcat-recharging.jpg",
    "altText": "Blog Of Pure Randomness: Cute & Random LOLcats",
    "pageUrl": "http://schoolgirlsinger.blogspot.com/2011/04/cute-random-lolcats.html"
  },
  {
    "imageUrl": "http://funnypicture.org/wallpaper/2015/06/lolcats-6-background.jpg",
    "altText": "Lolcats 22 Wide Wallpaper - Funnypicture.org",
    "pageUrl": "http://funnypicture.org/lolcats-22-wide-wallpaper.html"
  },
  {
    "imageUrl": "http://harry.enzoverder.be/cats/lolcats-funny-picture-my-feet.jpg",
    "altText": "feet back lolcats funny picture lalalalala lolcats funny pictures ...",
    "pageUrl": "http://harry.enzoverder.be/cats/tn/lolcats-funny-picture-my-feet.jpg.html"
  },
  {
    "imageUrl": "http://1.bp.blogspot.com/--ZAe94AFUkA/TzDGJbA9BjI/AAAAAAAAB-U/bVcpgd-vgjc/s1600/425162448_add6f7905b.jpg",
    "altText": "Bloggin': BEST LOLCATS EVER",
    "pageUrl": "http://diamondsandheels14.blogspot.com/2012/02/best-lolcats-ever.html"
  },
  {
    "imageUrl": "http://rubmint.com/wp-content/plugins/wp-o-matic/cache/00602_funny-pictures-lolcats-facecouch.jpg",
    "altText": "funny pictures - Lolcats: *Facecouch*",
    "pageUrl": "http://rubmint.com/2012/03/27/lolcats-facecouch/"
  },
  {
    "imageUrl": "http://kalafudra.files.wordpress.com/2008/06/lolcats-funny-pictures-leroy-jenkins.jpg",
    "altText": "lolcats-funny-pictures-leroy-jenkins.jpg",
    "pageUrl": "http://kalafudra.com/2008/06/"
  },
  {
    "imageUrl": "http://cdn-7.innocentenglish.com/funny-pics/lolcats/funny-cat-playing-accordion.jpg",
    "altText": "Invisible Lolcats: Funny captioned cat pics with invisible things in ...",
    "pageUrl": "http://www.innocentenglish.com/funny-amazing-pictures-videos/cute-kitten-puppy-animal-pics/lolcats-macros/funny-captioned-cat-pics.html"
  },
  {
    "imageUrl": "http://www.lolcats.com/images/u/12/24/lolcatsdotcompromdate.jpg",
    "altText": "LOLCats - Funny cat pictures",
    "pageUrl": "http://www.lolcats.com/"
  },
  {
    "imageUrl": "http://www.dumpaday.com/wp-content/uploads/2013/01/funny-lolcats-on-the-internet.jpg",
    "altText": "funny lolcats, on the internet - Dump A Day",
    "pageUrl": "http://www.dumpaday.com/funny-pictures/funny-pictures-32-pics/attachment/funny-lolcats-on-the-internet/"
  }
]
```

## Example Recent Searches Usage:
`http://localhost:8080/recent`

## Example Recent Searches Output:
```
[
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:12:18.403Z"
  },
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:11:04.775Z"
  },
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:10:44.920Z"
  },
  {
    "term": "l",
    "when": "2016-03-21T07:08:59.787Z"
  },
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:08:29.788Z"
  },
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:08:27.474Z"
  },
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:08:26.068Z"
  },
  {
    "term": "lolcats funny",
    "when": "2016-03-21T07:08:23.605Z"
  },
  {
    "term": "lanterns",
    "when": "2016-03-21T07:07:55.958Z"
  },
  {
    "term": "pizza",
    "when": "2016-03-21T07:07:46.582Z"
  }
]
```
