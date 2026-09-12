/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // Create a dummy node to easily handle edge cases (such as removing the head node)
    let dummy = new ListNode(0, head);
    let current = dummy;

    // Traverse through the list
    while (current.next !== null) {
        if (current.next.val === val) {
            // Skip the node that matches the value
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return dummy.next;
};
