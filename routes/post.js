var express = require('express');
var router = express.Router();
var fs = require("fs");
var mysql = require('mysql');

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
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
    'SELECT * from blogTable WHERE id='+id,  
    function selectCb(err, results, fields) {  
      if (err) {  
        throw err;  
      } 
      if(results) {
        for(var i = 0; i < results.length; i++) {
          var data = {
            id: results[i].id,
            title: results[i].title, 
            addTime: results[i].addTime,
            updateTime: results[i].updateTime,
            content: results[i].content,
            tag: results[i].tag
          }
          var json = {
            "data": data
          }
          res.end( JSON.stringify(json) ); 
        }
      }   
      client.end();  
    }  
  ); 
});

module.exports = router;
