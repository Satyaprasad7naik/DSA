/**
 * Problem 214: Shortest Palindrome
 * @param {string} s
 * @return {string}
 */
function shortestPalindrome(s) {
    if (!s || s.length === 0) return "";

    // Reverse the string
    let revStr = s.split('').reverse().join('');
    
    // Combine string with a separator to use the KMP table (LPS array)
    let combined = s + "#" + revStr;
    let lps = new Array(combined.length).fill(0);

    // Compute LPS (Longest Proper Prefix which is also Suffix) array
    for (let i = 1; i < combined.length; i++) {
        let j = lps[i - 1];
        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }
        if (combined[i] === combined[j]) {
            j++;
        }
        lps[i] = j;
    }

    // The length of the longest palindromic prefix in s
    let matchLen = lps[combined.length - 1];
    
    // Characters from the reversed string that need to be added to the front
    let addCrit = revStr.substring(0, s.length - matchLen);

    return addCrit + s;
}

// Example Test Cases:
console.log(shortestPalindrome("aacecaaa")); // Output: "aaacecaaa"
console.log(shortestPalindrome("abcd"));     // Output: "dcbabcd"
