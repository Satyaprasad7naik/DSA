/**
 * Problem 254: Factor Combinations (Medium)
 * 
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    const result = [];

    function backtrack(remaining, start, currentPath) {
        // Loop only up to sqrt(remaining) to prevent duplicate combinations
        for (let i = start; i * i <= remaining; i++) {
            if (remaining % i === 0) {
                // Found a valid pair of factors: i and (remaining / i)
                result.push([...currentPath, i, remaining / i]);

                // Recursively factorize (remaining / i) starting from i
                currentPath.push(i);
                backtrack(remaining / i, i, currentPath);
                currentPath.pop(); // Backtrack
            }
        }
    }

    backtrack(n, 2, []);
    return result;
};

// --- Test Cases ---
console.log("n = 1:", getFactors(1));   // Expected: []
console.log("n = 12:", getFactors(12)); // Expected: [[2, 6], [2, 2, 3], [3, 4]]
console.log("n = 37:", getFactors(37)); // Expected: []
console.log("n = 32:", getFactors(32)); 
// Expected: [[2, 16], [2, 2, 8], [2, 2, 2, 4], [2, 2, 2, 2, 2], [2, 4, 4], [4, 8]]
