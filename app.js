var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var passport = require('passport');

var flash = require('connect-flash');
var session = require('express-session');

var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'LittleKittenJumpingOverTheRainbow', resave: true, saveUninitialized: true,
  cookie: {
    maxAge: 99999999
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log("ERR:", err)
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.use(function(err, req, res, next) {
  console.log("ERROR:", err)
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(port, (res) => {
  console.log(`Server running on http://localhost:${port}`)
});

module.exports = app;
