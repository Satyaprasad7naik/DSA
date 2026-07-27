/**
 * Problem 164: Maximum Gap (Hard)
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0;

    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);

    // If all elements are the same, the gap is 0
    if (minVal === maxVal) return 0;

    let n = nums.length;
    // Calculate the minimum possible maximum gap
    let gap = Math.ceil((maxVal - minVal) / (n - 1));

    // Arrays to store the min and max values in each bucket
    let minBucket = new Array(n - 1).fill(Infinity);
    let maxBucket = new Array(n - 1).fill(-Infinity);

    // Place each number into a bucket
    for (let i = 0; i < n; i++) {
        if (nums[i] === minVal || nums[i] === maxVal) continue;
        
        let idx = Math.floor((nums[i] - minVal) / gap);
        minBucket[idx] = Math.min(minBucket[idx], nums[i]);
        maxBucket[idx] = Math.max(maxBucket[idx], nums[i]);
    }

    let maxGap = 0;
    let previousMax = minVal;

    // Calculate the maximum gap by comparing the min of the current bucket 
    // with the max of the previous non-empty bucket
    for (let i = 0; i < n - 1; i++) {
        // Skip empty buckets
        if (minBucket[i] === Infinity && maxBucket[i] === -Infinity) continue;
        
        maxGap = Math.max(maxGap, minBucket[i] - previousMax);
        previousMax = maxBucket[i];
    }

    // Finally, compare with the absolute maximum value of the array
    maxGap = Math.max(maxGap, maxVal - previousMax);

    return maxGap;
};
