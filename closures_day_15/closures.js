// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Closures are a fundamental concept in JavaScript that enable powerful and flexible programming patterns.
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.
// This access persists even after the outer function has finished executing.

function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am outside!

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount()); // Output: 1

// • Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
// Activity 2: Practical Closures
// . Task 3: Write a function that generates unique 'Ds. Use a closure to keep track of the last generated ID and increment it with each call.
// . Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// Activity 4: Module Pattern
// . Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// • Task 8. Create a memoized version of a function that calculates the factorial of a number.
