const toDos = [{
    title : "my next trip",
    body : 'I would like to go to Spain',
},{
    title : 'Hobbits to work on',
    body: 'Exercise. Eating a bit better.',
},{
   title: 'Office modification',
   body : 'Get a new seat'
}]

const filter = {
    searchText : ''
}

const randerNotes = function( notes, filer) {
    const filterNotes = notes.filter(todo => {
        return todo.title.toLowerCase().includes(filer.searchText.toLowerCase())
    })
    
    document.querySelector('#notes').innerHTML = '';

    filterNotes.forEach(function(note){
        const newEle = document.createElement('p');
        newEle.textContent = note.title;
        document.querySelector('#notes').appendChild(newEle)
    })
}


document.querySelector('#create').addEventListener('click', function (e) {
    e.target.textContent = "Clicked"
});

document.querySelector('#remove').addEventListener('click', function (){
  document.querySelector('#para').remove()
})

document.querySelector('#filter').addEventListener('input', function(e){
    filter.searchText = e.target.value;
    randerNotes(toDos, filter);
})

