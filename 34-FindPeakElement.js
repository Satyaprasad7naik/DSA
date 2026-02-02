// Find Peak Element Problem
// A peak element is an element that is strictly greater than its neighbors
// Given an integer array nums, find a peak element, and return its index

function findPeakElement(nums) {
    // Handle edge cases
    if (nums.length === 1) return 0;
    
    // Check if first element is peak
    if (nums[0] > nums[1]) return 0;
    
    // Check if last element is peak
    if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
    
    // Check middle elements
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return -1;
}

// Test cases
console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 1 or 5
console.log(findPeakElement([1])); // Output: 0
console.log(findPeakElement([1, 2])); // Output: 1
console.log(findPeakElement([2, 1])); // Output: 0

// Binary Search Solution - O(log n) time complexity
function findPeakElementBinary(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // If middle element is less than right element,
        // peak must be on the right side
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            // Peak is on the left side (including mid)
            right = mid;
        }
    }
    
    return left;
}

console.log(findPeakElementBinary([1, 2, 3, 1])); // Output: 2
console.log(findPeakElementBinary([1, 2, 1, 3, 5, 6, 4])); // Output: 5
console.log(findPeakElementBinary([1])); // Output: 0
