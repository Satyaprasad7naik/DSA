/**
 * Problem 246: Strobogrammatic Number
 * Difficulty: Easy
 * 
 * Given a string num which represents an integer, return true if num is a strobogrammatic number.
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees.
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    // Map of valid strobogrammatic digit pairs
    const rotatedMap = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftChar = num[left];
        const rightChar = num[right];

        // If the digit is not in the map or doesn't match the rotated counterpart
        if (!(leftChar in rotatedMap) || rotatedMap[leftChar] !== rightChar) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// --- Test Cases ---
console.log(isStrobogrammatic("69"));   // Output: true
console.log(isStrobogrammatic("88"));   // Output: true
console.log(isStrobogrammatic("962"));  // Output: false
console.log(isStrobogrammatic("1"));    // Output: true
console.log(isStrobogrammatic("818"));  // Output: true
