/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    // 1. trim(): Removes leading and trailing whitespaces
    // 2. split(/\s+/): Splits the string into an array of words, treating multiple spaces as a single delimiter
    // 3. reverse(): Reverses the elements in the array
    // 4. join(' '): Joins the array back into a string with a single space separator
    return s.trim().split(/\s+/).reverse().join(' ');
};

// --- Test Cases ---
console.log(reverseWords("the sky is blue"));       // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));       // Output: "world hello"
console.log(reverseWords("a good   example"));      // Output: "example good a"
