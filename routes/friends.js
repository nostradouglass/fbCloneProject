var express = require('express');
var router = express.Router();

var User = require('../models/Users')

router.post('/newFriendRequest', (req, res, next) => {

 

    // User.findByIdAndUpdate(req.body.friendRequestId, { $set: { friendsRequestArray: req.body.currentUserId }}, { new: true }, function (err, user) {
    //     if (err) return handleError(err);
    //     res.send(user);
    //   });

    User.findByIdAndUpdate(req.body.friendRequestId, { $push: { friendsRequestArray: req.body.currentUserId }}, { upsert: true }, function (err, user) {
        if (err) return console.log(err);
        res.send(user);
      });


})



module.exports = router;
