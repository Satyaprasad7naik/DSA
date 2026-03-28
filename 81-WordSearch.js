// 81 - Word Search
// LeetCode 79 style: Given an m x n grid of characters board and a string word,
// return true if word exists in the grid, otherwise false.

// Time: O(m * n * 4^L) where L is word.length
// Space: O(L) recursion + visited tracking

var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  // DFS helper to search from (r, c) for word[idx...]
  function dfs(r, c, idx) {
    // If we matched all characters
    if (idx === word.length) return true;

    // Out of bounds or mismatch
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[idx]
    ) {
      return false;
    }

    // Mark this cell as visited by temporarily changing the character
    const temp = board[r][c];
    board[r][c] = '#';

    // Explore all 4 directions
    const found =
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1);

    // Restore the original character (backtrack)
    board[r][c] = temp;

    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};

// Example usage:
// const board = [
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E'],
// ];
// console.log(exist(board, "ABCCED")); // true
// console.log(exist(board, "SEE"));    // true
// console.log(exist(board, "ABCB"));   // false

module.exports = exist;
