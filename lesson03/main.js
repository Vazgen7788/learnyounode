/*
Read file and console line numbers
*/

var fs = require('fs');
var fileName = process.argv[2];

var buf = fs.readFileSync(fileName);
var fileContent = buf.toString();
var linesCount = fileContent.split('\n').length - 1;
console.log(linesCount);