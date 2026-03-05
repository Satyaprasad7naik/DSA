Problem:
Given an array of integers nums, find an index of a peak element. A peak element is an element that is strictly greater than its neighbors. For boundary elements, you only need to check the one existing neighbor. If there are multiple peaks, return the index of any one peak.




// 62-FindPeakElement.js
// Problem: Find Peak Element
// A peak element is an element that is strictly greater than its neighbors.
// Return the index of any one peak element.

/**
 * @param {number[]} nums
 * @return {number}
 */

function findPeakElement(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;

  const n = nums.length;

            // Check first element
  if (nums[0] > nums[1]) return 0;

           // Check middle elements
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }

           // Check last element
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  return -1;
}

    // Example usage:
console.log(findPeakElement([1, 2, 3, 1]));             // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));   // 1 or 5

module.exports = findPeakElement;


Example:
Input: nums = [1, 2, 3, 1] → Output: 2 (because nums[2] = 3 is a peak)
Input: nums = [1, 2, 1, 3, 5, 6, 4] → Output: 1 or 5 (both peaks are valid)






