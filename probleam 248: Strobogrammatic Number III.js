/**
 * Problem 248: Strobogrammatic Number III (Hard)
 * 
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
    const pairs = [
        ['0', '0'],
        ['1', '1'],
        ['6', '9'],
        ['8', '8'],
        ['9', '6']
    ];
    
    let count = 0;

    // Helper function to build strobogrammatic numbers from outside in
    function dfs(left, right, currentArr) {
        if (left > right) {
            const numStr = currentArr.join('');
            
            // Check if the generated number is within [low, high] using lexicographical comparison
            if (
                (numStr.length === low.length && numStr < low) ||
                (numStr.length === high.length && numStr > high)
            ) {
                return;
            }
            count++;
            return;
        }

        for (const [p1, p2] of pairs) {
            // Avoid leading zeros for multi-digit numbers
            if (left === 0 && currentArr.length > 1 && p1 === '0') continue;
            
            // The middle digit of an odd-length number can only be '0', '1', or '8'
            if (left === right && p1 !== p2) continue;

            currentArr[left] = p1;
            currentArr[right] = p2;
            dfs(left + 1, right - 1, currentArr);
        }
    }

    // Generate strobogrammatic numbers for every valid length
    for (let len = low.length; len <= high.length; len++) {
        dfs(0, len - 1, new Array(len));
    }

    return count;
};

// --- Test Cases ---
console.log(strobogrammaticInRange("50", "100")); // Output: 3 ("69", "88", "96")
console.log(strobogrammaticInRange("0", "0"));    // Output: 1 ("0")
console.log(strobogrammaticInRange("10", "1000")); // Output: 16
