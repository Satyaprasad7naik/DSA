/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let islandCount = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(r, c) {
        // Base case: check for boundaries or if the cell is water ('0')
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }

        // Mark the current land as visited by "sinking" it
        grid[r][c] = '0';

        // Explore all 4 neighbors (Up, Down, Left, Right)
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c); // Sink the rest of the island
            }
        }
    }

    return islandCount;
};

// Test Case
const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(numIslands(grid)); // Output: 3
