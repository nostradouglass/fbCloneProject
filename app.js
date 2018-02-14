var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var User = require('./models/Users')

var bcrypt = require('bcryptjs')
var helmet = require('helmet')
var compression = require('compression')
var sessions = require('client-sessions')
var csurf = require('csurf')

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var logout = require('./routes/logout')
var signUp = require('./routes/signUp')

mongoose.connect('mongodb://admin:Doritos5!@ds257627.mlab.com:57627/fb_clone_db', { useMongoClient: true})
mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.on('open', function() {
  console.log('Connected to mlab database fb_clone_db')
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// CORS Support 
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
res.header('Access-Control-Allow-Headers', 'Content-Type')
next();
})


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sessions({
  cookieName: 'session',
  secret: 'meovmnfal fjadfjaimkf 542nfi  rmkd',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true
}))

app.use(function (req, res, next) {
  if (req.session && req.session.user) {
    User.findOne({ email: req.session.user.email }, function (err, user) {
      if (user) {
        req.user = user
        delete req.user.password
        req.session.user = user
        res.locals.user = user
      }
      next()
    })
  } else {
    next()
  }
})


function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/');
  } else {
    next()
  }
}

app.use(express.static(path.join(__dirname, 'static')));
app.use('/signup', signUp )
app.use('/auth', requireLogin, express.static(path.join(__dirname, 'dist')));
app.use('/', index);
app.use('/users', users);
app.use('/login', login);

app.use('/logout', logout)


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
