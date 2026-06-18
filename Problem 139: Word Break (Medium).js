/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    // Convert the array to a Set for O(1) lookups
    const wordSet = new Set(wordDict);
    
    // dp[i] represents whether s.substring(0, i) can be broken down into words from the dictionary
    const dp = new Array(s.length + 1).fill(false);
    
    // Base case: an empty string is always technically a valid breakdown
    dp[0] = true;
    
    // Iterate through the string from length 1 up to s.length
    for (let i = 1; i <= s.length; i++) {
        // Check all possible starting indices for the last word
        for (let j = 0; j < i; j++) {
            // If the string up to j can be broken down, AND the substring from j to i is in the dictionary
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check further if we found a valid breakdown for length i
            }
        }
    }
    
    // The result for the full string length
    return dp[s.length];
};

// --- Test Cases ---
console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false
