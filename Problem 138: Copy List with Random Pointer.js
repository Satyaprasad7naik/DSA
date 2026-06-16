/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 * this.val = val;
 * this.next = next;
 * this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    // Map to store the old nodes as keys and new nodes as values
    const map = new Map();
    let current = head;

    // Step 1: Create a completely unlinked copy of each node
    while (current) {
        map.set(current, new _Node(current.val, null, null));
        current = current.next;
    }

    current = head;

    // Step 2: Assign the next and random pointers for the copied nodes
    while (current) {
        let copiedNode = map.get(current);
        
        // Use the map to find the corresponding copied next and random nodes
        copiedNode.next = map.get(current.next) || null;
        copiedNode.random = map.get(current.random) || null;
        
        current = current.next;
    }

    // Return the copied head node
    return map.get(head);
};
