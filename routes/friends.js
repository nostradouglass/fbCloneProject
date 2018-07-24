var express = require('express');
var router = express.Router();

var User = require('../models/Users')

router.post('/newFriendRequest', (req, res, next) => {
    User.findByIdAndUpdate(req.body.friendRequestId, { $push: { friendsRequestArray: req.body.currentUserId }}, { upsert: true }, function (err, user) {
        if (err) return console.log(err);
        res.send(user);
      });
})




router.get('/pendingFriendRequest', (req, res) => {

    var friendsRequestFullInfoArray = []

    User.findById(req.query.friendRequestId, function (err, user) {
        
            var friendsRequestIdArray = user.friendsRequestArray
            
            friendsRequestIdArray.forEach((friend) => {
                User.findById(friend, (err, user)=> {
                    user.password = undefined
                    user.friendsRequestArray = undefined
                    friendsRequestFullInfoArray.push(user)
                }).then(() => {
                    res.send(friendsRequestFullInfoArray)
                })
            })
            
    })
    
})


module.exports = router;
