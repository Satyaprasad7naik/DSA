/**
 * Check if a number is a palindrome
 * A palindrome number reads the same forwards and backwards
 * Example: 121 is a palindrome, 123 is not
 */

const isPalindrome = (x) => {
  // Handle negative numbers - not palindromes
  if (x < 0) return false;
  
  // Convert number to string and reverse it
  const str = x.toString();
  const reversed = str.split('').reverse().join('');
  
  // Check if original and reversed are equal
  return str === reversed;
};

// Test cases
console.log(isPalindrome(121));    // true
console.log(isPalindrome(-121));   // false
console.log(isPalindrome(10));     // false
console.log(isPalindrome(0));      // true
console.log(isPalindrome(12321));  // true
