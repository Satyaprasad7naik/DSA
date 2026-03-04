Problem:
Given an integer array nums that is sorted in ascending order and then rotated at some unknown pivot, and an integer target, return the index of target in nums. If it is not present, return -1. You must write an algorithm with O(logn) time complexity.
Example:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1


// 61-SearchInRotatedSortedArray.js
// Problem: Search in Rotated Sorted Array
// Given a rotated sorted array nums and an integer target, return its index,
// or -1 if it is not in the array. Time complexity must be O(log n).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInRotatedSortedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check which side is sorted
    if (nums[left] <= nums[mid]) {
      // Left side is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right side is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Example usage:
const nums1 = [4, 5, 6, 7, 0, 1, 2];
console.log(searchInRotatedSortedArray(nums1, 0)); // 4
console.log(searchInRotatedSortedArray(nums1, 3)); // -1

module.exports = searchInRotatedSortedArray;
