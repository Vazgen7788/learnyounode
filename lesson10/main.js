
var port = process.argv[2];
var net  = require('net');

var server = net.createServer(function(socket) {

	/*date is current time YYYY-MM-DD hh:mm*/

	var format = function(num) {
		num = num.length > 1 ? num : '0' + num;
		return num;
	};

	var date = new Date();
	var year = date.getFullYear();

	var month = (date.getMonth() + 1).toString();
	month = format(month);

	var day = date.getDate().toString();
	day = format(day);

	var hour = date.getHours().toString();
	hour = format(hour);

	var min = date.getMinutes().toString();
	min = format(min);

	var currentDate = year+'-'+month+'-'+day+' '+hour+':'+min+'\n';

	socket.end(currentDate);

});


server.listen(process.argv[2]);

// pc answer
/*
var net = require('net')  
      
    function zeroFill(i) {  
      return (i < 10 ? '0' : '') + i  
    }  
      
    function now () {  
      var d = new Date()  
      return d.getFullYear() + '-'  
        + zeroFill(d.getMonth() + 1) + '-'  
        + zeroFill(d.getDate()) + ' '  
        + zeroFill(d.getHours()) + ':'  
        + zeroFill(d.getMinutes())  
    }  
      
    var server = net.createServer(function (socket) {  
      socket.end(now() + '\n')  
    })  
      
    server.listen(Number(process.argv[2])) 
*/