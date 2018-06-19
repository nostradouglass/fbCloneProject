var mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId;

var User = new Schema ({
    id: ObjectId,
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true },
    nickname:{ type: String },
    about:{ type: String },
    DOB:{ type: Date },
    City:{ type: String },
    State: { type: String},
    zip: { type: Number},
    country: {type: String},
    relationship_status:{ type: String },
    location: { type: String },
    work: { type: String },
    friends: [ String ],
    albums: [{ type: Schema.Types.ObjectId, ref: 'Album'}],
    post_images: [ String ],
    profiles_pics:[ String ],
    cover_photo:{ type: String},
    friendsRequestArray: { type: String }

})

module.exports = mongoose.model('User', User)


    