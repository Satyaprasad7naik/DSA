/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        // Shrink the window as long as the current sum is greater than or equal to the target
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= nums[left];
            left++;
        }
    }

    // If minLength was never updated, it means no such subarray exists
    return minLength === Infinity ? 0 : minLength;
};

// Example usage:
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4, 3])
console.log(minSubArrayLen(4, [1, 4, 4]));          // Output: 1 ([4])
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0
