// 74-NextGreaterElementRight.js

// Given an array nums, for each index i find the next greater element
// to the right of nums[i]. If it doesn't exist, put -1.
// Time: O(n), Space: O(n)

function nextGreaterElements(nums) {
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const stack = []; // will store indices in a monotonic decreasing stack

  // Traverse from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Pop all elements <= current, they can't be next greater
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }

    // If stack not empty, top index is next greater
    if (stack.length > 0) {
      res[i] = nums[stack[stack.length - 1]];
    }

    // Push current index onto stack
    stack.push(i);
  }

  return res;
}

// Example usage:
const arr = [2, 1, 2, 4, 3];
console.log(nextGreaterElements(arr)); // [4, 2, 4, -1, -1]

module.exports = nextGreaterElements;
