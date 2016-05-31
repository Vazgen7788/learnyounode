
var args = process.argv;
var dirPath = args[args.length - 2];
var fileType = args[args.length - 1];
var fs = require('fs');


fs.readdir(dirPath, function(err, list) {
	if(!err) {
		list.forEach(function(fileName) {
			var param = fileName.split('.');
			if( param.length > 1 && param[param.length - 1] == fileType) {
				console.log(fileName);
			}
		});
	}
});

// Pc answer
/*
var fs = require('fs')  
var path = require('path')  
  
var folder = process.argv[2]  
var ext = '.' + process.argv[3]  
  
fs.readdir(folder, function (err, files) {  
  if (err) return console.error(err)  
  files.forEach(function(file) {  
      if (path.extname(file) === ext) {  
          console.log(file)  
      }  
  })  
})  
*/

