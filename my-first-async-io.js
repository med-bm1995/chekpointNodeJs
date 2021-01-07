var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function (err, data) {
    // fs.readFile(file, 'utf8', callback) can also be used  
    var lines = data.toString().split('\n').length - 1
    console.log(lines)
}
)
