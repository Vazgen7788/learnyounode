/*
	Get arguments From console
	calculate sum and console log
	result
*/
var numArr = process.argv.slice(2);

var sum = 0;

numArr.forEach(function(i) {
   sum += +i; 
});

console.log(sum);

