/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the middle element is greater than the rightmost element,
        // it means the smallest value must be to the right of mid.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the smallest value is at mid or to the left of mid.
        else {
            right = mid;
        }
    }

    // When left and right converge, we've found the minimum element.
    return nums[left];
}

// Example usage:
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([11, 13, 15, 17])); // Output: 11
