// add both argv
var module1 = require('./module1.js');

var dirname = process.argv[2];
var ext = process.argv[3];

module1(dirname, ext, function(err, files) {
 for (i = 0; i < files.length; i++) {
    console.log(files[i]);
}
});
