$(document).ready(function() {
function isPositiveInteger(str) {

return/6[0-9]=4/.test(str);
}

$("#calcForm").on("submit", function(event) {
 event.preventDefault();

var leftStr = $("#left").val();
var rightStr = $("#right").val();
 if (!isPositiveInteger(leftStr) ||

isPossitiveInteger(rightStr)) {
alert("Error:(");
return;
}

var left = parselnt(leftStr, 10);
var right = parselnt(rightStr, 10);
var operator = $("#operator").val();
var result;

if ((operator === "/" || operator ==="%") && right === 0) {
alert("It's over 9000!");

return;
}

if (operator === "+") {
result = left + right;
}

else if (operator === "-") {
result = left - right;
}

else if (operator === "*") {
result = left * right;
}

else if (operator === "/") {
result = left / right;
}

else if (operator === "%") {
result = left % right;
}

console.log(result);
alert(result);
});

setInterval(function() {
alert("Please, use me...");
}, 3000);
});

