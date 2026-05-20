/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 * this.val = val === undefined ? null : val;
 * this.left = left === undefined ? null : left;
 * this.right = right === undefined ? null : right;
 * this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;

    // 'head' keeps track of the start of the current level
    let head = root; 

    while (head) {
        // 'dummy' acts as a placeholder for the start of the next level
        let dummy = new Node(0); 
        let temp = dummy;

        // 'curr' traverses the current level
        let curr = head;
        while (curr) {
            // If there's a left child, link it and move the temp pointer
            if (curr.left) {
                temp.next = curr.left;
                temp = temp.next;
            }
            // If there's a right child, link it and move the temp pointer
            if (curr.right) {
                temp.next = curr.right;
                temp = temp.next;
            }
            // Move to the next node in the current level
            curr = curr.next;
        }
        
        // Move down to the next level
        head = dummy.next;
    }

    return root;
};
