// const notes = ['Note 2', 'Note 3', 'Note 4', 'Note 5',{}];
const notes = [ {}, 
{name:'papu',},{   name:'papu',},{   name:'papu',},{ name:'papu',},{ name:'papu',}
]

// console.log(notes.pop())
// notes.push('My New Note')
// console.log(notes.shift())
// notes.unshift('My Firt Note');

// notes.splice(1, 1, 'THis is the new seconf item')
// notes[1] = 123;

// notes.splice(3,1)
// notes.push('My New Note')++
// notes.shift()

// const doThis = function(item, index){
//   console.log(`${index +1}. ${item}`);
// }

// notes.forEach(doThis)
//console.log(notes);

// for (let count = notes.length -1; count >= 0; count-- ) {
//    console.log(notes[count], count);
// }

console.log(notes.findIndex(function( note, index) {
  console.log(note);
}))