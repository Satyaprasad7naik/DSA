/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Helper function to mark land connected to boundaries
    const dfs = (r, c) => {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) {
            return;
        }
        // Mark as visited by changing 1 to 0
        grid[r][c] = 0;
        
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    // 1. Traverse boundaries and sink all connected land
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const isBoundary = i === 0 || i === m - 1 || j === 0 || j === n - 1;
            if (isBoundary && grid[i][j] === 1) {
                dfs(i, j);
            }
        }     
    }

    // 2. Count remaining land cells (the enclaves)
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
            }
        }
    }

    return count;
};

// Test Case
const grid = [
    [0,0,0,0],
    [1,0,1,0],
    [0,1,1,0],
    [0,0,0,0]
];
console.log(numEnclaves(grid)); // Output: 3 




