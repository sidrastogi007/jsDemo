// Get todos data
const getSavedModule = () => {
  const todoJSON = localStorage.getItem('todos');
  return todoJSON ? JSON.parse(todoJSON) : [];
};

// Save Todos in localStorage
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove Todo data
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle Completed value for Todos
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    todo.completed = !todo.completed;
  }
};

// Genrate Todo DOM
const genrateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkBoxEl = document.createElement('input');
  const titleEl = document.createElement('span');
  const buttonEl = document.createElement('button');

  // Setup todo checkbox
  checkBoxEl.setAttribute('type', 'checkbox');
  checkBoxEl.checked = todo.completed;
  todoEl.appendChild(checkBoxEl);
  checkBoxEl.addEventListener('change', () => {
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
  buttonEl.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Genrate DOM Summery
const genrateSummeryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};

// Render Todos
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector('#todos').innerHTML = '';

  const summeryEl = genrateSummeryDOM(incompleteTodos);
  document.querySelector('#todos').appendChild(summeryEl);

  filteredTodos.forEach((todo) => {
    const todosEl = genrateTodoDOM(todo);
    document.querySelector('#todos').appendChild(todosEl);
  });
};
