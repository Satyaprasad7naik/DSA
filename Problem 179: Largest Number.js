/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // Convert all numbers to strings for comparison
    let strNums = nums.map(String);
    
    // Sort strings based on custom combination logic
    // We compare orderings (b + a) vs (a + b) to see which combination yields a larger number
    strNums.sort((a, b) => (b + a) - (a + b));
    
    // Edge case: if the largest number is '0', the whole array is zeroes.
    if (strNums[0] === '0') {
        return '0';
    }
    
    // Join the sorted array to form the final largest number
    return strNums.join('');
};

// Test Cases
console.log(largestNumber([10, 2]));          // Output: "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // Output: "9534330"
