var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

var PostComment = new Schema ({
    userId: {type: String, required: true},
    userFirstName: {type: String},
    userLastName: { type: String},
    postDate: {type: Date},
    comment: {type: String}

})

module.exports = mongoose.model('PostComment', {PostComment})