/**
 * Problem 260: Single Number III
 * Approach: Bit Manipulation using XOR
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function singleNumber(nums) {
    // Step 1: XOR all elements to get xor of the two unique numbers (a ^ b)
    let xorAll = 0;
    for (let num of nums) {
        xorAll ^= num;
    }

    // Step 2: Find the rightmost set bit (differing bit between a and b)
    let diffBit = xorAll & -xorAll;

    let num1 = 0;
    let num2 = 0;

    // Step 3: Divide elements into two groups based on the set bit and XOR separately
    for (let num of nums) {
        if ((num & diffBit) !== 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
}

// Example Test Cases:
console.log(singleNumber([1, 2, 1, 3, 2, 5])); // Output: [3, 5] (or [5, 3])
console.log(singleNumber([-1, 0]));          // Output: [-1, 0]
console.log(singleNumber([0, 1]));           // Output: [1, 0]
