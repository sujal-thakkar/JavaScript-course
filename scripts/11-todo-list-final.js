// todo final
const todoList3 = [];
const todoInput3 = document.querySelector('.js-todo-input-3');
const todos2 = document.querySelector('.js-todos2');
const todoDate = document.querySelector('.js-todo-date');

function printTodo2() {
    if(todoInput3.value !== '') {
        todoList3.push({
            name: todoInput3.value,
            dueDate: todoDate.value
        });
    }
    let todosHTML2 = '';
    for(let i=0; i<todoList3.length; i++) {
        const todo2 = todoList3[i];
        const html2 = `
        <p>
            <span class="todo-text">${todo2.name}</span>
            <span class="due-date-text">${todo2.dueDate}</span>
            <button 
                class="dlt-btn"
                onclick="
                    todoList3.splice(${i}, 1);
                    printTodo2();
                ">
                Delete
            </button>
        </p>`;
        todosHTML2 += html2;
    }
    todos2.innerHTML = todosHTML2;
    todoInput3.value = '';
}