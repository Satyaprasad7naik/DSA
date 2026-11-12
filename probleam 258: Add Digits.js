/**
 * Problem 258: Add Digits (Optimal O(1) Digital Root Formula)
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0;
    return 1 + ((num - 1) % 9);
};

// Test Cases
console.log(addDigits(38)); // Output: 2
console.log(addDigits(0));  // Output: 0
console.log(addDigits(9));  // Output: 9
