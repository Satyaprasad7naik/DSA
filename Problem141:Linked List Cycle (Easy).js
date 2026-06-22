/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 * this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Initialize both pointers at the head of the linked list
    let slow = head;
    let fast = head;

    // Traverse the list until the fast pointer reaches the end
    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // Moves 1 step at a time
        fast = fast.next.next;    // Moves 2 steps at a time

        // If they meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }

    // If we reach a null node, there is no cycle
    return false;
};
