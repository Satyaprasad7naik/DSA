/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = '';
    
    while (columnNumber > 0) {
        // Subtract 1 to adjust for 0-indexing (0-25 instead of 1-26)
        columnNumber--;
        
        // Find the remainder to get the current character index
        let remainder = columnNumber % 26;
        
        // Convert the remainder to the corresponding letter (ASCII 'A' is 65)
        result = String.fromCharCode(remainder + 65) + result;
        
        // Move to the next place value
        columnNumber = Math.floor(columnNumber / 26);
    }
    
    return result;
};
