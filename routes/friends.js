var express = require('express');
var router = express.Router();

var User = require('../models/Users')

router.post('/newFriendRequest', (req, res, next) => {

    User.findByIdAndUpdate(req.body.friendRequestId, { $set: { friendsRequestArray: req.body.friendRequestId }}, { new: true }, function (err, user) {
        if (err) return handleError(err);
        res.send(user);
      });

})



module.exports = router;
