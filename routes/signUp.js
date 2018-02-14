var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var User = require('../models/Users')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('signUp', { title: 'Sign Up' });
});


// Temp route to register users, remove after setup 
router.post('/', function (req, res, next) {

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {

      var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      });


      user.save(function (err) {
        if (err) {
          console.log("Error saving to Db")
          res.render('index')
        } else {
          res.redirect('/auth/')
        }
      });
    });
  });

})


module.exports = router;
