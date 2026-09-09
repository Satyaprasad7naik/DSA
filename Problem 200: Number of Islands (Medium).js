/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    
    let rows = grid.length;
    let cols = grid[0].length;
    let islandCount = 0;
    
    function dfs(r, c) {
        // Out of bounds or at water ('0')
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }
        
        // Mark the current cell as visited by turning it into '0'
        grid[r][c] = '0';
        
        // Traverse all 4 adjacent directions
        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // If we find an unvisited piece of land, it's a new island
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c); // Sink the entire island
            }
        }
    }
    
    return islandCount;
};
