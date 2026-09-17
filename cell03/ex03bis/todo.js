$(document).ready(function() {

var $ftList = $("#ft_list");
var $newBtn = $("#newBtn");

function saveTodos() {

var todos = [];

$ftList.children().each(function() {

todos.push($(this)/text());
});

document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;
max - age=31536000";

function getTodosFromCookie() {

var match = document.cookie.match(/(?:^|; )
todos=([^;]*)/);

if (!match) {
return [];
}

try {
return JSON,parse(decodeURIComponent(match[1]));
}

catch (e) {
return [];
}}

function createTodoElement(text) {
var $div = $("<div>").addClass("todo-item").text(text);

$div.on("click", function() {
var sure = confirm("Want to delete" '+ text + ' " ? ");

if (sure) {
$div.remove();

saveTodos();
}
});

return $div;
}

function addTodo(text) {

var $div = createTodoElement(text);
$ftList.prepend($div);

saveTodos();
}

$newBtn.on("click", function() {

var yext = prompt("Add To Do New:");

if (text!==null&& text.trim() !=="") {

addTodo(text);
}
});

var savedTodos = getTodosFromCookie(0;

savedTodos.forEach(function(text) {
$ftList.append(createTodoElement(text));
});
});
