/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        // Get the ASCII value of the character and convert it to a 1-26 range.
        // 'A' has a charCode of 65, so subtracting 64 gives us A=1, B=2, etc.
        const charValue = columnTitle.charCodeAt(i) - 64; 
        
        // Shift the previous result by 1 base-26 position and add the current value
        result = result * 26 + charValue;
    }
    
    return result;
};

// Example Usage:
// console.log(titleToNumber("A"));  // Output: 1
// console.log(titleToNumber("AB")); // Output: 28
// console.log(titleToNumber("ZY")); // Output: 701
