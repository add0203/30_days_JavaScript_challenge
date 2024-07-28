// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// • Task 2: Create a multi-line string using template literals and log it to the console.

const multiLineString = `This is a multi-line string.
It spans multiple lines.
Using template literals makes it easy.`;
console.log(multiLineString);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5];
//one by one the element of the array is retrieved here
const [first, second, third, fourthEle] = numbers;
console.log(first, second, third, fourthEle);

// . Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};
const { title, author } = book;
console.log(title, author);

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Activity 4:
// Default Parameters
// . Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Activity 5: Enhanced Object Literals
// • Task 8. Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name1 = "Alice";
const age1 = 25;
const person1 = {
  name1,
  age1,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
console.log(person1);
person1.greet();

// • Task 9. Create an object with computed property names based on variables and log the object to the console.

const propName = "favoriteColor";
const person = {
  name: "Bob",
  age: 40,
  [propName]: "blue",
};
console.log(person);

//activity
