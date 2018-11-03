var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

// Wait to figure out where to add this feature until posting works
// var PostCommentSchema = new Schema ({
//     userId: {type: String, required: true},
//     userFirstName: {type: String},
//     userLastName: { type: String},
//     postDate: {type: Date},
//     comment: {type: String}

// })

var PostSchema = new Schema ({
    userId: { type: String, required: true},
    id: ObjectId,
    userFirstName: { type: String },
    userLastName: { type: String },
    postDate: { type: Date },
    postText: { type: String },
    postImageUrl: { type: String },
    //postComments: [ PostCommentSchema ],
    
})

module.exports = {
    Post: mongoose.model('Post', PostSchema),
    //postComment: mongoose.model('postComment', PostCommentSchema)
}

