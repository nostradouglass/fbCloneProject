var express = require('express');
var router = express.Router();

var User = require('../models/Users')


// @ /users 

router.get('/user', function (req, res, next) {
  User.findOne({ email: req.session.user.email }, function (err, user) {
    if (user) {
      user.password = ""
      res.json(user)
    }
  })
})

router.post('/findUsers', function (req, res) {

  let searchTerm = req.body.searchTerm

  User.find({$or:[
    {firstName:{'$regex': searchTerm,$options:'i'}},
    {lastName: {'$regex': searchTerm,$options:'i'}}, 
    {email: {'$regex': searchTerm,$options:'i'}}]} )
    
    .select('_id firstName lastName email nickname city state country')
    .exec(function(err, userList) 
 {
    if (err)
    {
        res.send(err);
    }
    console.log(userList)
    res.json(userList);

 })



})


/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find({})
    .then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

router.put('/', function (req, res) {
  console.log(req.body)
  User.findOne({ email: req.session.user.email }, function (err, user, next) {
    if (user) {
      // var firstName = req.body.firstName
      // var lastName = req.body.lastName
      // var email = req.body.email
      // var nickname = req.body.nickname
      // var about = req.body.about
      // var DOB = req.body.DOB
      // var city = req.body.city
      // var state = req.body.state
      // var zip = req.body.zip
      // var country = req.body.country
      // var work = req.body.work
      // var relationship_status = req.body.relationship_status

      User.update({ 
       firstName : req.body.firstName,
       lastName: req.body.lastName,
       email: req.body.email,
       nickname: req.body.nickname,
       about: req.body.about,
       //DOB : req.body.DOB,
       city: req.body.city,
       state: req.body.state,
       //zip : parseInt(req.body.zip),
       country : req.body.country,
       work:req.body.work,
       relationship_status : req.body.relationship_status
      
      })
    }
  })
})




module.exports = router;
