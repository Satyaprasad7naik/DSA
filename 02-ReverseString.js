/**
 * Problem: Reverse a String
 * Given a string, reverse it and return the reversed string.
 * 
 * Example:
 * Input: "hello"
 * Output: "olleh"
 */

// Approach 1: Using built-in methods
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Approach 2: Using a loop
function reverseStringLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Approach 3: Using recursion
function reverseStringRecursive(str, index = str.length - 1) {
  if (index < 0) return '';
  return str[index] + reverseStringRecursive(str, index - 1);
}

// Test cases
console.log(reverseString('hello'));           // Output: olleh
console.log(reverseString('world'));           // Output: dlrow
console.log(reverseString('JavaScript'));      // Output: tpircSavaJ

console.log(reverseStringLoop('hello'));       // Output: olleh
console.log(reverseStringLoop('world'));       // Output: dlrow

console.log(reverseStringRecursive('hello'));  // Output: olleh
console.log(reverseStringRecursive('world'));  // Output: dlrow
