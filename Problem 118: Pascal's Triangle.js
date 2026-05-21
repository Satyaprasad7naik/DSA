/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    
    // Initialize the triangle with the first row
    const triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [1]; // Every row starts with 1
        
        // Calculate the values in between the 1s
        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }
        
        newRow.push(1); // Every row ends with 1
        triangle.push(newRow);
    }
    
    return triangle;
};

// Example usage:
console.log(generate(5));
// Output: [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
