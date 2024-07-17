// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(n) {
  if (n % 2 == 0) console.log(`${n} is Even`);
  else console.log(`${n} is Odd`);
}
// • Task 2: Write a function to calculate the square of a number and return the result.
function checkEvenOdd(n) {
  return n * n;
}
// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max = function (n1, n2) {
  return n1 > n2 ? n1 : n2;
};

// • Task 4: Write a function expression to concatenate two strings and return the result.

const concatString = function (s1, s2) {
  return s1.cancat(s2);
};

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const calculate = (a, b) => {
  return a + b;
};
// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

//way - 1
// str.includes(char);
//way - 2
// const str = "Hello, world!";
// const char = "o";
// const regex = new RegExp(char, "g");
// if (str.match(regex)) {
//   console.log(`${char} is present in the string.`);
// } else {
//   console.log(`${char} is not present in the string.`);
// }
//way - 3
const checkCharInSting = (s, specificChar) => {
  if (s.indexOf(specificChar) == -1) return 0;
  else return 1;
};

console.log(checkCharInSting("carname", "k"));
// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const productOf = (a = 2, b = 4) => {
  return a * b;
};

console.log(productOf());
// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greeting = (name = "anand", age = 24) => {
  console.log(`hello ${name} your age is ${age}`);
};

greeting();
// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
//  A higher-order function in JavaScript is a function that can take other functions as
//  arguments or return a function as its result. This concept leverages the fact that functions in JavaScript are first-class citizens, meaning they can be treated like any other data type such as strings or numbers.

// Higher-order function that takes a callback function as an argument
function sayHello(name, n) {
  for (let i = 1; i <= n; i++) console.log(`Hello, ${name}!`);
}

function greet(greeting, name, n) {
  return greeting(name, n);
}

greet(sayHello, "Anand", 5); // Outputs: Hello, Alice!

// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const fun2 = (fun0, fun1, value) => {
  return fun1(fun0(value));
};

function doubleValue(n) {
  return n * 2;
}

function addTwo(n) {
  return n + 2;
}

console.log(fun2(doubleValue, addTwo, 4));

//Immediately Invoked Function Expression

(function (name, age) {
  console.log(`${name} has age ${age}`);
})("anand", 5);
