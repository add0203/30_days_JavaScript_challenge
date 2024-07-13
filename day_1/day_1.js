// activity - 1
var myNumber = 10;
console.log(myNumber);

let myString = "Hello, World!";
console.log(myString);

//activity - 2

const myBoolean = true;
console.log(myBoolean);

//activity - 3

let myNumber = 25;
let myString2 = "JavaScript";
let myBoolean2 = false;
let myObject = { name: "John", age: 30 };
let myArray = [1, 2, 3, 4, 5];

console.log(typeof myNumber);
console.log(typeof myString2);
console.log(typeof myBoolean2);
console.log(typeof myObject);
console.log(typeof myArray); // object (arrays are objects in JavaScript)

//activity - 4

let myVariable = "Initial Value";
console.log(myVariable);
myVariable = "New Value";
console.log(myVariable);

//activity - 5

const myConstant = 100;
myConstant = 200; // This will throw a TypeError: Assignment to constant variable.

//featuer request
let myNumber = 10;
let myString3 = "Hello";
let myBoolean3 = true;
let myObject3 = { key: "value" };
let myArray3 = [1, 2, 3];

console.log(`Value: ${myNumber}, Type: ${typeof myNumber}`);
console.log(`Value: ${myString}, Type: ${typeof myString3}`);
console.log(`Value: ${myBoolean}, Type: ${typeof myBoolean3}`);
console.log(`Value: ${myObject}, Type: ${typeof myObject3}`);
console.log(`Value: ${myArray}, Type: ${typeof myArray3}`);

//Reassingment

let reassignable = "Initial";
console.log(reassignable);
reassignable = "Reassigned";
console.log(reassignable);

const immutable = "Cannot Change";
console.log(immutable);
try {
  immutable = "Attempt to Change";
} catch (error) {
  console.log(error); // TypeError: Assignment to constant variable.
}
