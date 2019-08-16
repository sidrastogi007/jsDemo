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

// Remove notes value
const removeNote = function(id) {
  const noteIndex = notes.findIndex((note) => {
    return (note.id = id);
  });

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const genrateNotesDOM = function(note) {
  const noteEl = document.createElement('div');
  const titleEl = document.createElement('a');
  const buttonEl = document.createElement('button');

  // Setup the note remove note button
  buttonEl.textContent = 'x';
  noteEl.appendChild(buttonEl);
  buttonEl.addEventListener('click', function(e) {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length > 0) {
    titleEl.textContent = note.title;
  } else {
    titleEl.textContent = 'Unnamed Notes';
  }
  titleEl.setAttribute('href', `./edit.html#${note.id}`);

  noteEl.appendChild(titleEl);

  return noteEl;
};

// Sort Your notes by one of three ways

const sortNotes = function(notes, sortBy) {
  if (sortBy === 'byEdited') {
    return notes.sort(function(a, b) {
      if (a.updateAt > b.updateAt) {
        return -1;
      } else if (a.updateAt < b.updateAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort(function(a, b) {
      if (a.createAt > b.createAt) {
        return -1;
      } else if (a.createAt < b.createAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Reander application notes
const renderNotes = function(notes, filters) {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = genrateNotesDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

const genrateLastEdited = function(timepstamp) {
  return `Lasr Edited ${moment(timepstamp).fromNow()}`;
};
