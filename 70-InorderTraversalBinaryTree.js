// 70-InorderTraversalBinaryTree.js

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Inorder Traversal (Left, Root, Right)
 * Returns an array of node values in inorder.
 * Time: O(n), Space: O(n) for recursion stack + result
 */
function inorderTraversal(root) {
  const result = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }

  dfs(root);
  return result;
}

// Iterative version using a stack (optional)
function inorderTraversalIterative(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
}

// Example usage / quick test
function buildSampleTree() {
  //       1
  //      / \
  //     2   3
  //    / \
  //   4   5
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node2 = new TreeNode(2, node4, node5);
  const node3 = new TreeNode(3);
  const node1 = new TreeNode(1, node2, node3);
  return node1;
}

if (require.main === module) {
  const root = buildSampleTree();
  console.log("Recursive inorder:", inorderTraversal(root));       // [4, 2, 5, 1, 3]
  console.log("Iterative inorder:", inorderTraversalIterative(root)); // [4, 2, 5, 1, 3]
}

module.exports = { TreeNode, inorderTraversal, inorderTraversalIterative };
