/**
 * @param {string} s
 * @return {number}
 */
function minCut(s) {
    const n = s.length;
    
    // isPalindrome[i][j] will be true if the substring s[i...j] is a palindrome
    const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
    
    // cuts[i] will store the minimum cuts needed for substring s[0...i]
    const cuts = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let minCuts = i; // Max cuts is partitioning every single character
        
        for (let j = 0; j <= i; j++) {
            // Check if substring s[j...i] is a palindrome
            // It is a palindrome if the outer characters match AND the inner substring is a palindrome (or length is <= 3)
            if (s[j] === s[i] && (i - j <= 2 || isPalindrome[j + 1][i - 1])) {
                isPalindrome[j][i] = true;
                
                // If j === 0, the whole string s[0...i] is a palindrome, so 0 cuts are needed.
                // Otherwise, we take the min cuts of the prefix s[0...j-1] plus 1 cut for the current palindrome.
                minCuts = j === 0 ? 0 : Math.min(minCuts, cuts[j - 1] + 1);
            }
        }
        cuts[i] = minCuts;
    }
    
    return cuts[n - 1];
}

// --- Test Cases ---
console.log(minCut("aab")); // Output: 1 (Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.)
console.log(minCut("a"));   // Output: 0
console.log(minCut("ab"));  // Output: 1
