/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) return 0;
    
    let leftHeight = getLeftHeight(root);
    let rightHeight = getRightHeight(root);
    
    // If left and right subtree heights are equal, the tree is a full binary tree.
    // Total nodes = 2^height - 1
    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    }
    
    // Otherwise, recursively count nodes in left and right subtrees plus root (1)
    return 1 + countNodes(root.left) + countNodes(root.right);
};

function getLeftHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.left;
    }
    return height;
}

function getRightHeight(node) {
    let height = 0;
    while (node) {
        height++;
        node = node.right;
    }
    return height;
}
