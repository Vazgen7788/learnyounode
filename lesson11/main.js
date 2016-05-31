
var http = require('http');
var fs   = require('fs');
var port = process.argv[2];
var file = process.argv[3];

/*
	fs.createStream
*/

var server = http.createServer(function(req, res) {
	var rstr = fs.createReadStream(file);

	rstr.pipe(res);

});

server.listen(parseInt(port));

/*
pc answer
var http = require('http')  
var fs = require('fs')  
  
var server = http.createServer(function (req, res) {  
  res.writeHead(200, { 'content-type': 'text/plain' })  
  
  fs.createReadStream(process.argv[3]).pipe(res)  
})  
   
server.listen(Number(process.argv[2])) 
*/
