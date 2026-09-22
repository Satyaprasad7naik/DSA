class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

function findWords(board, words) {
    // Step 1: Build the Trie
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word; // Store the word at the end node
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = [];

    // Step 2: Backtracking function from each cell
    const dfs = (r, c, node) => {
        const char = board[r][c];
        if (!node.children[char]) return;

        node = node.children[char];
        if (node.word !== null) {
            result.push(node.word);
            node.word = null; // Avoid duplicate additions
        }

        // Mark the current cell as visited
        board[r][c] = '#';

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') {
                dfs(nr, nc, node);
            }
        }

        // Restore the cell
        board[r][c] = char;
    };

    // Step 3: Iterate through every cell on the board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root);
        }
    }

    return result;
}
