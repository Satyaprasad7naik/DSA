/**
 * DSA Problem 22: Square of Sorted Array
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in non-decreasing order.
 * 
 * Example: [-4, -1, 0, 3, 10] => [0, 1, 9, 16, 100]
 */

// Approach 1: Two Pointer (Most Efficient - O(n) time, O(n) space)
const sortedSquares = (nums) => {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  
  // Fill result array from right to left
  // This ensures larger squares are placed at the end
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  
  return result;
};

// Approach 2: Simple (Brute Force - O(n log n) time due to sorting)
const sortedSquaresBruteForce = (nums) => {
  return nums.map(num => num * num).sort((a, b) => a - b);
};

// Test cases
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// Output: [0, 1, 9, 16, 100]

console.log(sortedSquares([-7, -3, 2, 3, 11]));
// Output: [4, 9, 9, 49, 121]

console.log(sortedSquares([0]));
// Output: [0]

console.log(sortedSquares([-5, -3, -1]));
// Output: [1, 9, 25]

// Export for testing
module.exports = { sortedSquares, sortedSquaresBruteForce };
