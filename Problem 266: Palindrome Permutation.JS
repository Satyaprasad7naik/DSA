/**
 * @param {string} s
 * @return {boolean}
 */
function canPermutePalindrome(s) {
  const oddChars = new Set();

  for (const char of s) {
    if (oddChars.has(char)) {
      oddChars.delete(char); // Now appears an even number of times
    } else {
      oddChars.add(char); // Now appears an odd number of times
    }
  }

  return oddChars.size <= 1;
}

// Test cases
console.log(canPermutePalindrome("code"));    // false
console.log(canPermutePalindrome("aab"));     // true
console.log(canPermutePalindrome("carerac")); // true
