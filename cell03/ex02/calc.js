var form = document.getElementById("calcForm");
var leftInput = document.getElementById("left");
var rightInput = document.getElementById("right");
var operatorSelect = document.getElementById("operator");


function isPositiveInteger(str) {
    return /^[0-9]+$/.test(str);
}

form.addEventListener("submit", function(event) {
event.preventDefault();

var leftStr = leftInput.value;
    var rightStr = rightInput.value;

if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert("Error :(");
        return;
    }

var left = parseInt(leftStr, 10);
    var right = parseInt(rightStr, 10);
    var operator = operatorSelect.value;
    var result;

if ((operator === "/" || operator === "%") && right === 0) {
        alert("It's over 9000!");
        return;
    }

if (operator === "+") {
        result = left + right;
    } else if (operator === "-") {
        result = left - right;
    } else if (operator === "*") {
        result = left * right;
    } else if (operator === "/") {
        result = left / right;
    } else if (operator === "%") {
        result = left % right;
    }

console.log(result);
    alert(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);
