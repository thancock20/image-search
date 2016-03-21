var express = require('express');
var Search = require('../models/search');
var BingSearch = require('bing.search');
var util = require('util');
var bingSearch = new BingSearch(process.env.BING_API_KEY);

var router = express.Router();

var port = process.env.PORT || 8080;

router.get('/', function(req, res) {
  res.render('index', {
    hostname: req.hostname === 'localhost' ? 'http://localhost:' + port : req.protocol + '://' + req.hostname
  });
});

router.get('/imagesearch/:term', function(req, res) {
  var term = req.params.term;
  var offset = req.query.offset || 0;
  var search = new Search();
  search.term = term;
  search.save(function(err) {
    if (err) throw(err);
    var hostname = req.hostname === 'localhost' ? 'http://localhost:' + port : req.protocol + '://' + req.hostname;
  });
  bingSearch.images(term, {top: 10 + +offset}, function(err, results) {
    if (err) res.send(err);
    res.json(results.slice(offset).map(function(result) {
      return {
        imageUrl: result.url,
        altText: result.title,
        pageUrl: result.sourceUrl
      }
    }));
  });
});

router.get('/recent', function(req, res) {
  Search.find(function(err, docs) {
    res.json(docs.reverse().slice(0,10).map(function(item) {
      return {
        term: item.term,
        when: item.when
      }
    }));
  })
});

module.exports = router;
