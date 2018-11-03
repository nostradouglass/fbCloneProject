var express = require('express');
var router = express.Router();
var moment = require('moment')

var PostSchema = require('../models/Posts')
var Post = PostSchema.Post
var Comments = PostSchema.postComment


router.post('/createPost', function (req, res) {

// Wait to add this feature until post is working
    // var PostComment = new Comments({
    //     userId: "1111",
    //     userFirstName: "first",
    //     userLastName: "last",
    //     //postDate: {type: Date},
    //     comment: "Comment"
    // })

    var post = new Post({
        userId: req.body.userId,
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        postDate: moment(),
        postText: req.body.postText,
        postImageUrl: req.body.postImageUrl,
        //postComments: req.body.postComments
        // postComments: {
        //     userId: "1234",
        //     userFirstName: "comment First",
        //     userLastName: "comment last",
        //     postDate: moment(),
        //     comment: "A Comment"
        // }
        //postComments: PostComment

    });

    post.save(function (err) {
        if (err) {
            console.log("error saving post")
            res.json({response: "error saving"})
        }
    })
    res.json({response: "saved"})

})


module.exports = router;