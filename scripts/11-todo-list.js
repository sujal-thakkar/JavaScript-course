// todo 1
const toDoArray = [];

function addTodo() {
    const todoInput = document.querySelector('.js-todo-input');
    if (todoInput.value !== '') {
        toDoArray.push(todoInput.value);
        console.log(toDoArray);
        todoInput.value = '';
    }
    else console.warn('Kya be lavde, zyada shaanapanti nai!')
}

// todo 2
const todoList2 = [];

function printTodo() {
    const todoInput2 = document.querySelector('.js-todo-input-2');
    const todos = document.querySelector('.js-todos');
    
    todoList2.push(todoInput2.value);
    let todosHTML = '';
    for(const todo of todoList2) {
        const html = `<p>${todo}</p>`;
        todosHTML += html;
    }
    todos.innerHTML = todosHTML;
    // console.log(todosHTML);
    todoInput2.value = '';
}