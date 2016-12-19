var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile( __dirname + "/" + "post.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

module.exports = router;
