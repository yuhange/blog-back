var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var json = {
    "data" :{
      "id" : id,
      "title" : "CSS的翻转动画效果",
      "content" : "githup：https://github.com/nnliang/Inspection_area\n\n **安装**\n ``` npm install Inspection_area --save ``` \n\n **使用** \n\n ``` const Inspection = require('Inspection_area'); ``` **方法** ``` check(province, city, [area]) 返回类型：boolean 示例： let $check = Inspecte.check('北京市', '北京市', '朝阳区'); console.log($check) // true typeof $check // boolean ``` ``` coordinate(province, [city], [area]) 返回类型： Object 示例： let $coordinate = Inspecte.coordinate('北京市') console.log($coordinate) // { lng: 116.39564503787867, lat: 39.92998577808024 } typeof $coordinate // object ``` **注意事项** ``` 本文在查询经纬度使用的百度地图API，有次数限制，请阅读源码并替换 ``` **学习** [i5ting][1] [1]: https://github.com/i5ting/",
      "date" : "2016-12-13",
      "author": "yuhange",
      "tags": ["css", "front-end"],
      "category": "前端"
    }
  }
  res.end( JSON.stringify(json) );
});

module.exports = router;
