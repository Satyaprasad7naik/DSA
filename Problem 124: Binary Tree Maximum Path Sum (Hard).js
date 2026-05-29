/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    // Initialize with the lowest possible number to handle trees with all negative values
    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        // Get the max path sum of left and right subtrees
        // If the path sum is negative, we drop it by comparing it to 0
        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));

        // The max path sum with the current node as the "highest" node in the path
        const currentPathSum = node.val + leftMax + rightMax;

        // Update the global maximum path sum
        maxSum = Math.max(maxSum, currentPathSum);

        // Return the max path sum of a single branch extending from this node
        // (A valid path can only branch down one side when returning to the parent)
        return node.val + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return maxSum;
};
