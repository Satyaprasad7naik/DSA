/**
 * DSA: Calculate Average of Array - Simple DSA Problem
 * Problem: Write a function to calculate the average (mean) of all elements in an array.
 */

/**
 * Calculates the average of all elements in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The average of all elements
 */
function calculateAverage(arr) {
    // Handle empty array
    if (!arr || arr.length === 0) {
        return 0;
    }
    
    // Calculate sum and divide by length
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

/**
 * Calculates the average using a loop
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The average of all elements
 */
function calculateAverageLoop(arr) {
    // Handle empty array
    if (!arr || arr.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

/**
 * Test cases
 */
console.log('=== Average Array Problem ===');
console.log(calculateAverage([1, 2, 3, 4, 5])); // Expected: 3
console.log(calculateAverage([10, 20, 30, 40])); // Expected: 25
console.log(calculateAverage([5])); // Expected: 5
console.log(calculateAverage([-1, 1])); // Expected: 0
console.log(calculateAverage([])); // Expected: 0

// Test alternative method
console.log('\n=== Average (Loop Method) ===');
console.log(calculateAverageLoop([1, 2, 3, 4, 5])); // Expected: 3
console.log(calculateAverageLoop([10, 20, 30, 40])); // Expected: 25
console.log(calculateAverageLoop([5])); // Expected: 5
console.log(calculateAverageLoop([-1, 1])); // Expected: 0
console.log(calculateAverageLoop([])); // Expected: 0

module.exports = { calculateAverage, calculateAverageLoop };
