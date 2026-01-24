/**
 * Problem 25: Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * Example:
 * isAnagram('anagram', 'nagaram') => true
 * isAnagram('rat', 'car') => false
 */

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    
    const count = {};
    
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
