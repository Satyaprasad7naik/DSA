/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 * this.val = val;
 * this.left = this.right = null;
 * }
 */

/**
 * Finds the lowest common ancestor of two nodes in a binary tree.
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Base case: if root is null, or we found either p or q, return root
    if (root === null || root === p || root === q) {
        return root;
    }
    
    // Traverse the left and right subtrees
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    // If both left and right return a non-null node, the current root is the LCA
    if (left !== null && right !== null) {
        return root;
    }
    
    // Otherwise, return the non-null child (bubbling up the found node)
    return left !== null ? left : right;
};

// --- Test Cases ---
// Helper function to create a simple test tree manually
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const root = new TreeNode(3);
const node5 = new TreeNode(5);
const node1 = new TreeNode(1);
root.left = node5;
root.right = node1;
node5.left = new TreeNode(6);
const node2 = new TreeNode(2);
node5.right = node2;
node2.left = new TreeNode(7);
node2.right = new TreeNode(4);
node1.left = new TreeNode(0);
node1.right = new TreeNode(8);

console.log("LCA of 5 and 1:", lowestCommonAncestor(root, node5, node1).val); // Expected: 3
console.log("LCA of 5 and 4:", lowestCommonAncestor(root, node5, node2.right).val); // Expected: 5
