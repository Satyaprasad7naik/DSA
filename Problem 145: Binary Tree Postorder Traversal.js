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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node === null) return;
        
        // Traverse left subtree
        traverse(node.left);
        // Traverse right subtree
        traverse(node.right);
        // Visit node
        result.push(node.val);
    }
    
    traverse(root);
    return result;
};
