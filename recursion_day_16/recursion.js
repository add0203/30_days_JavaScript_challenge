// Day 16: Recursion
// Tasks/Activities:
// Activity 1 :
// Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const fact = (num) => {
  if (num == 0) return 1;
  return num * fact(num - 1);
};

console.log(fact(4));
// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const Fibonacci = (num) => {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else return Fibonacci(num - 1) + Fibonacci(num - 2);
};

let n = 5;
for (let i = 0; i < n; i++) {
  console.log(Fibonacci(i));
}
// Activity 2: Recursion with Arrays
// . Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

const sumAllElement = (nums) => {
  if (nums.length == 0) return 0;
  // Recursive case: Sum the first element with the sum of the rest of the array
  return nums[0] + sumAllElement(nums.slice(1));
};

const nums = [1, 2, 3, 10, 5];

console.log(`sum of the element of the array : ${sumAllElement(nums)}`);

// . Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
const findMax = (arr) => {
  if (arr.length === 1) return arr[0];

  //update the next max element
  const maxEle = findMax(arr.slice(1));

  //return the max (first element , current Max element)
  return arr[0] > maxEle ? arr[0] : maxEle;
};

console.log(`max value of the array : ${findMax(nums)}`);
// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
// Activity 4:
// Recursive Search
// . Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
// . Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
// Activity 5: Tree Traversal (Optional)
// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
