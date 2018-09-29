var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

var Post = new Schema ({
    userId: { type: String, required: true},
    id: ObjectId,
    userFirstName: { type: String },
    userLastName: { type: String },
    postDate: { type: Date },
    postText: { type: String },
    postImageUrl: { type: String },
    postComments: [{ type: Schema.Types.ObjectId, ref: 'PostComment'}],
})

module.exports = mongoose.model('Post', Post)


