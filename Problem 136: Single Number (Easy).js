/**
 * Problem 136: Single Number
 * * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let uniqueNumber = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // XOR the current number with our running total
        uniqueNumber ^= nums[i]; 
    }
    
    return uniqueNumber;
};

// --- Test Cases ---
console.log(singleNumber([2, 2, 1]));           // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2]));     // Output: 4
console.log(singleNumber([1]));                 // Output: 1
