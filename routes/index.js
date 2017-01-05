var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql = require('mysql');

router.get('/', function(req, res, next) {
  var data = [];
  var client = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: '3306',
    database: 'blog',
  });
  client.connect();
  client.query("use blog");

  client.query(  
    'SELECT id, title, content, addTime, updateTime, tag FROM blogTable order by id desc',  
    function selectCb(err, results, fields) {  
      if (err) {  
        throw err;  
      } 
      if(results) {
        for(var i = 0; i < results.length; i++) {
          var object = {
            id: results[i].id,
            title: results[i].title, 
            addTime: results[i].addTime,
            updateTime: results[i].updateTime,
            content: results[i].content,
            tag: results[i].tag
          }
          data.push(object)
        }
      }   
      var json = {
        "data": data
      }
      res.end( JSON.stringify(json) ); 
      client.end();  
    }  
    );
});

module.exports = router;
