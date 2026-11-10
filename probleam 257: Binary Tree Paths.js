/**
 * Problem 257: Binary Tree Paths
 * Difficulty: Easy
 * 
 * Approach: Depth-First Search (DFS)
 * Time Complexity: O(N) - We visit each node exactly once.
 * Space Complexity: O(H) - Recursion stack takes space proportional to the tree height H.
 */

// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    if (!root) return result;

    function dfs(node, currentPath) {
        // Append the current node's value to the path
        currentPath += node.val;

        // If it's a leaf node, save the completed path
        if (!node.left && !node.right) {
            result.push(currentPath);
            return;
        }

        // Otherwise, continue traversing left and right subtrees
        if (node.left) {
            dfs(node.left, currentPath + "->");
        }
        if (node.right) {
            dfs(node.right, currentPath + "->");
        }
    }

    dfs(root, "");
    return result;
};

// ==========================================
// Test Cases
// ==========================================

// Constructing Tree:
//       1
//     /   \
//    2     3
//     \
//      5
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.right = new
