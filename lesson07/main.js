
var url = process.argv[2];
var http = require('http');

/*response type is Steam*/
http.get(url, function(response) {

	/*Set Encoding*/
	response.setEncoding('utf8');

	/*subscibe*/
	response.on('data', function(data) {
		console.log(data);
	});

	response.on('error', console.error);

});

/*
pc answer
var http = require('http')  
      
    http.get(process.argv[2], function (response) {  
      response.setEncoding('utf8')  
      response.on('data', console.log)  
      response.on('error', console.error)  
    }).on('error', console.error)  

*/