var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

var User = new Schema ({
    id: ObjectId,
    firstName: { type: String, required: true, trim: true},
    lastName: { type: String, required: true, trim: true},
    email: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true},
    albums: [{ type: Schema.Types.ObjectId, ref: 'Album'}],
    post_images: [ String ],
    profiles_pics:[ String ],
    cover_photo:{ type: String},

})

module.exports = mongoose.model('User', User)