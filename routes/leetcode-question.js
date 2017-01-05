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
    database: 'leetcode',
  });
  client.connect();
  client.query("use leetcode");

  client.query(  
    'SELECT question.ques_id, question.ques_title, question.difficulty, question.passrate, question.ques_content, answer.explanation, answer.cpp FROM question, answer WHERE question.ques_id='+id+' and answer.ques_id=question.ques_id',  
    function selectCb(err, results, fields) {  
      if (err) {  
        throw err;  
      } 
      if(results) {
        for(var i = 0; i < results.length; i++) {
          var data = {
            id: results[i].id,
            ques_id: results[i].ques_id, 
            ques_title: results[i].ques_title,
            passrate: results[i].passrate,
            difficulty: results[i].difficulty,
            ques_content: results[i].ques_content,
            solution: results[i].cpp
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