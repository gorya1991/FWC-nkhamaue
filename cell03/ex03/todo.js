var ftList = document.getElementById("ft_list");
var newBtn = document.getElementById("newBtn");

function saveTodos() {
    var todos = [];
    var items = ftList.children;

    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        ";path=/;max-age=31536000";
}

function getTodosFromCookie() {
    var match = document.cookie.match(/(?:^|; )todos=([^;]*)/);

    if (!match) {
        return [];
    }

    try {
        return JSON.parse(decodeURIComponent(match[1]));
    } catch (e) {
        return [];
    }
}

function createTodoElement(text) {
    var div = document.createElement("div");

    div.className = "todo-item";
    div.textContent = text;

    div.addEventListener("click", function () {
        var sure = confirm("Are you sure you want to delete this TODO?");

        if (sure) {
            ftList.removeChild(div);
            saveTodos();
        }
    });

    return div;
}

function addTodo(text) {
    var div = createTodoElement(text);

    ftList.insertBefore(div, ftList.firstChild);
    saveTodos();
}

newBtn.addEventListener("click", function () {
    var text = prompt("Enter a new TODO:");

    if (text !== null && text.trim() !== "") {
        addTodo(text);
    }
});

var savedTodos = getTodosFromCookie();

for (var i = 0; i < savedTodos.length; i++) {
    var div = createTodoElement(savedTodos[i]);
    ftList.appendChild(div);
}
