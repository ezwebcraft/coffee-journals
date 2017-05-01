var filesystem = require('fs')
var file_path = require('path')

var folder = process.argv[2]

fs.readdir(folder, function(err, list) {
console.log(file)
/* ... */

}

// fron nodejs doc
// fs.readdir(path[, options], callback)
// #
// History
// Version	Changes
// v7.0.0
//
// The callback parameter is no longer optional. Not passing it will emit a deprecation warning.
// v0.1.8
//
// Added in: v0.1.8
//
//     path <string> | <Buffer>
//     options <string> | <Object>
//         encoding <string> default = 'utf8'
//     callback <Function>
//
// Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
//
// The optional options argument can be a string specifying an encoding, or an object with an encoding property specifying the character encoding to use for the filenames passed to the callback. If the encoding is set to 'buffer', the filenames returned will be passed as Buffer objects.
