// 68 - Bottom View of Binary Tree

// Node definition (same as other tree problems)
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to get bottom view of a binary tree
function bottomView(root) {
  if (!root) return [];

  // Map: hd -> node.data
  const hdMap = new Map();
  // Queue for BFS: each element is { node, hd }
  const queue = [{ node: root, hd: 0 }];

  let minHD = 0;
  let maxHD = 0;

  while (queue.length > 0) {
    const { node, hd } = queue.shift();

    // For bottom view, we overwrite the value at each hd
    hdMap.set(hd, node.data);

    if (hd < minHD) minHD = hd;
    if (hd > maxHD) maxHD = hd;

    if (node.left) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }

  const result = [];
  for (let hd = minHD; hd <= maxHD; hd++) {
    if (hdMap.has(hd)) {
      result.push(hdMap.get(hd));
    }
  }
  return result;
}

// Example usage:
// Tree
