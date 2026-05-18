/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    
    // Start with the root node. We will traverse level by level.
    let leftmost = root;
    
    // As long as there is a level below the current one
    while (leftmost.left !== null) {
        
        // Iterate through the nodes on the current level
        let head = leftmost;
        
        while (head !== null) {
            // CONNECTION 1: Connect the left child to the right child
            head.left.next = head.right;
            
            // CONNECTION 2: Connect the right child to the next node's left child
            if (head.next !== null) {
                head.right.next = head.next.left;
            }
            
            // Move to the next node on the current level
            head = head.next;
        }
        
        // Move down to the next level
        leftmost = leftmost.left;
    }
    
    return root;
};
