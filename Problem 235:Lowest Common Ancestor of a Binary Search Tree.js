/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;
    
    while (current !== null) {
        // If both p and q are greater than parent
        if (p.val > current.val && q.val > current.val) {
            current = current.right;
        } 
        // If both p and q are lesser than parent
        else if (p.val < current.val && q.val < current.val) {
            current = current.left;
        } 
        // We have found the split point, i.e. the LCA node.
        else {
            return current;
        }
    }
};
