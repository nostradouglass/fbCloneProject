var express = require('express');
var router = express.Router();
var moment = require('moment')

var Post = require('../models/Posts')



router.post('/createPost', function (req, res) {

    console.log(req.body)

    var post = new Post({

        userId: req.body.userId,
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        //postDate: moment(),
        postText: req.body.postText,
        postImageUrl: req.body.postImageUrl,
        //postComments: req.body.postComments


    });

    post.save(function (err) {
        if (err) console.log("error saving post")
    })
    res.end()

})


module.exports = router;