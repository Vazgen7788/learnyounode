
var url = process.argv[2];
var http = require('http');
/*buffer list*/
var bl  = require('bl');


http.get(url, function(response) {

	response.setEncoding('utf8');
	var collectData = '';


	response.pipe(bl(function(err, data) {
		if(!err) {
			collectData = data.toString('utf8');
		}
	}));

	response.on('end', function() {
		console.log(collectData.length);
		console.log(collectData);
		collectData = '';
	});

});

/*pc answer
var http = require('http')  
var bl = require('bl')  
  
http.get(process.argv[2], function (response) {  
  response.pipe(bl(function (err, data) {  
    if (err)  
      return console.error(err)  
    data = data.toString()  
    console.log(data.length)  
    console.log(data)  
  }))    
})  

*/