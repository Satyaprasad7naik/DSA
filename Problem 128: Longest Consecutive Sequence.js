/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    // Edge case for empty array
    if (nums.length === 0) return 0;

    // Hint: Think about using a Set to get O(1) lookups
    
};

// Test Cases
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Expected: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Expected: 9
