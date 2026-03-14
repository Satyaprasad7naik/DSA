// 69-TopViewBinaryTree.js

// Binary tree node definition (same style as LeetCode)
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Top View of Binary Tree
 *
 * Idea:
 * - Assign each node a horizontal distance (hd) from root.
 *   root.hd = 0, left child hd = parent.hd - 1, right child hd = parent.hd + 1
 * - Do a BFS (level-order traversal) so we visit nodes top-down.
 * - For each hd, the first node we see in BFS is the top-view node.
 * - Track minHd and maxHd to output result from left to right.
 *
 * Time:  O(n)  (each node visited once)
 * Space: O(n)  (queue + map)
 *
 * @param {TreeNode} root
 * @return {number[]} values visible from the top, from left to right
 */
function topView(root) {
  if (!root) return [];

  // Map: hd -> first node value seen at this horizontal distance
  const hdToValue = new Map();

  // Queue for BFS: each item is { node, hd }
  const queue = [];
  queue.push({ node: root, hd: 0 });

  let minHd = 0;
  let maxHd = 0;

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    // If this hd is seen first time, set it as top view for that hd
    if (!hdToValue.has(hd)) {
      hdToValue.set(hd, node.val);
      if (hd < minHd) minHd = hd;
      if (hd > maxHd) maxHd = hd;
    }

    // Left child: hd - 1
    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }

    // Right child: hd + 1
    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  // Collect result from minHd to maxHd
  const result = [];
  for (let hd = minHd; hd <= maxHd; hd++) {
    if (hdToValue.has(hd)) {
      result.push(hdToValue.get(hd));
    }
  }
  return result;
}

// Example usage:
// Tree:
//       1
//     /   \
//    2     3
//   / \   / \
//  4   5 6   7
//
// Top view: [4, 2, 1, 3, 7]

const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4),
    new TreeNode(5)
  ),
  new TreeNode(
    3,
    new TreeNode(6),
    new TreeNode(7)
  )
);

console.log(topView(root)); // [4, 2, 1, 3, 7]
module.exports = { TreeNode, topView };
