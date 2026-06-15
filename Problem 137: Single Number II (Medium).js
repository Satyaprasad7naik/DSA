/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let ones = 0;
    let twos = 0;

    for (let num of nums) {
        // `ones` keeps track of the bits that have appeared exactly once.
        ones = (ones ^ num) & ~twos;
        
        // `twos` keeps track of the bits that have appeared exactly twice.
        twos = (twos ^ num) & ~ones;
    }

    return ones;
}

// --- Test Cases ---
console.log(singleNumber([2, 2, 3, 2])); // Output: 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // Output: 99
