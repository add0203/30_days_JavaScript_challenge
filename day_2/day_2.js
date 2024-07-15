let a1 = 5;
let b1 = 3;
console.log(a1 > 0 && b1 > 0); // true

let a2 = 5;
let b2 = -3;
console.log(a2 > 0 || b2 > 0); // true

let a3 = 5;
console.log(!(a3 > 0)); // false

let a4 = 5;
let result = a4 > 0 ? "Positive" : "Negative";
console.log(result); // Positive

let num1 = -3;
let res = num1 > 0 ? "Positive" : "Negative";
console.log(res); // Negative

let x = 10;
let y = 2;

console.log(`Addition: ${x + y}`); // 12
console.log(`Subtraction: ${x - y}`); // 8
console.log(`Multiplication: ${x * y}`); // 20
console.log(`Division: ${x / y}`); // 5
console.log(`Remainder: ${x % y}`); // 0

let a = 10;
let b = 5;

console.log(`a > b: ${a > b}`); // true
console.log(`a < b: ${a < b}`); // false
console.log(`a >= b: ${a >= b}`); // true
console.log(`a <= b: ${a <= b}`); // false
console.log(`a == b: ${a == b}`); // false
console.log(`a != b: ${a != b}`); // true

console.log(`a > 0 && b > 0: ${a > 0 && b > 0}`); // true
console.log(`a > 0 || b < 0: ${a > 0 || b < 0}`); // true
console.log(`!(a > 0): ${!(a > 0)}`); // false

let num = -3;
let result1 = num > 0 ? "Positive" : "Negative";
console.log(result1); // Negative
