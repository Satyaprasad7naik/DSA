// 86 - Serialize and Deserialize Binary Tree
// Medium - Tree, BFS

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
  if (!root) return "";

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      result.push(String(node.val));
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("#");
    }
  }

  // Optional: trim trailing '#' to keep string shorter
  let i = result.length - 1;
  while (i >= 0 && result[i] === "#") i--;
  return result.slice(0, i + 1).join(",");
}

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
  if (!data || data.length === 0) return null;

  const values = data.split(",");
  const rootVal = values[0];
  if (rootVal === "#") return null;

  const root = new TreeNode(parseInt(rootVal, 10));
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const current = queue.shift();

    // Left child
    if (i < values.length && values[i] !== "#") {
      const leftNode = new TreeNode(parseInt(values[i], 10));
      current.left = leftNode;
      queue.push(leftNode);
    }
    i++;

    // Right child
    if (i < values.length && values[i] !== "#") {
      const rightNode = new TreeNode(parseInt(values[i], 10));
      current.right = rightNode;
      queue.push(rightNode);
    }
    i++;
  }

  return root;
}

// Example usage / quick tests:
(function test() {
  // Build a sample tree:
  //       1
  //      / \
  //     2   3
  //        / \
  //       4   5
  const root = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4), new TreeNode(5))
  );

  const encoded = serialize(root);
  console.log("Serialized:", encoded);

  const decodedRoot = deserialize(encoded);
  const encodedAgain = serialize(decodedRoot);
  console.log("Serialized again:", encodedAgain);
})();
