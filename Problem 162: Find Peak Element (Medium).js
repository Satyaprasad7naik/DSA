/**
 * Finds a peak element in an array and returns its index.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // If the middle element is greater than its right neighbor,
        // it means we are on a descending slope, so a peak must exist 
        // to the left (including the mid element itself).
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } 
        // If the middle element is less than its right neighbor,
        // we are on an ascending slope, so a peak must exist to the right.
        else {
            left = mid + 1;
        }
    }

    // When left === right, we have found a peak.
    return left;
};

// --- Test Cases ---
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 1 or 5
console.log(findPeakElement([2, 1])); // Output: 0
console.log(findPeakElement([1])); // Output: 0
