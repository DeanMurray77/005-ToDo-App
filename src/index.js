import { setFilters } from "./filters";
import { displayTodos } from "./views";
import { createTodo } from "./todos";

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

displayTodos();

// Filter todo list
document.querySelector('#search-todos').addEventListener('input', function (event) {
    setFilters({
        searchText: event.target.value
    })
    displayTodos();
})

document.querySelector('#add-todo').addEventListener('submit', function (event){
    event.preventDefault();

    let todoValue = event.target.elements.newTodo.value.trim();
    createTodo(todoValue);
    
    event.target.elements.newTodo.value = '';

    displayTodos();
})

document.querySelector('#hide-completed').addEventListener('change', function(event) {
    setFilters({
        hideCompletedTasks: event.target.checked
    })
    displayTodos();
})

document.querySelector('#filter-by-category').addEventListener('change', function(event) {
    setFilters({
        categoryDisplay: event.target.value
    })
    
    displayTodos();
})