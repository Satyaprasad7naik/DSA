/**
 * DSA: Array Sum Problem - Simple DSA Problem
 * Problem: Write a function that calculates the sum of all elements in an array.
 */

/**
 * Calculates the sum of all elements in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The sum of all elements
 */
function arraySum(arr) {
    // Handle empty array
    if (!arr || arr.length === 0) {
        return 0;
    }
    
    // Calculate sum using reduce
    return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Calculates the sum of all elements in an array (alternative method)
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The sum of all elements
 */
function arraySumLoop(arr) {
    // Handle empty array
    if (!arr || arr.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * Test cases
 */
console.log('=== Array Sum Problem ===');
console.log(arraySum([1, 2, 3, 4, 5])); // Expected: 15
console.log(arraySum([10, 20, 30])); // Expected: 60
console.log(arraySum([-1, 1, -2, 2])); // Expected: 0
console.log(arraySum([])); // Expected: 0
console.log(arraySum([5])); // Expected: 5

// Test alternative method
console.log('\n=== Array Sum (Loop Method) ===');
console.log(arraySumLoop([1, 2, 3, 4, 5])); // Expected: 15
console.log(arraySumLoop([10, 20, 30])); // Expected: 60
console.log(arraySumLoop([-1, 1, -2, 2])); // Expected: 0
console.log(arraySumLoop([])); // Expected: 0
console.log(arraySumLoop([5])); // Expected: 5

module.exports = { arraySum, arraySumLoop };
