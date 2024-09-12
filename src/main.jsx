//declaring a variable with the let key word makes it only accessible within the block of code in which it is defined..this solved the problem of var where variable could still be accessed after the block of code..always use let
// function sayHello() {
//   for (let i = 0; i < 4; i++) {
//     console.log(i);
//   }
// }

// sayHello();

//const variables can not be reassigned
// const x = 1;
// x = 9;

// const person = {
//   name: "Aye",
//   walk() {
//variable of person with one property and 2 methods
//     console.log(this);
//   },
// };

//every function in javascript is an object with members which has properties and methods we can use..once we add the . , we get a list of dropdow of these membersn

// person.walk();
// const walk = person.walk.bind(person);
// walk();
//in the case of input field we use this method to target input field from users

// const targetInput = 'name';
// person[targetInput.value] = 'Helen';

//ARROW FUNCTIONS
// const square = (number) => number * number;
// console.log(square(2));

// const person = {
//   talk() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   },
// };
// person.talk(); //arrow function dont rebind the this keyword

//MAP method
// const colors = ["yellow", "blue", "pink"];
// const items = colors.map((color) => `<p>${color}</p>`);
// console.log(items);

//ARRAY DESTRUCTURING
// const address = {
//   name: "",
//   city: "",
//   country: "",
// };

// const { country: cont } = address;
// console.log(address);

//SPREAD OPERATOR
// const first = { name: "Eke" };
// const second = { job: "Director" };
// const check = { ...first, ...second };

// const clone = { ...check };
// console.log(clone);

import Teacher, { promote } from "./teacher";

const teacher = new Teacher("Udo", "Bsc");
teacher.teach();

//EXPORT DEFAULT
//this is the main function that is exported from a module
// //default -> import xyz from ''
// name -> import {xyz} from
