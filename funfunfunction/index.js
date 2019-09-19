// function talk() {
//   console.log(this);
//   console.log(this.sound);
// }

// let animal = {
//   talk
// }
// // talk();
// // const dog = {
// //   sound: 'woof',
// //   talk
// // }
// // dog.talk();
// const cat = {
//   sound: 'Meyuuuu'
// }
// // const animals = talk.bind(cat);
// // animals()

// Object.setPrototypeOf(cat, animal);
// cat.talk()

let arr = ['sa', 'sb', 'sc', 'sd', 'se', 'sf'];
// rev(arr, 3)
function rev(arrayData, e) {
  let data = [...arrayData];
  let a = [];
  for (let i = 0; i < e; i++) {
    a.unshift(data[0]);
    data.shift()
  }
  console.log(arr, a.concat(data))
  a;
}



// const reverseArray = (arr, num) => arr.slice(0, num).reverse().concat(arr.slice(num))

// console.log(reverseArray(arr, 3))

console.log(arr.slice(3))