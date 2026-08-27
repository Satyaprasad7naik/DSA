/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        // Shift result to the left to make room for the next bit
        result = (result << 1) | (n & 1);
        // Shift n to the right to process the next bit
        n = n >>> 1;
    }
    
    // Convert to an unsigned 32-bit integer using JavaScript's unsigned right shift
    return result >>> 0;
}

// Example usage:
console.log(reverseBits(00000010100101000001111010011100)); // Output depends on input binary representation
