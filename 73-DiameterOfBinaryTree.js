

// Time Complexity: O(n), we visit each node exactly once.
// Space Complexity: O(h), where h is the height of the tree (O(n) worst, O(log n) for balanced).


// 73-DiameterOfBinaryTree.js

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function height(node) {
    if (!node) return 0;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    diameter = Math.max(diameter, leftHeight + rightHeight);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
