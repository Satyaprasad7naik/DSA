// DSA Problem: First Unique Character in a String
// Problem: Find the first non-repeating character in a string
// Time Complexity: O(n)
// Space Complexity: O(1) - limited to 26 characters

function firstUniqChar(s) {
    const charCount = new Map();
    
    // Count frequency of each character
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find first character with count 1
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}

// Test cases
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
