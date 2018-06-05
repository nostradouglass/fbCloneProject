var express = require('express');
var router = express.Router();
var multer = require('multer')
var fs = require('fs')
Stream = require('stream').Transform  


/* POST change profile Pic. */
router.post('/cover_photo', (req, res, next) => {

 var userDir = `./media/users/${req.user._id}`

 if (!fs.existsSync(userDir)) {
   fs.mkdirSync(userDir)
 }

 var profileDir = `${userDir}/cover_photo`

 if (!fs.existsSync(profileDir)) {
   fs.mkdirSync(profileDir)
 }

  let imageFile = req.files.file;

 imageFile.mv(`./media/users/${req.user._id}/cover_photo/cover_photo.jpg`, function(err) {
   if (err) {
     return res.status(500).send(err);
   }
   res.json({message: "file saved"});
 });


})


router.post('/profile_pic', (req, res, next) => {

  var userDir = `./media/users/${req.user._id}`

  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir)
  }

  var profileDir = `${userDir}/profile_pics`

  if (!fs.existsSync(profileDir)) {
    fs.mkdirSync(profileDir)
  }

   let imageFile = req.files.file;

  imageFile.mv(`./media/users/${req.user._id}/profile_pics/primary_profile_pic.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({message: "file saved"});
  });


})

module.exports = router;
