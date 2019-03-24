let todos = loadSavedTodos();

const filters = {
    searchText: '',
    hideCompletedTasks: false,
    categoryDisplay: 'all'
}

displayTodos(todos, filters);

// Filter todo list
document.querySelector('#search-todos').addEventListener('input', function (event) {
    filters.searchText = event.target.value;
    displayTodos(todos, filters);
})

document.querySelector('#add-todo').addEventListener('submit', function (event){
    event.preventDefault();

    let todoValue = event.target.elements.newTodo.value.trim();

    if(todoValue.length > 0) {
        todos.push({
            id: uuidv4(),
            task: todoValue,
            complete: false,
            category: event.target.elements.newCategory.value
        });
    }
    
    event.target.elements.newTodo.value = '';
    saveTodos(todos);
    displayTodos(todos, filters);
})

document.querySelector('#hide-completed').addEventListener('change', function(event) {
    filters.hideCompletedTasks = event.target.checked;
    displayTodos(todos, filters);
})

document.querySelector('#filter-by-category').addEventListener('change', function(event) {
    filters.categoryDisplay = event.target.value;
    displayTodos(todos, filters);
})