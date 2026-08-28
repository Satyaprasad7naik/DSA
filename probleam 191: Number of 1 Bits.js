/**
 * @param {number} n - a positive integer
 * @return {number} - the number of set bits
 */
function hammingWeight(n) {
    let count = 0;
    
    while (n !== 0) {
        // Clear the rightmost set bit
        n = n & (n - 1);
        count++;
    }
    
    return count;
}

// Example usage:
console.log(hammingWeight(11)); // Output: 3 (Binary: 1011)
console.log(hammingWeight(128)); // Output: 1 (Binary: 10000000)

Approach 2: Bit Shifting (Checking all 32 Bits)Alternatively, you can check every single bit position using the bitwise AND operator.JavaScriptfunction hammingWeightBitShift(n) {
    let count = 0;
    
    for (let i = 0; i < 32; i++) {
        // Check if the i-th bit is set
        if ((n & (1 << i)) !== 0) {
            count++;
        }
    }
    
    return count;
}
Time & Space Complexity: $O(1)$ time (always iterates 32 times) and $O(1)$ space.
