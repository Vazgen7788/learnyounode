

var dir = process.argv[process.argv.length - 2];
var fileType = process.argv[process.argv.length - 1];
var filterByFileType = require('./module.js');

filterByFileType(dir, fileType, function(err, list) {
	if(!err) {
		list.forEach(function(fileName) {
			console.log(fileName);
		});
	} else {
		console.log(err);
	}
});


// pc
// var filterFn = require('./solution_filter.js')  
//      var dir = process.argv[2]  
//      var filterStr = process.argv[3]  
       
//      filterFn(dir, filterStr, function (err, list) {  
//        if (err)  
//          return console.error('There was an error:', err)  
       
//        list.forEach(function (file) {  
//          console.log(file)  
//        })  
//      })  