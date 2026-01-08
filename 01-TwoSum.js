/**
 * Two Sum Problem
 * Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.
 * You may assume that each input has exactly one solution, and you cannot use the same element twice.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] == 9, so we return [0, 1].
 */

// Approach 1: Brute Force O(n^2)
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// Approach 2: Hash Map O(n) - OPTIMAL
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]
