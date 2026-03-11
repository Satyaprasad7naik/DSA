// 66-RightSideViewBinaryTree.js
// Problem: Binary Tree Right Side View

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Returns the right side view of a binary tree.
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let rightMost = null;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      rightMost = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(rightMost);
  }

  return result;
}

// Example usage / simple tests
function buildExampleTree() {
  //       1
  //      / \
  //     2   3
  //      \   \
  //       5   4
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(4);
  return root;
}

function runTests() {
  const root = buildExampleTree();
  console.log("Right side view should be [1, 3, 4]:", rightSideView(root));

  console.log("Empty tree should be []:", rightSideView(null));

  const single = new TreeNode(10);
  console.log("Single node tree should be [10]:", rightSideView(single));
}

runTests();

module.exports = {
  TreeNode,
  rightSideView,
};
