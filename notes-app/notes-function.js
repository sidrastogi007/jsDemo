// Read exiting notes from localStorage
const getSavedModule = function() {
  const notesJSON = localStorage.getItem('notes');

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// Save the notes to localStorage
const saveNotes = function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Generate the DOM structure for a note
const genrateNotesDOM = function(note) {
  const noteEl = document.createElement('p');
  if (note.title.length > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = 'Unnamed Notes';
  }

  return noteEl;
};

// Reander application notes
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = genrateNotesDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};
