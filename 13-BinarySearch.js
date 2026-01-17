// DSA Problem: Binary Search
// Problem: Given a sorted array and a target value, return its index or -1
// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Test cases
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(binarySearch([5], 5)); // 0
