/*
	Read file and console 
	log lines count
*/


var fs = require('fs');
var filePath = process.argv[process.argv.length - 1];

fs.readFile(filePath, 'utf8' ,function(err, data) {
	if(!err) {
		console.log(data.split('\n').length - 1);
	}
});
