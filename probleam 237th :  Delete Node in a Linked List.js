/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // Copy the value of the next node into the current node
    node.val = node.next.val;
    // Skip the next node by pointing to the one after it
    node.next = node.next.next;
};
