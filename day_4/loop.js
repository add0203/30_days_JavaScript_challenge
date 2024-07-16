// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 0; i <= 10; i++) {
  process.stdout.write(`${i}`);
  if (i != 10) {
    process.stdout.write(",");
  }
  console.log();
}

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  process.stdout.write(`${i}x${5}=${i * 5}`);
  console.log();
}

// Activity 2: While Loop
// • Task 3:
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

console.log(sum);

// • Task 4:
// Write a program to print numbers from 10 to 1 using a while loop.

num = 10;
while (num > 0) {
  process.stdout.write(`${num}`);
  num--;
  if (num > 0) {
    process.stdout.write(",");
  }
}
console.log();

// Activity 3:
// Do...While Loop
// . Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

num = 1;

do {
  process.stdout.write(`${num}`);
  if (num < 5) {
    process.stdout.write(",");
  }
  num++;
} while (num < 6);

// Activity 5: Loop Control Statements
// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log();
console.log("task 8");
for (let k = 1; k <= 10; k++) {
  if (k == 5) continue;
  process.stdout.write(`${k},`);
}
console.log();
console.log("task 8 finished");

// Task 6: Write a program to calculate the factorial of a number using a do. ..while loop.

let userInput;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateFactorial(n) {
  let factorial = 1;
  let i = 1;
  do {
    factorial *= i;
    i++;
  } while (i <= n);
  return factorial;
}

// Activity 4:
// Nested Loops
// • Task 7:
// Write a program to print a pattern using nested for loops:
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *

function starPattern(n) {
  console.log("star pattern");
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`* `);
    }
    // process.stdout.write()
    console.log();
  }
}

rl.question("Enter number: ", (answer) => {
  userInput = parseInt(answer);
  starPattern(userInput);
  console.log(`factorial of ${userInput} is ${calculateFactorial(userInput)}`);
  rl.close();
});

// • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
