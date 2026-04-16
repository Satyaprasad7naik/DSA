/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let freshCount = 0;

    // 1. Initial scan: Find all rotten oranges and count fresh ones
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); // [row, col, minutes]
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    if (freshCount === 0) return 0;

    let minutesElapsed = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // 2. BFS: Spread the rot
    while (queue.length > 0) {
        let [r, c, time] = queue.shift();
        minutesElapsed = time;

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            // If neighbor is within bounds and is a fresh orange
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2; // Make it rotten
                freshCount--;
                queue.push([nr, nc, time + 1]);
            }
        }
    }

    // 3. Check if any fresh oranges remain
    return freshCount === 0 ? minutesElapsed : -1;
};

// Test Case
const grid = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(grid)); // Output: 4
