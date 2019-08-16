let notes = getSavedModule();
const date = moment();

const filters = {
  searchText: '',
  sortBy: 'byEdited'
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
  const newNote = {
    id: uuidv4(),
    title: '',
    body: '',
    createAt: date.valueOf(),
    updateAt: date.valueOf()
  };
  notes.push(newNote);
  saveNotes(notes);
  location.assign(`./edit.html#${newNote.id}`);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e) {
  filters.sortBy = e.target.value;

  renderNotes(notes, filters);
});

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
