// Get todos from Local Storage
function loadSavedTodos() {
    let todosJSON = localStorage.getItem('todos');

    if (todosJSON) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

//Display the Todos
function displayTodos(todos, filters) {
    const elTodoList = document.querySelector('#todo-list');

    // Initial filter getting ride of completed tasks
    let filteredTodos = todos.filter(function (todo) {
        if(filters.hideCompletedTasks) {
            return !todo.complete;
        } else {
            return true
        }
    })

    // Filter to show just the ones that match the filter input.
    filteredTodos = filteredTodos.filter(function (todo) {
        return todo.task.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    // Optional filter based on categoryDisplay
    if (filters.categoryDisplay != 'all') {
        filteredTodos = filteredTodos.filter(function (todo) {
            return todo.category.toLowerCase() === filters.categoryDisplay.toLowerCase();
        })
    }

    //Clear out the old todo list in the DOM
    elTodoList.innerHTML = '';

    // Get and populate statement around count of unfinished tasks
    
    elTodoList.appendChild(createSummaryElement(filteredTodos));

    if(filteredTodos.length) {
        filteredTodos.forEach(function (todo) {
            elTodoList.appendChild(createTodoElement(todo));
        })
    } else {
        const elEmptyMessage = document.createElement('p');
        elEmptyMessage.classList.add('empty-message');
        elEmptyMessage.textContent = "No to-dos to show";
        elTodoList.appendChild(elEmptyMessage);
    }
}

function createSummaryElement(filteredTodos) {
    let undoneParagraph = document.createElement('h2');
    undoneParagraph.classList.add('list-title');
    if(filteredTodos.length === 1) {
        undoneParagraph.textContent = `You have ${filteredTodos.length} matching task:`;
    } else {
        undoneParagraph.textContent = `You have ${filteredTodos.length} matching tasks:`;
    }

    return undoneParagraph;
}

function removeTodo(id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id;
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

// Change the complete status on a given todo
function toggleTodo(id) {
    const todo = todos.find(function (todo) {
        return todo.id == id;
    })

    if (todo) {
        todo.complete = !todo.complete;
    }
}

// Push individual todo onto the DOM
function createTodoElement(todo) {
    let taskStatus = '';

    if (todo.complete){
        taskStatus = 'Complete';
    } else {
        taskStatus = 'Not Complete';
    }
    
    // Create the Todo Elements
    let todoElement = document.createElement('label');
    let elContainer = document.createElement('div')
    let elCheckBox = document.createElement('input');
    let elParagraph = document.createElement('span');
    let elRemoveButton = document.createElement('button');
   
    // Setup Todo Checkbox
    elCheckBox.setAttribute('type', 'checkbox');
    elCheckBox.checked = todo.complete;
    elContainer.appendChild(elCheckBox);
    elCheckBox.addEventListener('change', function() {
        toggleTodo(todo.id);
        saveTodos(todos);
        displayTodos(todos, filters);
    });

    // Format & Setup the text block
    elParagraph.textContent = `${todo.task} (Category: ${todo.category}) (${taskStatus})`
    elContainer.appendChild(elParagraph);
    
    todoElement.classList.add('list-item');
    elContainer.classList.add('list-item__container');
    todoElement.appendChild(elContainer);

    // Setup RemoveButton
    elRemoveButton.textContent = 'remove';
    elRemoveButton.classList.add('button', 'button--text');
    todoElement.appendChild(elRemoveButton);
    elRemoveButton.addEventListener('click', function() {
        removeTodo(todo.id);
        saveTodos(todos);
        displayTodos(todos, filters);
    });

    return todoElement;
}

// Save todos to Local Storage
function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
