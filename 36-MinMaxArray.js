/**
 * DSA: Find Minimum and Maximum in Array - Simple DSA Problem
 * Problem: Write a function to find the minimum and maximum elements in an array.
 */

/**
 * Finds the minimum and maximum elements in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {Object} Object containing min and max values
 */
function findMinMax(arr) {
    // Handle empty array
    if (!arr || arr.length === 0) {
        return { min: undefined, max: undefined };
    }
    
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return { min, max };
}

/**
 * Finds the minimum and maximum elements using built-in methods
 * @param {number[]} arr - The input array of numbers
 * @returns {Object} Object containing min and max values
 */
function findMinMaxBuiltIn(arr) {
    // Handle empty array
    if (!arr || arr.length === 0) {
        return { min: undefined, max: undefined };
    }
    
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

/**
 * Test cases
 */
console.log('=== Min Max Array Problem ===');
console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6])); // Expected: { min: 1, max: 9 }
console.log(findMinMax([10])); // Expected: { min: 10, max: 10 }
console.log(findMinMax([-5, -2, -8, -1])); // Expected: { min: -8, max: -1 }
console.log(findMinMax([5, 5, 5, 5])); // Expected: { min: 5, max: 5 }
console.log(findMinMax([])); // Expected: { min: undefined, max: undefined }

// Test alternative method
console.log('\n=== Min Max (Built-in Method) ===');
console.log(findMinMaxBuiltIn([3, 1, 4, 1, 5, 9, 2, 6])); // Expected: { min: 1, max: 9 }
console.log(findMinMaxBuiltIn([10])); // Expected: { min: 10, max: 10 }
console.log(findMinMaxBuiltIn([-5, -2, -8, -1])); // Expected: { min: -8, max: -1 }
console.log(findMinMaxBuiltIn([5, 5, 5, 5])); // Expected: { min: 5, max: 5 }
console.log(findMinMaxBuiltIn([])); // Expected: { min: undefined, max: undefined }

module.exports = { findMinMax, findMinMaxBuiltIn };
