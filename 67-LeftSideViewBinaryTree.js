// 67-LeftSideViewBinaryTree.js

Left Side View of Binary Tree
Given the root of a binary tree, return the values of the nodes you can see when the tree is viewed from the left side, from top to bottom.

Example: For this tree, left side view is [1, 2, 4]:

Level 0: 1

Level 1: 2 (leftmost)

Level 2: 4 (leftmost)

// Binary Tree Node definition
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Left Side View of a Binary Tree
 *
 * Approach 1: BFS (Level Order Traversal)
 * - Use a queue to traverse level by level.
 * - For each level, the first node we pop is the leftmost node.
 * - Add that node's value to the result.
 * - Time: O(n), Space: O(n) in worst case.
 */
function leftSideViewBFS(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // First node at this level is the leftmost
      if (i === 0) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}

/**
 * Approach 2: DFS (Preorder with level tracking)
 * - Traverse the tree with DFS, prioritizing left child first.
 * - Keep track of the current depth.
 * - When we visit a depth for the first time, record that node's value.
 * - Time: O(n), Space: O(h) for recursion stack (h = height of tree).
 */
function leftSideViewDFS(root) {
  const result = [];

  function dfs(node, depth) {
    if (!node) return;

    // If this is the first time we reach this depth,
    // this node is the leftmost node at this depth
    if (depth === result.length) {
      result.push(node.val);
    }

    // Visit left first to ensure leftmost node is recorded
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return result;
}

// Example usage / quick test
function buildExampleTree() {
  //      1
  //     / \
  //    2   3
  //   / \   \
  //  4   5   6
  const node4 = new TreeNode(4);
  const node5 = new TreeNode(5);
  const node6 = new TreeNode(6);
  const node2 = new TreeNode(2, node4, node5);
  const node3 = new TreeNode(3, null, node6);
  const root = new TreeNode(1, node2, node3);
  return root;
}

if (require.main === module) {
  const root = buildExampleTree();
  console.log("Left Side View (BFS):", leftSideViewBFS(root)); // [1, 2, 4]
  console.log("Left Side View (DFS):", leftSideViewDFS(root)); // [1, 2, 4]
}

module.exports = {
  TreeNode,
  leftSideViewBFS,
  leftSideViewDFS,
};
