// DSA Problem: Remove Duplicates from Sorted Array
// Problem: Remove duplicates in-place such that each element appears only once
// Time Complexity: O(n)
// Space Complexity: O(1)

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}

// Test cases
const arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1)); // 2, arr1 = [1,2,_]

const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr2)); // 5, arr2 = [0,1,2,3,4,_,_,_,_,_]
