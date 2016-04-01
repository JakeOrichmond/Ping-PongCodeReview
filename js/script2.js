$(document).ready(function() {
var numberGiven = parseInt(prompt("Please enter a positive number."));

for (var index = 1; index <= numberGiven; index +=1) {
	if (index % 3 === 0 && index % 5 === 0) {
		$("#list").append("<li>" + "ping-pong" + "</li>");
	}
	else if (index % 3 === 0) {
		$("#list").append("<li>" + "ping" + "</li>");
	}
	else if (index % 5 === 0) {
		$("#list").append("<li>" + "pong" + "</li>");
	}
	else
		$("#list").append("<li>" + index + "</li>");
	}
});
