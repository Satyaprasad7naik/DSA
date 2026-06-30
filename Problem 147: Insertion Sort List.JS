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
var insertionSortList = function(head) {
    // Create a dummy node which will act as the head of the sorted list
    let dummy = new ListNode(0);
    let curr = head; // The node we are currently evaluating

    while (curr !== null) {
        // At each iteration, we start from the beginning of the sorted list
        let prev = dummy;
        
        // Find the correct position to insert the current node
        while (prev.next !== null && prev.next.val < curr.val) {
            prev = prev.next;
        }
        
        // Store the next node to be processed
        let nextTemp = curr.next;
        
        // Insert the current node into the sorted list
        curr.next = prev.next;
        prev.next = curr;
        
        // Move to the next node in the original list
        curr = nextTemp;
    }
    
    return dummy.next;
};
