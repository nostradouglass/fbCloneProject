var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//res.render('profile', { title: 'profile' });
console.log("Accessed");
});

module.exports = router;
