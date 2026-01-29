// Problem: Palindrome Number
// Description: Given an integer x, return true if x is a palindrome, and false otherwise.
// Example: 121 is a palindrome, -121 is not a palindrome

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }
    
    // Convert number to string and compare with reversed string
    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    
    return str === reversed;
}

// Alternative Solution: Without converting to string
function isPalindromeOptimized(x) {
    // Negative numbers and numbers ending in 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversed = 0;
    let original = x;
    
    while (original > reversed) {
        reversed = reversed * 10 + original % 10;
        original = Math.floor(original / 10);
    }
    
    // For odd length numbers, we can remove the middle digit
    return original === reversed || original === Math.floor(reversed / 10);
}

// Test Cases
console.log("Test Case 1:", isPalindrome(121)); // true
console.log("Test Case 2:", isPalindrome(-121)); // false
console.log("Test Case 3:", isPalindrome(10)); // false
console.log("Test Case 4:", isPalindrome(0)); // true
console.log("Test Case 5:", isPalindrome(12321)); // true

console.log("\nOptimized Solution:");
console.log("Test Case 1:", isPalindromeOptimized(121)); // true
console.log("Test Case 2:", isPalindromeOptimized(-121)); // false
console.log("Test Case 3:", isPalindromeOptimized(10)); // false
