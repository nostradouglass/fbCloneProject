var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var User = require('../models/Users')
var fs = require('fs')
var path = require('path')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('signUp', { title: 'Sign Up' });
});


// Temp route to register users, remove after setup 
router.post('/', function (req, res, next) {


	//bcrypt saving hashed password in async mode:

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(req.body.password, salt, function (err, hash) {

			var user = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hash
			});


			user.save(function (err) {
				if (err) {
					console.log("Error saving to Db")
					res.render('index')
				} else {


					fs.readFile(path.join(appRoot, '/static/images/defaultCoverPhoto.jpg'), function (err, data) {
						if (err) throw err

						var mainUserDir = path.join(appRoot,`/media/users/${user._id}`)

						if (!fs.existsSync(mainUserDir)) {
						  fs.mkdirSync(mainUserDir)
						}

						var userCoverDir = path.join(appRoot,`/media/users/${user._id}/cover_photo/`)
						if (!fs.existsSync(userCoverDir)) {
						  fs.mkdirSync(userCoverDir)
						}

						fs.writeFile(path.join(appRoot,`/media/users/${user._id}/cover_photo/cover_photo.jpg`), new Buffer(data, "base64"), (err) => {
							if (err) throw err
							console.log("saved default cover photo")
						})
						
					})


					fs.readFile(path.join(appRoot, '/static/images/primary_profile_pic.jpg'), function (err, data) {
						if (err) throw err

						var mainUserDir = path.join(appRoot,`/media/users/${user._id}`)

						var userProfileDir = path.join(appRoot,`/media/users/${user._id}/profile_pics/`)

						if (!fs.existsSync(userProfileDir)) {
						  fs.mkdirSync(userProfileDir)
						}
						fs.writeFile(path.join(appRoot,`/media/users/${user._id}/profile_pics/primary_profile_pic.jpg`), new Buffer(data, "base64"), (err) => {
							if (err) throw err
							console.log("saved default profile photo")
						})
					})
					res.redirect('/auth/')
				}
			});
		});
	});


})


module.exports = router;
