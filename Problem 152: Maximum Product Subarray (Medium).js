/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    if (nums.length === 0) return 0;

    // Initialize variables to track the max and min products ending at the current position.
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = maxSoFar;

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        
        // If the current number is negative, the maximum and minimum products swap.
        // (A very low negative number multiplied by a negative becomes a very high positive number).
        if (current < 0) {
            let temp = maxSoFar;
            maxSoFar = minSoFar;
            minSoFar = temp;
        }

        // Calculate the new max and min for the current position
        maxSoFar = Math.max(current, maxSoFar * current);
        minSoFar = Math.min(current, minSoFar * current);

        // Update the overall maximum product found so far
        result = Math.max(result, maxSoFar);
    }

    return result;
};

// Example Usage:
console.log(maxProduct([2, 3, -2, 4])); // Output: 6 (from subarray [2, 3])
console.log(maxProduct([-2, 0, -1]));   // Output: 0 (from subarray [0])
