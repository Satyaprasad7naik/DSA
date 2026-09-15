/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    
    while (curr !== null) {
        let nextTemp = curr.next; // Store the next node
        curr.next = prev;         // Reverse the current node's pointer
        prev = curr;              // Move prev one step forward
        curr = nextTemp;          // Move curr one step forward
    }
    
    // prev will be pointing to the new head of the reversed list
    return prev;
};
