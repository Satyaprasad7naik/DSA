/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum must be in the right half (excluding mid)
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // The minimum must be in the left half (including mid)
            right = mid;
        } else {
            // When nums[mid] === nums[right], we can't confidently discard half the array.
            // We just shrink the right boundary by 1 to eventually break the tie.
            right--;
        }
    }

    // When left === right, we've found the minimum element
    return nums[left];
}

// Example usage:
console.log(findMin([1, 3, 5])); // Output: 1
console.log(findMin([2, 2, 2, 0, 1])); // Output: 0
