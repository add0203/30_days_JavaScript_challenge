//task - 1 : Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 5;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//task - 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//task - 3 : Write a program to find the largest of three numbers using nested if-else statements.

let a = 10;
let b = 20;
let c = 30;

if (a >= b && a >= c) {
  console.log("a is the largest");
} else if (b >= a && b >= c) {
  console.log("b is the largest");
} else {
  console.log("c is the largest");
}

//task - 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

//task - 5 : Write a program that uses a switch case to assign a grade ('A', B', 'C, D, F) based on a score and log the grade to the console.

let score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`Grade: ${grade}`);

//task - 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 4;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); // Even

//task - 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
