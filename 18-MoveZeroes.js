// DSA Problem: Move Zeroes
// Problem: Move all 0's to the end while maintaining relative order
// Time Complexity: O(n)
// Space Complexity: O(1)

function moveZeroes(nums) {
    let lastNonZeroIndex = 0;
    
    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }
    
    // Fill remaining positions with zeros
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Test cases
const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // [1, 3, 12, 0, 0]

const arr2 = [0];
moveZeroes(arr2);
console.log(arr2); // [0]
