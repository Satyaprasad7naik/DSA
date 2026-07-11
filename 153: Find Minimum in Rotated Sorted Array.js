/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // If the array is not rotated (or rotated n times), 
    // the first element is the minimum.
    if (nums[left] <= nums[right]) {
        return nums[left];
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the middle element is greater than the rightmost element,
        // it means the smallest value must be to the right of mid.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the middle element is less than or equal to the rightmost element.
        // This means the smallest value is either at mid or to the left of mid.
        else {
            right = mid;
        }
    }

    // At the end of the loop, left == right, pointing to the minimum element.
    return nums[left];
};

// --- Test Cases ---
console.log(findMin([3,4,5,1,2]));       // Expected Output: 1
console.log(findMin([4,5,6,7,0,1,2]));   // Expected Output: 0
console.log(findMin([11,13,15,17]));     // Expected Output: 11
