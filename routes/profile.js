var express = require('express');
var router = express.Router();
var User = require('../models/Users')

/* GET home page. */
router.get('/:userid', function(req, res, next) {
//res.render('profile', { title: 'profile' });

	User.findById(req.params.userid, function (err, user) {
		console.log(user);
		//this function can be improved so it just returns fields needed.
	});

});

module.exports = router;
