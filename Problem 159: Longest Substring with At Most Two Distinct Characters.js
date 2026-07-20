/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringTwoDistinct = function(s) {
    let charMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Add the current character to the map and update its frequency
        charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

        // If we have more than 2 distinct characters, shrink the window from the left
        while (charMap.size > 2) {
            let leftChar = s[left];
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            
            // If the frequency drops to 0, completely remove it from the map
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar);
            }
            left++; // Shrink window
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// --- Test Cases ---
console.log(lengthOfLongestSubstringTwoDistinct("eceba"));   // Expected Output: 3
console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); // Expected Output: 5
