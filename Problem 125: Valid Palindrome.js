/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    // Step 1: Clean the string (remove non-alphanumeric characters and lowercase)
    // Using a regular expression to strip out anything that isn't a-z, A-Z, or 0-9
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Step 2: Use two pointers to check from both ends towards the center
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false; // Mismatch found, not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // All characters matched
};

// --- Test Cases ---
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car"));                     // Expected: false
console.log(isPalindrome(" "));                              // Expected: true
console.log(isPalindrome("0P"));                             // Expected: false
