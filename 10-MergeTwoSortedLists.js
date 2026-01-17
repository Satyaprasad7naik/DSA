// DSA Problem: Merge Two Sorted Lists
// Problem: Merge two sorted linked lists and return it as a sorted list
// Time Complexity: O(n + m) where n and m are lengths of the lists
// Space Complexity: O(1)

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let current = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 !== null ? list1 : list2;
    return dummy.next;
}

// Test cases
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(l1, l2)); // Output: 1->1->2->3->4->4
