var express = require('express');
var router = express.Router();
var User = require('../models/Users')

/* GET home page. */
router.get('/:userid', function(req, res, next) {

	User.findById(req.params.userid)
	.select('_id firstName lastName email nickname city state country')
	.exec(function(err, user) {
		if(err) {
			console.log(err)
		}

	res.json(user);

	})
});

module.exports = router;
