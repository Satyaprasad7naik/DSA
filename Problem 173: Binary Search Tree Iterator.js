/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class BSTIterator {
    /**
     * @param {TreeNode} root
     */
    constructor(root) {
        this.stack = [];
        this._pushLeft(root);
    }

    /**
     * Helper function to push all left children of a given node to the stack.
     * @param {TreeNode} node
     * @return {void}
     */
    _pushLeft(node) {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    /**
     * @return {number}
     */
    next() {
        // The topmost node is the next smallest element
        let topmostNode = this.stack.pop();
        
        // If the node has a right child, call the helper function to add all of its left children
        if (topmostNode.right !== null) {
            this._pushLeft(topmostNode.right);
        }
        
        return topmostNode.val;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.stack.length > 0;
    }
}
