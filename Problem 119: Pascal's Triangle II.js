/**
 * Problem 119: Pascal's Triangle II
 * * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // Initialize an array of size (rowIndex + 1) with 1s
    const row = new Array(rowIndex + 1).fill(1);
    
    // Build the row iteratively from the back to the front 
    // to avoid overwriting values we still need for the current row's calculation
    for (let i = 1; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    
    return row;
};

// --- Test Cases ---
console.log(getRow(3)); // Output: [1, 3, 3, 1]
console.log(getRow(0)); // Output: [1]
console.log(getRow(1)); // Output: [1, 1]
console.log(getRow(4)); // Output: [1, 4, 6, 4, 1]
