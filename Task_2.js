'use strict'
// a

function line() {
	console.log("============================================================");
}

var Student = {
	yearOfStuding : 5,
	facultyName : "AB"
};

var Student1 = {
	yearOfStuding : 3,
	facultyName : "CD"
};

var Student2 = {
	yearOfStuding : 2,
	facultyName : "EG"
};

var Student3 = {
	yearOfStuding : 5,
	facultyName : "GH"
};

var Student4 = {
	yearOfStuding : 2,
	facultyName : "IJ"
};

var Student5 = {
	yearOfStuding : 6,
	facultyName : "KL"
};

var Student6 = {
	yearOfStuding : 3,
	facultyName : "NO"
};

var Student7 = {
	yearOfStuding : 5,
	facultyName : "PQ"
};

var Student8 = {
	yearOfStuding : 1,
	facultyName : "RS"
};

var Student9 = {
	yearOfStuding : 6,
	facultyName : "TU"
};

var studentArray = [ Student, Student1, Student2, Student3, Student4, Student5,
		Student6, Student7, Student8, Student9 ];
var facultyNameArray = studentArray.map(function(item) {
	return item.facultyName
});
console.log(facultyNameArray);
line();

// b
var studentArraySum = studentArray.reduce(function(sum, current) {
	return sum + current.yearOfStuding;
}, 0);
console.log(studentArraySum);