// 76-NearestGreaterToLeft.js

// Problem:
// Given an array arr, for every element arr[i] find the nearest element
// to the LEFT of i that is STRICTLY greater than arr[i].
// If no such element exists, put -1.
//
// Example:
// Input:  [1, 3, 2, 4]
// Output: [-1, -1, 3, -1]
// Explanation:
// 1 -> no element on left, so -1
// 3 -> no greater element on left, so -1
// 2 -> nearest greater on left is 3
// 4 -> no greater element on left, so -1

function nearestGreaterToLeft(arr) {
  const n = arr.length;
  const stack = []; // will store potential candidates (values)
  const result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    // Pop all elements <= current element,
    // because they can't be nearest GREATER to left for this or future indices
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // If stack not empty, top is nearest greater to left
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    } else {
      result[i] = -1;
    }

    // Push current element as a candidate for future elements
    stack.push(arr[i]);
  }

  return result;
}

// Example usage:
const arr = [1, 3, 2, 4];
console.log(nearestGreaterToLeft(arr)); // [-1, -1, 3, -1]

module.exports = nearestGreaterToLeft;
