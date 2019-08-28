// const Person = function (firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// }

// Person.prototype.getBio = function () {
//   let bio = `${this.firstName} is ${this.age}`;
//   this.likes.forEach(like => {
//     bio += ` ${this.firstName} like ${like}`;
//   })
//   return bio;
// }

// Person.prototype.setName = function (fullName) {
//   const name = fullName.split(' ');
//   this.firstName = name[0];
//   this.lastName = name[1];
// }

// const me = new Person('Sid', 'Rastogi', 23, ['fifa', 'pubg']);
// console.log(me.getBio());
// me.setName('Deepak Kumar');
// console.log(me.getBio());

// const person2 = new Person('Avi', 'Rastogi', 22);
// console.log(person2.getBio());

function testing() {
  const Person = new Promise((res, rej) => {
    const value = 23;
    console.log(this)
  })
  Person.bind(this)

  Person.then(res => {
    console.log('dssdsdsd')
  })
}

testing()

