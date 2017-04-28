var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])

var content_of_file = contents.toString().split('\n').length - 1

console.log(content_of_file)
