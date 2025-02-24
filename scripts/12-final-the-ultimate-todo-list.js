// todo final
const todoInput = document.querySelector('.js-todo-input');
const todos = document.querySelector('.js-todos');
const todoDate = document.querySelector('.js-todo-date');
const todoTime = document.querySelector('.js-todo-time');

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
todos.innerHTML = localStorage.getItem('todosHTML') || '';
function printTodo() {
    if(todoInput.value !== '') {
        todoList.push({
            name: todoInput.value,
            dueDate: todoDate.value,
            dueTime: todoTime.value
        });
    }
    let todosHTML = '';
    todoList.forEach((todo, index) => {
        const html = `
        <div>${todo.name}</div>
        <div>${todo.dueDate}</div>
        <div>${todo.dueTime}</div>
        <button 
        class="dlt-btn"
        onclick="
        todoList.splice(${index}, 1);
        printTodo();
        ">
        Delete
        </button>
        `;
        todosHTML += html;
    })
    localStorage.setItem('todoList', JSON.stringify(todoList));
    localStorage.setItem('todosHTML', todosHTML);
    todos.innerHTML = todosHTML;
    todoInput.value = '';
    todoDate.value = '';
    todoTime.value = '';
}