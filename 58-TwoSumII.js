/**
 * DSA Problem 58: Two Sum II - Input Array Is Sorted
 *
 * Problem:
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * Return the indices of the two numbers (1-indexed) as an integer array of length 2.
 *
 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.
 *
 * Input: numbers = [2,3,4], target = 6
 * Output: [1,3]
 *
 * Input: numbers = [-1,0], target = -1
 * Output: [1,2]
 *
 * Complexity:
 * Time: O(n) where n is the number of elements in the array
 * Space: O(1) - only using constant extra space
 */

// Solution 1: Two Pointer Approach (Optimal for sorted array)
function twoSumTwoPointer(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        
        if (sum === target) {
            // Return 1-indexed positions
            return [left + 1, right + 1];
        } else if (sum < target) {
            // Need a larger sum, move left pointer right
            left++;
        } else {
            // Need a smaller sum, move right pointer left
            right--;
        }
    }
    
    // No solution found (problem guarantees exactly one solution)
    return [-1, -1];
}

// Solution 2: Binary Search Approach
function twoSumBinarySearch(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];
        // Search for complement in the remaining array
        let left = i + 1;
        let right = numbers.length - 1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (numbers[mid] === complement) {
                return [i + 1, mid + 1];
            } else if (numbers[mid] < complement) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return [-1, -1];
}

// Solution 3: Hash Map Approach (works for unsorted arrays too)
function twoSumHashMap(numbers, target) {
    const map = new Map();
    
    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];
        if (map.has(complement)) {
            return [map.get(complement) + 1, i + 1];
        }
        map.set(numbers[i], i);
    }
    
    return [-1, -1];
}

// Test cases
console.log("=== Two Sum II Tests ===");

// Test case 1
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(`Test 1: numbers = [${numbers}], target = ${target}`);
console.log(`Two Pointer: [${twoSumTwoPointer(numbers, target)}]`); // Expected: [1, 2]
console.log(`Binary Search: [${twoSumBinarySearch(numbers, target)}]`); // Expected: [1, 2]
console.log(`Hash Map: [${twoSumHashMap(numbers, target)}]`); // Expected: [1, 2]
console.log();

// Test case 2
numbers = [2, 3, 4];
target = 6;
console.log(`Test 2: numbers = [${numbers}], target = ${target}`);
console.log(`Two Pointer: [${twoSumTwoPointer(numbers, target)}]`); // Expected: [1, 3]
console.log(`Binary Search: [${twoSumBinarySearch(numbers, target)}]`); // Expected: [1, 3]
console.log(`Hash Map: [${twoSumHashMap(numbers, target)}]`); // Expected: [1, 3]
console.log();

// Test case 3
numbers = [-1, 0];
target = -1;
console.log(`Test 3: numbers = [${numbers}], target = ${target}`);
console.log(`Two Pointer: [${twoSumTwoPointer(numbers, target)}]`); // Expected: [1, 2]
console.log(`Binary Search: [${twoSumBinarySearch(numbers, target)}]`); // Expected: [1, 2]
console.log(`Hash Map: [${twoSumHashMap(numbers, target)}]`); // Expected: [1, 2]
console.log();

// Test case 4 - Larger array
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 15;
console.log(`Test 4: numbers = [${numbers}], target = ${target}`);
console.log(`Two Pointer: [${twoSumTwoPointer(numbers, target)}]`); // Expected: [6, 9] (6+9=15)
console.log(`Binary Search: [${twoSumBinarySearch(numbers, target)}]`); // Expected: [6, 9]
console.log(`Hash Map: [${twoSumHashMap(numbers, target)}]`); // Expected: [6, 9]
console.log();

// Export functions (for testing frameworks)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        twoSumTwoPointer,
        twoSumBinarySearch,
        twoSumHashMap
    };
}
