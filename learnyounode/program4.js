var fs = require('fs');

// add the argv methon again
var filename = process.argv[2];
// data and er handling
F = readFileSync(function callback (err, data) {
 console.log(data.toString().split('\n').length - 1);
});
