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
var preorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node === null) return;
        
        result.push(node.val);       // Visit Root
        traverse(node.left);         // Traverse Left
        traverse(node.right);        // Traverse Right
    }
    
    traverse(root);
    return result;
};
