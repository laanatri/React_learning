//// variables

let myName = 'max';
console.log(myName);

const myFirstName = 'adé';
console.log(myFirstName);

////
//// arrow functions

const myFction = (name, lastName) => {
  console.log(name + " " + lastName);
}
myFction("adé", "laanatri");

const myFct = (name) => {
  console.log(name);
}
myFct("adé");

const multiply = number => number * 2;
console.log(multiply(2));

////
//// export import

const person = () => {
  name: 'max'
}
export default person

export const clean = () => {}

export const baseData = 10;

//we don't care about the name because it's an export default
import person from './person.js'
import prs from './person.js'

//it's imported by its name, so it's important to name them correctly
import { baseData } from './utility.js'
import { clean } from './utility.js'

//to set an alias to the const
import { smth as Smth } from './utility.js'

//multiple const exported, so bundled is a javascript object is everything in properties
import * as bundled from './utility.js'

////
//// classes

//Properties and methods ES6
class Human {
  constructor() {
    this.gender = 'male';
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
  }
  call() {
    console.log(this.name);
  }
}

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
console.log(myPerson.printGender());

//Different syntax ES7
class Human {
  gender = 'male';
  
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Max';

  call = () => {
    console.log(this.name);
  }
}

////
//// Spread end Rest operators

///...

//Spread
const newArray = [...oldArray, 1, 2];
const nexObject = { ...oldObject, newProp: 5};

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

const person = {
  name: 'Max'
};
const newPerson = {
  ...person,
  age: 28
};

//Rest
function sortArgs(...args) {
  return args.sort()
};

const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));

////
//// Destructing

//Array
[a, b] = ['hello', 'max']
console.log(a)  //>>> hello
console.log(b)  //>>> max

const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);  //>>> 1 2
///ou
[num1, , num3] = numbers;
console.log(num1, num3);  //>>> 1 3

//Object
//{name} = {name: 'max', age: 28};
console.log(name)  //>>> max
console.log(age)  //>>> undefined

////
//// different copy end references

const person = {
  name: 'max'
};

//reference to person, we can change person, the second will change to
const secondPerson = person; 

//copy of person at this moment, we can change person, the second will never change
const secondPerson = {
  ...person
};

////
//// Refreshing array functions

const numbers = [1, 2, 3];

const doubledNumbers = numbers.map( number => number * 2 );

console.log(numbers);  //>>> [1, 2, 3]
console.log(doubledNumbers);  //>>> [2, 4, 6]

////
//// That's a wrap

//// Important array functions

map() //=> fait un foreach tout en gardant la structure de l'array
const map1 = array1.map(x => x * 2);


find() //=> return le premier élément qui répond à la condition
const found = array1.find(element => element > 10);


findIndex() //=> return l'index du premier élément qui répond à la condition
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));


reduce() //=> return l'accumulation de tout les chiffres
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));  //>>> 10
console.log(array1.reduce(reducer, 5));  //>>> 15
const reducer = (accumulator, currentValue) => (accumulator * 2) + currentValue;
console.log(array1.reduce(reducer));  //>>> 26


concat() //=> ajoute un ou plusieurs array à un premier
const a = [1, 2, 3, 4];
const b = [5, 6, 7];
const c = a.concat(b);  //>>> [1, 2, 3, 4, 5, 6, 7]
const d = [].concat(a, b);  //>>> [1, 2, 3, 4, 5, 6, 7]


slice() //=> return un morceau d'un array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 4));  //>>>[2, 3, 4]
console.log(numbers.slice(-3));  //>>>[3, 4, 5]
console.log(numbers.slice(1));  //>>>[2, 3, 4, 5]


splice() //=>
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(2, 3));  //>>> [1, 2]
console.log(numbers.splice(2, 2, 7, 8));  //>>> [1, 2, 7, 8, 5]
console.log(numbers.splice(2, 0, 7, 8));  //>>> [1, 2, 7, 8, 3, 4, 5]
