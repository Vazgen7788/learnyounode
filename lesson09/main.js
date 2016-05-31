
var http = require('http');
var async = require('async');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var urls = [url1,url2,url3];

var collectData = [];

async.map(urls, function (url, callback) {

	http.get(url, function(res) {
		// res.setEncoding('utf8');

		res.pipe(bl(function (err, data) {  
		    if (err) {
			    return callback(err);
		    }
		    return callback(null, data.toString('utf8'));
		}));
	});
}, function (err, data) {
	if(!err) {
		data.forEach(function(item) {
			console.log(item);
		});
	} else {
		console.error(err);
	}
});

/*
var http = require('http')  
var bl = require('bl')  
var results = []  
var count = 0  
  
function printResults () {  
  for (var i = 0; i < 3; i++)  
    console.log(results[i])  
}  
  
function httpGet (index) {  
  http.get(process.argv[2 + index], function (response) {  
    response.pipe(bl(function (err, data) {  
      if (err)  
        return console.error(err)  
  
      results[index] = data.toString()  
      count++  
  
      if (count == 3)  
        printResults()  
    }))  
  })  
}  
  
for (var i = 0; i < 3; i++)  
  httpGet(i)  

*/


