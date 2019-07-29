const getSavedModule = function() {
  const todoJSON = localStorage.getItem('todos');
  if (todoJSON !== null) {
    return JSON.parse(todoJSON);
  } else {
    return [];
  }
};

const saveTodos = function(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const genrateTodoDOM = function(todo) {
  const p = document.createElement('p');
  p.textContent = todo.text;
  return p;
};

const genrateSummeryDOM = function(incompleteTodos) {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};

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
