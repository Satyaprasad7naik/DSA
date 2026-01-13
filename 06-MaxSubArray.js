// DSA Problem 6: Maximum Subarray Sum (Kadane's Algorithm)
// Find the contiguous subarray within an array which has the largest sum.

/**
 * @param {number[]} nums - Array of integers
 * @return {number} - Maximum sum of any contiguous subarray
 */
function maxSubArray(nums) {
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Either extend the existing subarray or start a new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update the maximum sum found so far
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Test cases
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (subarray [4, -1, 2, 1])
console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23 (entire array)
console.log(maxSubArray([-1])); // Output: -1
console.log(maxSubArray([0, -3, 5, -2, 3])); // Output: 6 (subarray [5, -2, 3])

module.exports = maxSubArray;
