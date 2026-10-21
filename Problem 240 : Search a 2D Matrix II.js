/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    let row = 0;
    let col = matrix[0].length - 1;
    
    // Start from the top-right corner
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }
    
    return false;
}
