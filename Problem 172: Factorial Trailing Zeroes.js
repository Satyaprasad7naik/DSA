/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
    let count = 0;
    
    // Count how many multiples of 5, 25, 125, etc., are in n
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    
    return count;
};

// Test Cases
console.log(trailingZeroes(3));  // Output: 0
console.log(trailingZeroes(5));  // Output: 1
console.log(trailingZeroes(25)); // Output: 6
