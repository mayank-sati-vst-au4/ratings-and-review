// Run by tryping node index
console.log(" Welcome to nodejs");

// importing or requireing file from person.js in es5 way
// Common js method
const Person = require('./person');
console.log(Person);

// We cannot do this right now, node has not implemented this properly yet so we need to use babel for this.
// this is es6 way
//import Person from './person';


//
const person1 = new Person('Mayank Sati', 30);
const person2 = new Person('Harsh', 40);
person1.greeting();
person2.greeting();