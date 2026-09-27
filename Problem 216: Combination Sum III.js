/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];

    function backtrack(start, currentCombination, currentSum) {
        // If the combination has k numbers and the sum matches n, add to result
        if (currentCombination.length === k && currentSum === n) {
            result.push([...currentCombination]);
            return;
        }

        // If combination exceeds k numbers or sum exceeds n, stop exploring
        if (currentCombination.length > k || currentSum > n) {
            return;
        }

        // Iterate through numbers from 'start' to 9
        for (let i = start; i <= 9; i++) {
            currentCombination.push(i);
            backtrack(i + 1, currentCombination, currentSum + i);
            currentCombination.pop(); // Backtrack
        }
    }

    backtrack(1, [], 0);
    return result;
};

// --- Test Cases ---
console.log(combinationSum3(3, 7)); // Output: [[1, 2, 4]]
console.log(combinationSum3(3, 9)); // Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
console.log(combinationSum3(4, 1)); // Output: []
