var express = require('express');
var router = express.Router();
var multer = require('multer')
var fs = require('fs')
Stream = require('stream').Transform  

// const storage = multer.diskStorage({
//     destination: `../../media/cover_photo/`,
//     filename: "Test"
//   });


//   crypto.pseudoRandomBytes(16, function(err, raw) {
//     if (err) return callback(err);
  
//     callback(null, raw.toString('hex') + path.extname(file.originalname));
//   });

// var upload = multer({
//     dest: `../../media/cover_photo/`,
//   })

/* GET home page. */
router.post('/coverPhoto', function(req, res, next) {


    var data = new Stream();                                                    

  req.on('data', function(chunk) {                                       
    data.push(chunk);                                                         
  });                                                                         

  req.on('end', function() {                                             
    fs.writeFileSync('image.jpg', data.read());                               
  });                                                                         



    // var data = ''

    

    // req.on('data', function(chunk) {
    //     data += chunk
    // })
    
    // req.on('end', function () {
    //     console.log('File uploaded');
    //     fs.writeFile(`media/cover_photo/test.jpg`, data, function (err) {
    //         if (err) throw err;
    //         console.log('It\'s saved!');
    //      })

    //     res.writeHead(200);
    //     res.end();
    //   });
    
      



    // if (!req.file) {
    //     console.log("No file received");
    //     return res.send({
    //       success: false
    //     });
    
    //   } else {
    //     console.log('file received');
    //     return res.send({
    //       success: true
    //     })
    //   }
    
     //let imageFile = req.file


 
     

});

module.exports = router;
