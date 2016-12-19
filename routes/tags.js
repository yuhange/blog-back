var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  var json = {
      data: [
        {
          id: '1',
          name: 'nodejs',
          count: '14'
        }, {
          id: '2',
          name: 'css',
          count: '5'
        }, {
          id: '3',
          name: 'mongodb',
          count: '12'
        }, {
          id: '4',
          name: '软件工程',
          count: '9'
        }, {
          id: '5',
          name: '背单词',
          count: '9'
        }, {
          id: '6',
          name: 'leetcode',
          count: '9'
        }, {
          id: '7',
          name: '随笔',
          count: '9'
        }
      ]
    };
    res.end( JSON.stringify(json) );
});

module.exports = router;
