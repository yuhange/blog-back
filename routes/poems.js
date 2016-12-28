var sqlite3 = require('sqlite3');  
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var db = new sqlite3.Database('c:/poem.db');
  var data = [];
  db.all("select * from poem limit 400",function(err,results){  
    if(!err) {
      for(var i = 0; i < results.length; i++) {
          var object = {
            id: results[i]._id,
            title: results[i].mingcheng, 
            author: results[i].zuozhe,
            dynasty: results[i].chaodai,
            // difficulty: results[i].difficulty
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
    db.close()
  });
  // var json = {
  //   data: data
  // }
  // console.log(JSON.stringify({data: data}))
  // res.end(JSON.stringify({data: data}))  
});

module.exports = router;