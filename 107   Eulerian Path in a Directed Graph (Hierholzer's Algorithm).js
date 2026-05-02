/**
 * Function to find an Eulerian Path in a directed graph
 * @param {Map} adj - Adjacency list of the graph
 * @param {Object} inDegree - Map of in-degrees for each node
 * @param {Object} outDegree - Map of out-degrees for each node
 * @param {number} totalEdges - Total number of edges in the graph
 */
function findEulerianPath(adj, inDegree, outDegree, totalEdges) {
    const path = [];
    const stack = [];
    
    // Find starting node
    let startNode = Array.from(adj.keys())[0];
    for (let node of adj.keys()) {
        // In a directed graph, a path exists if at most one node has outDegree - inDegree = 1
        if (outDegree[node] - (inDegree[node] || 0) === 1) {
            startNode = node;
            break;
        }
    }

    stack.push(startNode);

    while (stack.length > 0) {
        let u = stack[stack.length - 1];
        if (adj.has(u) && adj.get(u).length > 0) {
            let v = adj.get(u).pop();
            stack.push(v);
        } else {
            path.push(stack.pop());
        }
    }

    const result = path.reverse();
    return result.length === totalEdges + 1 ? result : "No Eulerian Path exists";
}

// Example Usage:
const adj = new Map([
    [0, [1]],
    [1, [2]],
    [2, [0]]
]);
const inDegree = {0: 1, 1: 1, 2: 1};
const outDegree = {0: 1, 1: 1, 2: 1};

console.log("Eulerian Path:", findEulerianPath(adj, inDegree, outDegree, 3));
