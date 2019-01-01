var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require("express-session");

var index = require('./routes/index');
var users = require('./routes/users');
var config = require('./config/index');
var video = require('./routes/video');
var together = require('./routes/together');
var post = require('./routes/post');
var home = require('./routes/home');
var history = require('./routes/history');
var feedback = require('./routes/feedback');
var divisi = require('./routes/divisi');
var addpost = require('./routes/addpost');
var admin = require('./routes/admin');
var guanli1=require('./routes/guanli1');
var input1=require('./routes/input1');
var addco=require('./routes/addco');
var guanli2=require('./routes/guanli2');


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


app.use(session({
  name: "MJT",
  secret: config.secret,
  cookie: { maxAge: 10000 },   //毫秒为单位
  resave: true,
  rolling: true
}));

app.use('/', index);
app.use('/user', users);
app.use('/admin',admin);
app.use('/addpost',addpost);
app.use('/divisi',divisi);
app.use('/feedback',feedback);
app.use('/history',history);
app.use('/home',home);
app.use('/post',post);
app.use('/together',together);
app.use('/video',video);
app.use('/guanli1',guanli1);
app.use('/input1',input1);
app.use('/addco',addco);
app.use('/guanli2',guanli2);

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
