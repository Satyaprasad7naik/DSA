// DSA Problem: Maximum Depth of Binary Tree
// Problem: Find the maximum depth of a binary tree
// Time Complexity: O(n)
// Space Complexity: O(h) where h is height

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test case
const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(maxDepth(tree)); // 3
