/**
 * Problem 250: Count Univalue Subtrees (Medium)
 * 
 * Given the root of a binary tree, return the number of uni-value subtrees.
 * A uni-value subtree means all nodes of the subtree have the same value.
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
 * Approach: Post-order DFS Traversal (Bottom-Up)
 * Time Complexity: O(N) - visits every node once
 * Space Complexity: O(H) - recursion stack, where H is the tree height
 * 
 * @param {TreeNode} root
 * @return {number}
 */
function countUnivalSubtrees(root) {
    let count = 0;

    function isUnival(node) {
        // Base case: an empty subtree is technically uni-value, 
        // though it doesn't increment the count itself.
        if (node === null) {
            return true;
        }

        // Recursively check left and right subtrees first (Post-order)
        const leftIsUnival = isUnival(node.left);
        const rightIsUnival = isUnival(node.right);

        // If either child subtree is NOT uni-value, current subtree cannot be uni-value
        if (!leftIsUnival || !rightIsUnival) {
            return false;
        }

        // If left child exists and its value doesn't match current node's value
        if (node.left !== null && node.left.val !== node.val) {
            return false;
        }

        // If right child exists and its value doesn't match current node's value
        if (node.right !== null && node.right.val !== node.val) {
            return false;
        }

        // Current node and its subtrees form a valid uni-value subtree
        count++;
        return true;
    }

    isUnival(root);
    return count;
}

// ------------------- Test Cases -------------------

// Example 1: [5,1,5,5,5,null,5]
//       5
//      / \
//     1   5
//    / \   \
//   5   5   5
const root1 = new TreeNode(
    5,
    new TreeNode(1, new TreeNode(5), new TreeNode(5)),
    new TreeNode(5, null, new TreeNode(5))
);
console.log("Example 1 Output:", countUnivalSubtrees(root1)); // Expected: 4

// Example 2: []
console.log("Example 2 Output:", countUnivalSubtrees(null)); // Expected: 0

// Example 3: [5,5,5,5,5,null,5]
const root3 = new TreeNode(
    5,
    new TreeNode(5, new TreeNode(5), new TreeNode(5)),
    new TreeNode(5, null, new TreeNode(5))
);
console.log("Example 3 Output:", countUnivalSubtrees(root3)); // Expected: 6
