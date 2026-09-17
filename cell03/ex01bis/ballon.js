$(document).ready(function() {

var size = 200;
var colors = ["red", "green", "blue"];
var colorIndex = 0;
var $ballon = $("#ballon");

function updateBallon() {

$ballon.css({
width: size + "px", height: size + "px", backgroundColor: colors[colorIndex] });
}

$ballon.on("click", function() {
size = size + 10;
colorIndex = (colorIndex + 1) % color.length;

if (size > 420) {
size = 200; 
}

updateBallon();
});

$ballon.on("mouseleave", function() {
size = size - 5;

if (size < 200) {
size = 200;
}

colorIndex = (colorIndex - 1 + colors.length) % colors.length;

updateBallon();
});
});


