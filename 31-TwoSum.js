// Problem: Two Sum
// Description: Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution 1: Brute Force Approach
// Time Complexity: O(n²), Space Complexity: O(1)
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

// Solution 2: Hash Map Approach (Optimized)
// Time Complexity: O(n), Space Complexity: O(n)
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

// Solution 3: Using Object instead of Map
function twoSumWithObject(nums, target) {
    const seen = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in seen) {
            return [seen[complement], i];
        }
        
        seen[nums[i]] = i;
    }
    
    return [];
}

// Test Cases
console.log("Test Case 1 - Brute Force:");
console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0, 1]

console.log("\nTest Case 2 - Hash Map:");
console.log(twoSum([3, 2, 4], 6)); // [1, 2]

console.log("\nTest Case 3 - Hash Map:");
console.log(twoSum([3, 3], 6)); // [0, 1]

console.log("\nTest Case 4 - With Object:");
console.log(twoSumWithObject([2, 7, 11, 15], 9)); // [0, 1]

console.log("\nTest Case 5 - With Object:");
console.log(twoSumWithObject([-1, -2, -3, -4, -5], -8)); // [2, 4]
