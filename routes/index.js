var express = require('express');
var search = require('../models/search');
var phantom = require('x-ray-phantom');
var Xray = require('x-ray');
var x = Xray()
  .driver(phantom());

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
  console.log(term);
  console.log(offset);
  // Below needs to be fixed, currently gives error.
  console.log(x('https://www.google.com/search?q=' + term + '&source=lnms&tbm=isch', 'body@html').write());
  /* var url = new Url();
  url.original_url = original_url;
  url.save(function(err) {
    if (err) res.send(err);
    var hostname = req.hostname === 'localhost' ? 'http://localhost:' + port : req.protocol + '://' + req.hostname;
    res.json({
      original_url: original_url,
      short_url: hostname + '/' + url.id
    });
  }); */
});

/* router.get('/:url_id', function(req, res) {
  Url.findById(req.params.url_id, function(err, url) {
    if (err)
      res.send(err);
    if (url)
      res.redirect(url.original_url);
  });
}); */

module.exports = router;
