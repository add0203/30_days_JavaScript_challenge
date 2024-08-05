// Day 21: LeetCode Easy
// Tasks/Activities:
// Activity 1: Two Sum
// • Task 1: Solve the 'Two Sum" problem on LeetCode.
// o Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// o Log the indices for a few test cases.

// Task 1: Two Sum
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

// Activity 2: Reverse Integer
// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// o Write a function that takes an integer and returns it with its digits reversed.
// o Handle edge cases like negative numbers and numbers ending in zero.
// o Log the reversed integers for a few test cases.
// Task 2: Reverse Integer
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.

function reverseInteger(x) {
  const sign = x < 0 ? -1 : 1;
  const reversed =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) * sign;
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversed;
}

// Test cases
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
console.log(reverseInteger(0)); // 0

// Activity 3: Palindrome Number
// • Task 3: Solve the "Palindrome Number" problem on LeetCode.
// o Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// o Log the result for a few test cases, including edge cases like negative numbers.
// Task 3: Palindrome Number
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.

function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false

// Activity 4: Merge Two Sorted Lists
// • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// o Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// o Create a few test cases with linked lists and log the merged list.

// Task 4: Merge Two Sorted Lists
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}

// Test cases
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);
while (mergedList !== null) {
  console.log(mergedList.val); // 1, 1, 2, 3, 4, 4
  mergedList = mergedList.next;
}

// Activity 5: Valid Parentheses
// • Task 5: Solve the 'Valid Parentheses" problem on LeetCode.
//      o Write a function that takes a string containing just the characters ')', '{', '}', '[' and ']', and determines if the input string is valid.
//      o A string is valid if open brackets are closed in the correct order.
//      o Log the result for a few test cases.
// Task 5: Valid Parentheses
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.

function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
