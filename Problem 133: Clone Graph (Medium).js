/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 * this.val = val === undefined ? 0 : val;
 * this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * Clones a graph using Depth-First Search
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // If the input node is null, return null
    if (!node) return null;

    // Map to store visited nodes. 
    // Key: Original Node, Value: Cloned Node
    const visited = new Map();

    const dfs = (currNode) => {
        // If the node has already been cloned, return the cloned reference
        if (visited.has(currNode)) {
            return visited.get(currNode);
        }

        // Create a clone for the current node
        const cloneNode = new Node(currNode.val);
        
        // Add the cloned node to the visited map BEFORE iterating through neighbors 
        // to prevent infinite loops in cyclic graphs
        visited.set(currNode, cloneNode);

        // Iterate through all the neighbors of the original node
        for (const neighbor of currNode.neighbors) {
            // Recursively clone the neighbors and push them to the cloned node's neighbors array
            cloneNode.neighbors.push(dfs(neighbor));
        }

        return cloneNode;
    };

    // Start the DFS traversal from the given node
    return dfs(node);
};
