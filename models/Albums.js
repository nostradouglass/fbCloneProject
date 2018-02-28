var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

var Album = new Schema ({
    title: { type: String},
    location: { type: String},
    date: { type: String},
})

module.exports = mongoose.model('Album', Album)