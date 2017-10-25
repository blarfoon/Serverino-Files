var auth = require('http-auth');
var basic = auth.basic({
    realm: "Simon Area.",
    file: __dirname + "/users.htpasswd"
});

basic.on('success', (result, req) => {
    console.log(`User authenticated: ${result.user} ------ ${req.connection.remoteAddress}`);
});

basic.on('fail', (result, req) => {
    console.log(`User authentication failed: ${result.user} ------ ${req.connection.remoteAddress}`);
});

basic.on('error', (error, req) => {
    console.log(`Authentication error: ${error.code + " - " + error.message}`);
});

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var ip = require('ip');
var fs = require('fs');
var opn = require('opn');
var multer = require('multer');
var formidable = require('formidable');

var index = require('./routes/index');
var users = require('./routes/users');
var files = require('./routes/files');

//mongoose.connect('localhost:27017/blog');

var app = express();

//opn('http://' + ip.address() + ':' + '8090', { app: 'chrome' });

app.use(auth.connect(basic));
// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/files', files);

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
