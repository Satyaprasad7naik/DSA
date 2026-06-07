/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    // Helper function for DFS to mark safe regions
    const dfs = (r, c) => {
        // Base case: Out of bounds or not an 'O'
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
            return;
        }
        
        board[r][c] = 'T'; // Mark as safe (Temporary)
        
        // Check all 4 directions
        dfs(r + 1, c); // Down
        dfs(r - 1, c); // Up
        dfs(r, c + 1); // Right
        dfs(r, c - 1); // Left
    };

    // 1. Traverse the borders. If an 'O' is found, mark it and its connected 'O's as 'T'
    for (let r = 0; r < rows; r++) {
        dfs(r, 0);          // First column
        dfs(r, cols - 1);   // Last column
    }
    for (let c = 0; c < cols; c++) {
        dfs(0, c);          // First row
        dfs(rows - 1, c);   // Last row
    }

    // 2. Traverse the whole board. 
    // Flip 'O' to 'X' (captured), and 'T' back to 'O' (safe).
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X'; // Captured
            } else if (board[r][c] === 'T') {
                board[r][c] = 'O'; // Restored
            }
        }
    }
};

// --- Example Usage ---
// const board = [
//   ["X","X","X","X"],
//   ["X","O","O","X"],
//   ["X","X","O","X"],
//   ["X","O","X","X"]
// ];
// solve(board);
// console.log(board); 
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
