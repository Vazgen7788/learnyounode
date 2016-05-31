
var fs = require('fs');

module.exports = function(folderPath, fileType, callback) {

	fs.readdir(folderPath, function(err, data) {
		if(!err) {
			var list = [];
			data.forEach(function(fileName) {
				var fileObj = fileName.split('.');
				if(fileObj.length >= 2 && fileObj[fileObj.length-1] === fileType) {
					list.push(fileName);
				}
			});
			callback(null, list);
		} else {
			return callback(err);
		}
	});

};

/*var fs = require('fs')  
var path = require('path')  
  
module.exports = function (dir, filterStr, callback) {  
  
  fs.readdir(dir, function (err, list) {  
    if (err)  
      return callback(err)  
  
    list = list.filter(function (file) {  
      return path.extname(file) === '.' + filterStr  
    })  
  
    callback(null, list)  
  })  
}  */
