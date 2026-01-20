/**
 * Problem: Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Approach: Sliding Window with Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(min(m, n)) where m is charset size
 */

// Solution using Sliding Window
function lengthOfLongestSubstring(s) {
  const charIndex = {}; // Store the last seen index of each character
  let maxLength = 0;
  let left = 0; // Left pointer of the window
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    
    // If character is already in the current window
    if (char in charIndex && charIndex[char] >= left) {
      // Move left pointer to the right of the last occurrence
      left = charIndex[char] + 1;
    }
    
    // Update the last seen index of the character
    charIndex[char] = right;
    
    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Alternative approach using Set (cleaner for understanding)
function lengthOfLongestSubstringSet(s) {
  const charSet = new Set();
  let maxLength = 0;
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    
    // Remove characters from the left until no duplicates
    while (charSet.has(char)) {
      charSet.delete(s[left]);
      left++;
    }
    
    charSet.add(char);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("au")); // Output: 2 ("au")
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("a")); // Output: 1
console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")); // Output: 26

// Using the Set approach
console.log("\n--- Using Set Approach ---");
console.log(lengthOfLongestSubstringSet("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstringSet("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstringSet("pwwkew")); // Output: 3
