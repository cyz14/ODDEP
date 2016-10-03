var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var auth = require('./routes/auth');
var editor = require('./routes/editor');
var consumer = require('./routes/consumer');
var watcher = require('./routes/watcher');

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
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "taolidixiacheduir1",
}));
app.use(express.static(path.join(__dirname, 'public')));

// 模板装载会话信息
app.use(function(req, res, next) {
  res.locals.user = req.session.user || null;
  next();
});

app.use('/', routes);
app.use('/auth', auth);

/*
// 权限限制器 
app.use(function(req, res, next) {
  if (res.locals.user) {
    next();
  } else {
    res.redirect('/auth/login');
  }
}); // */

app.use('/editor', editor);
app.use('/submit', consumer);
app.use('/status', watcher);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
