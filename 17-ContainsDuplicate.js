// DSA Problem: Contains Duplicate
// Problem: Check if any value appears at least twice in the array
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicate(nums) {
    const seen = new Set();
    
    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}

// Test cases
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
