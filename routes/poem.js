var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3');  

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var db = new sqlite3.Database('c:/poem.db');
  db.all(  
    'SELECT * FROM poem WHERE _id='+id,  
    function (err, results, fields) {  
      if (err) {  
        throw err;  
      } 
      if(results) {
        for(var i = 0; i < results.length; i++) {
          var data = {
            id: results[i]._id,
            title: results[i].mingcheng, 
            author: results[i].zuozhe,
            dynasty: results[i].chaodai,
            content: results[i].yuanwen
          }
          var json = {
            "data": data
          }
          res.end( JSON.stringify(json) ); 
        }
      }   
      db.close();  
    }  
  ); 
});

module.exports = router;