/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // Base case: if the list is empty or has only one node, it's already sorted
    if (!head || !head.next) {
        return head;
    }

    // Step 1: Split the list into two halves using the slow and fast pointer technique
    let slow = head;
    let fast = head.next; // Start fast one step ahead to ensure even splits break correctly

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null; // Sever the connection to split the lists

    // Step 2: Recursively sort each half
    let left = sortList(head);
    let right = sortList(mid);

    // Step 3: Merge the two sorted halves
    return merge(left, right);
};

// Helper function to merge two sorted linked lists
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append any remaining nodes
    if (l1) current.next = l1;
    if (l2) current.next = l2;

    return dummy.next;
}
