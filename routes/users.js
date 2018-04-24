var express = require('express');
var router = express.Router();

var User = require('../models/Users')


router.get('/user', function(req, res, next) {
  User.findOne({ email: req.session.user.email }, function (err, user) {
    if (user) {     
      user.password= ""
      res.json(user)
    }
  })
} )


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
  });
});





module.exports = router;
