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
const todoInput2 = document.querySelector('.js-todo-input-2');
const todos = document.querySelector('.js-todos');

function printTodo() {
    if(todoInput2.value !== '') todoList2.push(todoInput2.value);
    let todosHTML = '';
    for(let i=0; i<todoList2.length; i++) {
        const todo = todoList2[i];
        const html = `
        <p>${todo}</p>`;
        todosHTML += html;
    }
    todos.innerHTML = todosHTML;
    todoInput2.value = '';
}

