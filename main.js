//CONST AND LET
var name = "John"; //es5

const username = "John Doe"; //cannot be changed, must be initialized with a value
let myname = "Margai";

const person = {
  name: "John",
  age: 25
};

person.name = "Jack"; //can change values inside object that has been created

//using arrays
const nums = [1, 2, 3];
nums.push(5);

//ARROW FUNCTIONS

// function sayHello() {
//     console.log('Hello');
// }

const sayHello = () => {
  console.log("Hello");
};

const sayHey = () => console.log("Hey"); //if only one line
const params = name => console.log(`Hello ${name}`); //one parameter, >1 (name, surname)//so cool

//FOREACH
const fruits = ["Apples", "Oranges", "Pineapples", "Guavas"];

fruits.forEach((fruit, index) => {
  console.log(fruit);
});

//MAP
//returns an array that you can change each item the way you want
const oneFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(oneFruit); //removes last character in word

//FILTER
//returns an array with items filtered out
const people = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Spongebob" }
];

const people2 = people.filter(person => person.id !== 2);

console.log(people2); //removes person with id = 2

//SPREAD
//spread values out into their properties
const arr = [1, 2, 3];
const arr2 = [...arr, 4]; //1, 2, 3, 4 //[arr, 4] = [[1, 2, 3],4]

console.log(arr2);

const human = {
  name: "Margai",
  age: 25
};

const human2 = {
  ...human,
  email: "margai@me.com"
};

console.log(human2);

//DESTRUCTURING
//pull values out of object and arrays
const profile = {
  uname: "Sally Bee",
  address: {
    street: "25 Corner St.",
    city: "Corner"
  },
  hobbies: ["music", "movies"]
};

const { uname, address, hobbies } = profile; //pulling out everything based on var name

console.log(uname, address, hobbies[0]);

const { street } = profile.address; //get street

//CLASSES
class Personel {
  constructor(name, age) {
    //console.log('ran');
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const personel1 = new Personel("Sarah", 20);
const personel2 = new Personel("Fergie", 21);

console.log(personel1.greet());

//SUBCLASSES
//extend another class
class Customer extends Personel {
  constructor(name, age, balance) {
    super(name, age); //part of parent/related class
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer("Hannah", 25, 400);

console.log(customer1.info());

//MODULES

//file 1 (file1.js)
export const filename = "Learn Javascript ES6+";
export default className; //export class from file 1

//file 2 (file2.js)
import { filename } from "./file1";
import className from "./file1";
