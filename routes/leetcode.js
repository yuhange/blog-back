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
    database: 'leetcode',
  });
  client.connect();
  client.query("use leetcode");

  client.query(  
    'SELECT id, ques_id, ques_title, difficulty, passrate FROM question',  
    function selectCb(err, results, fields) {  
      if (err) {  
        throw err;  
      } 
      if(results) {
        for(var i = 0; i < results.length; i++) {
          var object = {
            id: results[i].id,
            ques_id: results[i].ques_id, 
            ques_title: results[i].ques_title,
            passrate: results[i].passrate,
            difficulty: results[i].difficulty
          }
          // console.log(i+": %d\t%s\t%s", results[i].id, results[i].ques_id, results[i].ques_title);
          // console.log(object)
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