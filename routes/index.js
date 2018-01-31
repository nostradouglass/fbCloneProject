var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var User = require('../models/Users')
var csrf = require('csurf')
// var bodyParser = require('body-parser')

var csrfProtection = csrf({ cookie: true})

/* GET home page. */
router.get('*', csrfProtection, function(req, res, next) {
  console.log(req.session)
  if (req.session.user) {
  User.findOne({ email: req.session.user.email }, function (err, user) {
    if( !user) { // If no user send to login page
      res.render('index', { csrfToken: req.csrfToken() });
    } else {
      // If user exist compare session pass with server pass, if true allow to auth
      // For Simple 1-10 user sign in sync is fine. For larger, switch to async.
      if (bcrypt.compare(req.session.user.password, user.password)) { 
        
        req.session.user = user
        req.session.user.password = ''
        res.redirect('/auth/')
      } else { // If passwords do not match, send them back to login page
        res.render('index', { csrfToken: req.csrfToken() });
      }
    }
  })

  } else {
    res.render('index', { csrfToken: req.csrfToken() });
  }

});


// Log in Route

router.post('/', csrfProtection, function(req, res, next) {

  User.findOne({ email: req.body.email } , function( err, user) {
    if (!user) {
      res.render('index');
    } else {
      if (bcrypt.compare(req.body.password, user.password)) {
        req.session.user = user;
        res.redirect('/auth/')
      } else {
        res.render('index');
      }
    }
  })
});


module.exports = router;
