/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    // Keep clearing the rightmost set bit of 'right' until it is <= 'left'
    while (right > left) {
        right = right & (right - 1);
    }
    return left & right;
};

// --- Test Cases ---
console.log(rangeBitwiseAnd(5, 7));       // Output: 4
console.log(rangeBitwiseAnd(0, 0));       // Output: 0
console.log(rangeBitwiseAnd(1, 2147483647)); // Output: 0
