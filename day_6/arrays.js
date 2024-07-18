// Tasks/Activities:
// Activity 1 : Array Creation and Access
// • Task 1. Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(`next task`);

// • Task 2: Access the first and last elements of the array and log them to the console.

for (let i = 0; i < arr.length; i++) {
  if (i == 0 || i == arr.length - 1) console.log(arr[i]);
}
console.log(`next task`);
// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(`next task`);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
//make change in the original array
let lastElement = arr.pop();
let firstElement = arr.shift();
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(lastElement);
// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log(firstElement);
console.log(`next task`);
// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(0);
console.log(`next task`);
// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubleArray = arr.map((num) => num * 2);
console.log(doubleArray);
// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const onlyEven = arr.filter((num) => {
  if (num % 2 == 0) return num;
});

console.log(onlyEven);
// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
//reduce return the value of the acc to the varaible that we are assigning to it
const sum = arr.reduce((acc, num) => acc + num);
console.log(sum);
// Activity 4:
// Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(`next task`);
// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((element) => {
  process.stdout.write(`${element},`);
});
// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
// const row = 4  , col = 5;
// const twoDimArray = Array.from(Array(rows), () => new Array(columns).fill(0));
console.log();
const twoDimArray2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < twoDimArray2.length; i++) {
  for (let j = 0; j < twoDimArray2[0].length; j++) {
    process.stdout.write(`${twoDimArray2[i][j]},`);
  }
  console.log();
}

// • Task 13: Access and log a specific element from the two-dimensional array.
for (let i = 0; i < twoDimArray2.length; i++) {
  for (let j = 0; j < twoDimArray2[0].length; j++) {
    if (twoDimArray2[i][j] == 3) process.stdout.write(`${twoDimArray2[i][j]},`);
  }
  console.log();
}
