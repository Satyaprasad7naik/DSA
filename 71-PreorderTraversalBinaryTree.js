// 71-PreorderTraversalBinaryTree.js

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Recursive preorder traversal: root -> left -> right
function preorderTraversalRecursive(root) {
  const result = [];

  function dfs(node) {
    if (!node) return;
    result.push(node.val);      // visit root
    dfs(node.left);             // then left
    dfs(node.right);            // then right
  }

  dfs(root);
  return result;
}

// Iterative preorder traversal using a stack
function preorderTraversalIterative(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    // Push right first so left is processed first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
}

// Example usage / simple test
function buildSampleTree() {
  //      1
  //     / \
  //    2   3
  //   / \
  //  4   5
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node2 = new TreeNode(2, node4, node5);
  const node3 = new TreeNode(3);
  const root = new TreeNode(1, node2, node3);
  return root;
}

const root = buildSampleTree();
console.log("Preorder Recursive:", preorderTraversalRecursive(root)); // [1, 2, 4, 5, 3]
console.log("Preorder Iterative:", preorderTraversalIterative(root)); // [1, 2, 4, 5, 3]

module.exports = {
  TreeNode,
  preorderTraversalRecursive,
  preorderTraversalIterative,
};
