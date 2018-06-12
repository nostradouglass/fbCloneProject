var fs = require('fs')


fs.readFile('../static/images/defaultCoverPhoto.jpg', function(err, data) {
    if (err) throw err
    
    fs.writeFile('../media/CoverPhoto.jpg', new Buffer(data, "base64"), (err) => {
        if (err) throw err
        console.log("saved")
    })
})