/**
 * Problem 247: Strobogrammatic Number II
 * 
 * Approach: Recursion (Divide and Conquer)
 * To build a strobogrammatic number of length `curLen`, we first recursively 
 * find all strobogrammatic numbers of length `curLen - 2`, and then wrap 
 * each result with valid strobogrammatic pairs: 
 * ("0","0"), ("1","1"), ("6","9"), ("8","8"), ("9","6").
 * 
 * Note: We only use ("0","0") on the inner layers (`curLen < totalLen`) 
 * to avoid invalid leading zeros in multi-digit numbers.
 *
 * Time Complexity: O(N * 5^(N/2))
 * Space Complexity: O(N * 5^(N/2))
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    const pairs = [
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6']
    ];

    function build(curLen, totalLen) {
        // Base cases
        if (curLen === 0) return [""];
        if (curLen === 1) return ["0", "1", "8"];

        // Get strobogrammatic numbers for the inner core of length (curLen - 2)
        const middles = build(curLen - 2, totalLen);
        const result = [];

        for (const middle of middles) {
            for (const [left, right] of pairs) {
                // Prevent leading '0' on the outermost layer
                if (curLen === totalLen && left === '0') continue;
                
                result.push(left + middle + right);
            }
        }

        return result;
    }

    return build(n, n);
};

// --- Test Cases ---
console.log("n = 1:", findStrobogrammatic(1)); 
// Expected: ["0", "1", "8"]

console.log("n = 2:", findStrobogrammatic(2)); 
// Expected: ["11", "69", "88", "96"]

console.log("n = 3:", findStrobogrammatic(3)); 
// Expected: ["101","609","808","906","111","619","818","916","181","689","888","986"]
