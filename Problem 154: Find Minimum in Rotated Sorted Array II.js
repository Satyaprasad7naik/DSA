/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum must be in the right half
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // The minimum is in the left half (including mid)
            right = mid;
        } else {
            // nums[mid] === nums[right], we can't be sure which half the minimum is in.
            // But we can safely reduce the search space by shrinking the right bound.
            right--;
        }
    }

    return nums[left];
};

// Test Cases
console.log(findMin([1, 3, 5])); // Output: 1
console.log(findMin([2, 2, 2, 0, 1])); // Output: 0
console.log(findMin([3, 3, 1, 3])); // Output: 1
