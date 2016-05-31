var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res) {

	if(req.method === 'GET') {
		console.log(req.url, 'req.url');

		var getData = url.parse(req.url, true);
		var date = new Date(getData.query.iso);
		var resData = null;

		if(getData.pathname === '/api/parsetime') {
			resData = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			};
		} else if(getData.pathname === '/api/unixtime') {
			resData = {
				unixtime: date.getTime()
			};
		}

		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(resData));
	} else {
		res.end('It works with GET');
	}

});


server.listen(port);

/*pc answer
var http = require('http')  
var url = require('url')  
  
function parsetime (time) {  
  return {  
    hour: time.getHours(),  
    minute: time.getMinutes(),  
    second: time.getSeconds()  
  }  
}  
  
function unixtime (time) {  
  return { unixtime : time.getTime() }  
}  
  
var server = http.createServer(function (req, res) {  
  var parsedUrl = url.parse(req.url, true)  
  var time = new Date(parsedUrl.query.iso)  
  var result  
  
  if (/^\/api\/parsetime/.test(req.url))  
    result = parsetime(time)  
  else if (/^\/api\/unixtime/.test(req.url))  
    result = unixtime(time)  
  
  if (result) {  
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.end(JSON.stringify(result))  
  } else {  
    res.writeHead(404)  
    res.end()  
  }  
})  
server.listen(Number(process.argv[2]))  
*/