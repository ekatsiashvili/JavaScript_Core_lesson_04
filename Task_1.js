'use strict'

function line() {
	console.log("====================================================================");
}

// task-1
// a

var array = [ 5, 7, 28, 39, -106, 87, -16, 57, 30, -47, 27, 45, 67, 2, 0, 89, 46, 78, 63, 65, 94, 33 ];

function sortMaxToMin(a, b) {
	if (a > b) {
		return 1;
	}
	if (a < b) {
		return -1;
	}
	return 0;
}


array.sort(sortMaxToMin);
console.log(array);
line();

// b
array.sort(sortMaxToMin);
array.reverse();
console.log(array);
line();

// 2
var arrayPositive = array.filter(function(number) {
	return number >= 0;
});

var arrayNegative = array.filter(function(number) {
	return number < 0;
});

console.log("Positive data:"+arrayPositive);
line();
console.log("Negative data:"+arrayNegative);
line();