var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var User = require('../models/Users')
var csrf = require('csurf')
// var bodyParser = require('body-parser')

var isProduction = require('../config').server

var csrfProtection = csrf({ cookie: true })

/* GET home page. */
router.get('*', csrfProtection, function (req, res, next) {
  if (isProduction) {
    if (req.session.user) {
      User.findOne({ email: req.session.user.email }, function (err, user) {
        if (!user) { // If no user send to login page
          res.render('index', { csrfToken: req.csrfToken() });
        } else {
          bcrypt.compare(req.session.user.password, user.password, function (err, result) {
            if (result) {
              res.cookie('id', req.session.user._id);
              req.session.user = user;
              
              res.redirect('/auth/');
            }
            else {
              res.render('index', { csrfToken: req.csrfToken() });
            }
          });
        }
      })
    } else {
      res.render('index', { csrfToken: req.csrfToken() });
    }
  } else {
    
    
  }
});


// Log in Route
router.post('/', csrfProtection, function (req, res, next) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (!user) {
      res.render('index');
    } else {

      bcrypt.compare(req.body.password, user.password, function (err, result) {

        if (result) {
          req.session.user = user;
          res.redirect('/auth/');
        }
        else {
          res.render('index', { csrfToken: req.csrfToken() });
        }
      });



    }
  })
});

module.exports = router;
