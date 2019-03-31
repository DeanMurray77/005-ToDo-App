import uuidv4 from 'uuid/v4';

let todos = [];

loadSavedTodos();

// Get todos from Local Storage
function loadSavedTodos() {
    let todosJSON = localStorage.getItem('todos');

    if (todosJSON) {
        todos = JSON.parse(todosJSON);
    } else {
        todos = [];
    }
}

// Save todos to Local Storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Allow other modules to get the todos
const getTodos = () => todos;

// Remove a single todo via ID.
function removeTodo(id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTodos();
    }
}

// Change the complete status on a given todo
function toggleTodo(id) {
    const todo = todos.find(function (todo) {
        return todo.id == id;
    })

    if (todo) {
        todo.complete = !todo.complete;
        saveTodos();
    }
}

// Create a new todo
const createTodo = (todoText) => {
    if(todoText) {
        todos.push({
            id: uuidv4(),
            task: todoText,
            complete: false,
            category: event.target.elements.newCategory.value
        });
        
        saveTodos();    
    }
}

export { createTodo, getTodos, removeTodo, toggleTodo, loadSavedTodos };