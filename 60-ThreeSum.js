// 60-ThreeSum.js
// Problem: Given an integer array nums and an integer target,
// return all unique triplets [nums[i], nums[j], nums[k]] such that:
// i != j, j != k, i != k and nums[i] + nums[j] + nums[k] === target.
// The solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function threeSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const target = 0;
console.log(threeSum(nums, target)); 
// Expected output (order may vary): [[-1, -1, 2], [-1, 0, 1]]

module.exports = threeSum;
