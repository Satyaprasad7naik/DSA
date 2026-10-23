Problem 242: Valid Anagram.js


/**
 * Problem 242: Valid Anagram
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create an array to keep track of character frequencies (assuming lowercase English letters)
    const charCount = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        // Increment count for character in s
        charCount[s.charCodeAt(i) - 97]++;
        // Decrement count for character in t
        charCount[t.charCodeAt(i) - 97]--;
    }

    // If they are anagrams, all counts should be back to 0
    for (let count of charCount) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
};

// --- Test Cases ---
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false
