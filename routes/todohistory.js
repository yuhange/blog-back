var express = require('express');
var router = express.Router();
// var fs = require("fs");

router.get('/', function(req, res, next) {
  var json = {
      data: [
        {
          date: '2016-12-23',
          todos: [{
            text: 'nodejs',
            done: '14'
          }, {
            text: 'css',
            done: '5'
          }, {
            text: 'mongodb',
            done: '12'
          }]
        }, 
        {
          date: '2016-12-22',
          todos: [{
            text: 'vuex',
            done: '14'
          }, {
            text: 'css',
            done: '5'
          }, {
            text: 'mongodb',
            done: '12'
          }]
        }
      ]
    };
    res.end( JSON.stringify(json) );
});

module.exports = router;
