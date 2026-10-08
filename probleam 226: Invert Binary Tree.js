/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function invertTree(root) {
    // Base case: if the tree is empty, return null
    if (root === null) {
        return null;
    }

    // Recursively invert the left and right subtrees
    const leftSubtree = invertTree(root.left);
    const rightSubtree = invertTree(root.right);

    // Swap the left and right children
    root.left = rightSubtree;
    root.right = leftSubtree;

    return root;
}
