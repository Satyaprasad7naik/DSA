/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let currentSum = numbers[left] + numbers[right];
        
        if (currentSum === target) {
            // Return 1-based indices
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            // We need a larger sum, move the left pointer to the right
            left++;
        } else {
            // We need a smaller sum, move the right pointer to the left
            right--;
        }
    }
    
    // In case no solution is found (though the problem guarantees one)
    return [];
};
