var ballon = document.getElementById("ballon");

var size = 200;

var colors = ["red", "green", "blue"];

var colorIndex = 0;

function updateBallon() {
    ballon.style.width = size + "px";
    ballon.style.height = size + "px";
    ballon.style.backgroundColor = colors[colorIndex];
}


ballon.addEventListener("click", function() {
    size = size + 10;
    colorIndex = (colorIndex + 1) % colors.length;

if (size > 420) {
        size = 200;
    }

    updateBallon();
});


ballon.addEventListener("mouseleave", function() {
    size = size - 5;

if (size < 200) {
        size = 200;
    }



colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBallon();
});
