/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // A power of two must be strictly greater than 0
    if (n <= 0) return false;
    
    // Bitwise AND of a power of 2 and (itself - 1) is always 0
    // Example: 4 (100) & 3 (011) = 0
    return (n & (n - 1)) === 0;
};

// Test Cases
console.log(isPowerOfTwo(1));  // Output: true (2^0 = 1)
console.log(isPowerOfTwo(16)); // Output: true (2^4 = 16)
console.log(isPowerOfTwo(3));  // Output: false
