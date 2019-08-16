const square = (num) => num * num;

const people = [
  {
    name: 'Andew',
    age: 27
  },
  {
    name: 'Vikram',
    age: 25
  },
  {
    name: 'Jess',
    age: 31
  }
];

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

const person = people.find((person) => person.age < 31);

console.log(person);
