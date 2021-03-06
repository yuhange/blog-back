var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");

// var mongoose = require('./mongoose');

var index = require('./routes/index');
var post = require('./routes/post');
var tags = require('./routes/tags');
var categories = require('./routes/categories');
var users = require('./routes/users');
var todo = require('./routes/todo');
var todohistory = require('./routes/todohistory');
var leetcode = require('./routes/leetcode');
var leetcode_question = require('./routes/leetcode-question');
var poems = require('./routes/poems')
var poem = require('./routes/poem')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/', index);
app.use('/post', post);
app.use('/tags', tags);
app.use('/categories', categories);
app.use('/users', users);
app.use('/todo', todo);
app.use('/todohistory', todohistory);
app.use('/leetcode', leetcode);
app.use('/leetcode/leetcode-question', leetcode_question);
app.use('/poems', poems)
app.use('/poem', poem)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
