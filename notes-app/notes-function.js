'use strict'
// Read exiting notes from localStorage
const getSavedModule = () => {
  const notesJSON = localStorage.getItem('notes');
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return []
  }

};

// Save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove notes value
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => (note.id = id));

  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate the DOM structure for a note
const genrateNotesDOM = (note) => {
  const noteEl = document.createElement('div');
  const titleEl = document.createElement('a');
  const buttonEl = document.createElement('button');

  // Setup the note remove note button
  buttonEl.textContent = 'x';
  noteEl.appendChild(buttonEl);
  buttonEl.addEventListener('click', (e) => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  note.title.length > 0
    ? (titleEl.textContent = note.title)
    : (titleEl.textContent = 'Unnamed Notes');

  titleEl.setAttribute('href', `./edit.html#${note.id}`);
  noteEl.appendChild(titleEl);
  return noteEl;
};

// Sort Your notes by one of three ways

const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updateAt > b.updateAt) {
        return -1;
      } else if (a.updateAt < b.updateAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
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
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = genrateNotesDOM(note);
    document.querySelector('#notes').appendChild(noteEl);
  });
};

const genrateLastEdited = (timepstamp) =>
  `Lasr Edited ${moment(timepstamp).fromNow()}`;
