'use strict'
const titleEl = document.querySelector('#note-title');
const lastUpdateEl = document.querySelector('#lastUpdate');
const bodyEl = document.querySelector('#note-body');
const removeEl = document.querySelector('#note-remove');
const noteId = location.hash.substring(1);
let notes = getSavedModule();

let note = notes.find((todo) => todo.id === noteId);

if (!note) {
  location.assign('./index.html');
}

titleEl.value = note.title;
bodyEl.value = note.body;
lastUpdateEl.textContent = genrateLastEdited(note.updateAt);

titleEl.addEventListener('input', (e) => {
  note.title = e.target.value;
  note.updateAt = moment().valueOf();
  lastUpdateEl.textContent = genrateLastEdited(note.updateAt);
  saveNotes(notes);
});

bodyEl.addEventListener('input', (e) => {
  note.body = e.target.value;
  note.updateAt = moment().valueOf();
  lastUpdateEl.textContent = genrateLastEdited(note.updateAt);
  saveNotes(notes);
});

removeEl.addEventListener('click', () => {
  removeNote(noteId);
  saveNotes(notes);
  location.assign('./index.html');
});

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find((todo) => {
      return todo.id === noteId;
    });

    if (!note) {
      location.assign('./index.html');
    }

    titleEl.value = note.title;
    bodyEl.value = note.body;
    lastUpdateEl.textContent = genrateLastEdited(note.updateAt);
  }
});
