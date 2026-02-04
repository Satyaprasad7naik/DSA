/**
 * DSA: String Reverse - Simple DSA Problem
 * Problem: Write a function to reverse a string.
 */

/**
 * Reverses a string using built-in methods
 * @param {string} str - The input string
 * @returns {string} The reversed string
 */
function reverseString(str) {
  // Handle null or undefined
  if (!str) {
    return '';
  }
  
  return str.split('').reverse().join('');
}

/**
 * Reverses a string using a loop
 * @param {string} str - The input string
 * @returns {string} The reversed string
 */
function reverseStringLoop(str) {
  // Handle null or undefined
  if (!str) {
    return '';
  }
  
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

/**
 * Reverses a string using recursion
 * @param {string} str - The input string
 * @returns {string} The reversed string
 */
function reverseStringRecursion(str) {
  // Base case: empty string
  if (str === '') {
    return '';
  }
  
  // Recursive case: reverse the substring and add the first character at the end
  return reverseStringRecursion(str.substring(1)) + str.charAt(0);
}

/**
 * Test cases
 */
console.log('=== String Reverse Problem ===');
console.log(reverseString('hello')); // Expected: 'olleh'
console.log(reverseString('JavaScript')); // Expected: 'tpircSavaJ'
console.log(reverseString('a')); // Expected: 'a'
console.log(reverseString('')); // Expected: ''
console.log(reverseString('12345')); // Expected: '54321'

// Test alternative method (loop)
console.log('\n=== String Reverse (Loop Method) ===');
console.log(reverseStringLoop('hello')); // Expected: 'olleh'
console.log(reverseStringLoop('JavaScript')); // Expected: 'tpircSavaJ'
console.log(reverseStringLoop('a')); // Expected: 'a'
console.log(reverseStringLoop('')); // Expected: ''
console.log(reverseStringLoop('12345')); // Expected: '54321'

// Test recursive method
console.log('\n=== String Reverse (Recursion Method) ===');
console.log(reverseStringRecursion('hello')); // Expected: 'olleh'
console.log(reverseStringRecursion('JavaScript')); // Expected: 'tpircSavaJ'
console.log(reverseStringRecursion('a')); // Expected: 'a'
console.log(reverseStringRecursion('')); // Expected: ''
console.log(reverseStringRecursion('12345')); // Expected: '54321'

module.exports = { reverseString, reverseStringLoop, reverseStringRecursion };
