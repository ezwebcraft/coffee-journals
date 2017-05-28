// add both argv
var dir = process.argv[2]
var ext = process.argv[3]

require('./moduleDir')(dir, ext, function (err, data) {
// add error checking
  if (err) {
		return console.error(err)
	}
// console out for each data
	data.forEach(function (item) {
		console.log(item);
	})
})
