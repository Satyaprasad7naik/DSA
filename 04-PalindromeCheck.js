/**
 * DSA Problem: Palindrome Check
 * Problem: Given a string, check if it is a palindrome (reads the same forwards and backwards)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Approach 1: Using Two Pointers
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Approach 2: Using String Reversal
function isPalindromeReverse(str) {
  return str === str.split('').reverse().join('');
}

// Test Cases
console.log(isPalindrome('racecar'));      // true
console.log(isPalindrome('hello'));        // false
console.log(isPalindrome('madam'));        // true
console.log(isPalindrome('a'));            // true
console.log(isPalindrome('ab'));           // false

// Export for testing
module.exports = { isPalindrome, isPalindromeReverse };
