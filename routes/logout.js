var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.clearCookie("session")
    res.redirect('/')
    req.session.user.password = ''
})


module.exports = router;