// Get todos data
const getSavedModule = function() {
  const todoJSON = localStorage.getItem('todos');
  if (todoJSON !== null) {
    return JSON.parse(todoJSON);
  } else {
    return [];
  }
};

// Save Todos in localStorage
const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove Todo data
const removeTodo = function(id) {
  const todoIndex = todos.findIndex(todo => {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle Completed value for Todos
const toggleTodo = function(id) {
  const todo = todos.find(todo => {
    return todo.id === id;
  });
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

// Genrate Todo DOM
const genrateTodoDOM = function(todo) {
  const todoEl = document.createElement('div');
  const checkBoxEl = document.createElement('input');
  const titleEl = document.createElement('span');
  const buttonEl = document.createElement('button');

  // Setup todo checkbox
  checkBoxEl.setAttribute('type', 'checkbox');
  checkBoxEl.checked = todo.completed;
  todoEl.appendChild(checkBoxEl);
  checkBoxEl.addEventListener('change', function() {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup todo text
  titleEl.textContent = todo.text;
  todoEl.appendChild(titleEl);

  // Setup remove button
  buttonEl.textContent = 'x';
  todoEl.appendChild(buttonEl);
  buttonEl.addEventListener('click', function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Genrate DOM Summery
const genrateSummeryDOM = function(incompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};

// Render Todos
const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summeryEl = genrateSummeryDOM(incompleteTodos);
  document.querySelector('#todos').appendChild(summeryEl);

  filteredTodos.forEach(function(todo) {
    const todosEl = genrateTodoDOM(todo);
    document.querySelector('#todos').appendChild(todosEl);
  });
};
