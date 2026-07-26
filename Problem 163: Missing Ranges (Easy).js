/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
const findMissingRanges = function(nums, lower, upper) {
    const result = [];
    let next = lower;

    for (let i = 0; i < nums.length; i++) {
        // If the current number in the array is greater than the expected 'next' number,
        // it means we have found a missing range.
        if (nums[i] > next) {
            result.push([next, nums[i] - 1]);
        }
        // Update the expected 'next' number to be one greater than the current number
        next = nums[i] + 1;
    }

    // After iterating through the array, check if there's a missing range 
    // between the last element and the 'upper' bound.
    if (next <= upper) {
        result.push([next, upper]);
    }

    return result;
};

// --- Test Cases ---
console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99)); 
// Output: [[2, 2], [4, 49], [51, 74], [76, 99]]

console.log(findMissingRanges([-1], -1, -1)); 
// Output: []

console.log(findMissingRanges([], 1, 1)); 
// Output: [[1, 1]]
