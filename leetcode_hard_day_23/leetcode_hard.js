// Day 23: LeetCode Hard
// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays
// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// o Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// o Log the median for a few test cases, including edge cases.
// Activity 2: Merge k Sorted Lists
// • Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// o Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// o Create a few test cases with linked lists and log the merged list.
// Activity 3: Trapping Rain Water
// • Task 3: Solve the 'Trapping Rain Water" problem on LeetCode.
// o Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// o Log the amount of trapped water for a few test cases.
// Activity 4: N-Queens
// • Task 4: Solve the "N-Queens" problem on LeetCode.
// o Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// o Log the distinct solutions for a few test cases.
// Activity 5: Word Ladder
// • Task 5: Solve the "Word Ladder" problem on LeetCode.
// o Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed
// at a time and each transformed word must exist in the word list.
// o Log the length of the shortest transformation sequence for a few test cases.

// Day 23: LeetCode Hard

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.

function findMedianSortedArrays(nums1, nums2) {
  let combined = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = Math.floor(combined.length / 2);

  if (combined.length % 2 === 0) {
    return (combined[mid - 1] + combined[mid]) / 2;
  } else {
    return combined[mid];
  }
}

// Test cases for Median of Two Sorted Arrays
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0.0
console.log(findMedianSortedArrays([], [1])); // Output: 1.0
console.log(findMedianSortedArrays([2], [])); // Output: 2.0

// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

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
  return dummyHead.next;
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    let mergedList = mergeTwoLists(lists.shift(), lists.shift());
    lists.push(mergedList);
  }
  return lists[0];
}

// Test cases for Merge k Sorted Lists
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));
let mergedList = mergeKLists([l1, l2, l3]);

while (mergedList) {
  console.log(mergedList.val); // Output: 1 1 2 3 4 4 5 6
  mergedList = mergedList.next;
}

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.

function trap(height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

// Test cases for Trapping Rain Water
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 0, 2])); // Output: 1
console.log(trap([3, 0, 2, 0, 4])); // Output: 7

// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.

function solveNQueens(n) {
  let results = [];
  let board = Array.from({ length: n }, () => ".".repeat(n));

  function placeQueens(
    row = 0,
    cols = new Set(),
    diags1 = new Set(),
    diags2 = new Set()
  ) {
    if (row === n) {
      results.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      let diag1 = row - col,
        diag2 = row + col;
      if (cols.has(col) || diags1.has(diag1) || diags2.has(diag2)) continue;

      board[row] = board[row].slice(0, col) + "Q" + board[row].slice(col + 1);
      cols.add(col);
      diags1.add(diag1);
      diags2.add(diag2);

      placeQueens(row + 1, cols, diags1, diags2);

      board[row] = board[row].slice(0, col) + "." + board[row].slice(col + 1);
      cols.delete(col);
      diags1.delete(diag1);
      diags2.delete(diag2);
    }
  }

  placeQueens();
  return results;
}

// Test cases for N-Queens
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Output: [["Q"]]

// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.

function wordLadderLength(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length) {
    let [word, length] = queue.shift();
    if (word === endWord) return length;

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // ASCII a-z
        let newWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, length + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

// Test cases for Word Ladder
console.log(
  wordLadderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5
console.log(
  wordLadderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
); // Output: 0
console.log(wordLadderLength("a", "c", ["a", "b", "c"])); // Output: 2
console.log(wordLadderLength("lost", "cost", ["most", "fost", "lost", "cost"])); // Output: 2
