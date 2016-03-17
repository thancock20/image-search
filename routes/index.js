var express = require('express');
var search = require('../models/search');

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
