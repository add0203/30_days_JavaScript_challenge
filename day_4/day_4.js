// In JavaScript, a functional expression is a way to define a function and assign it to a variable. This is different from a function declaration, which defines a function with a specified name. Functional expressions can be either named or anonymous.

// ### Example of Functional Expressions

// 1. **Anonymous Function Expression**:

const greet1 = function () {
  console.log("Hello, world!");
};

greet1(); // Outputs: Hello, world!

// 2. **Named Function Expression**:

const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

console.log(factorial(5)); // Outputs: 120

// ### Arrow Function Expressions

// Arrow functions are a more concise way to write function expressions and were introduced in ES6 (ECMAScript 2015). Arrow functions do not have their own `this` value and are always anonymous.

// 1. **Basic Arrow Function**:

const greet = () => {
  console.log("Hello, world!");
};

greet(); // Outputs: Hello, world!

// 2. **Arrow Function with Parameters**:

const add1 = (a, b) => {
  return a + b;
};

console.log(add1(2, 3)); // Outputs: 5

// 3. **Shortened Arrow Function (Implicit Return)**:

const add = (a, b) => a + b;

console.log(add(2, 3)); // Outputs: 5

// 4. **Arrow Function Returning an Object**:

const createPerson = (name, age) => ({ name: name, age: age });

console.log(createPerson("John", 30));
// Outputs: { name: 'John', age: 30 }

// ### IIFE (Immediately Invoked Function Expression)

// An IIFE is a function that is executed right after it is defined. This is useful for creating a new scope and avoiding polluting the global namespace.

// 1. **Basic IIFE**:

(function () {
  console.log("IIFE executed!");
})(); // Outputs: IIFE executed!

// 2. **IIFE with Parameters**:

(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice"); // Outputs: Hello, Alice!

// ### Examples in Practical Use

// 1. **Using a Functional Expression to Handle Events**:

document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// 2. **Using Arrow Functions for Array Methods**:

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);

console.log(squares); // Outputs: [1, 4, 9, 16, 25]

// Functional expressions in JavaScript provide flexibility in defining functions, assigning them to variables, and passing them as arguments. Arrow functions offer a concise syntax and are particularly useful in functional programming patterns. IIFEs help in creating new scopes and avoiding global namespace pollution.
