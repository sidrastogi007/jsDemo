let notes = getSavedModule();

const filters = {
  searchText: ''
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
  const newNote = {
    id: uuidv4(),
    title: '',
    body: ''
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
  console.log(e.target.value);
});

window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

const now = moment();
now
  .year(1996)
  .month(6)
  .date(8);
now.format('MMM D, YYYY');

console.log(now.format('MMM D, YYYY'));
