/**
 * Prim's Algorithm to find the Minimum Spanning Tree (MST) weight.
 * @param {number} V - Number of vertices
 * @param {Array<Array<Array<number>>>} adj - Adjacency list where adj[u] = [[v, weight], ...]
 * @returns {number} - Total weight of the MST
 */
function primsAlgorithm(V, adj) {
    // Priority Queue stores [weight, node]
    // Start with node 0 and weight 0
    let pq = [[0, 0]]; 
    let visited = new Array(V).fill(false);
    let mstSum = 0;

    while (pq.length > 0) {
        // Sort to simulate Min-Priority Queue (extract smallest weight)
        pq.sort((a, b) => a[0] - b[0]);
        let [weight, u] = pq.shift();

        // If the node is already part of MST, skip it
        if (visited[u]) continue;

        // Add weight to total sum and mark node as visited
        visited[u] = true;
        mstSum += weight;

        // Explore neighbors
        for (let [v, edgeWeight] of adj[u]) {
            if (!visited[v]) {
                pq.push([edgeWeight, v]);
            }
        }
    }

    return mstSum;
}

// Example Usage:
// Graph represented as an adjacency list
const V = 5;
const adj = [
    [[1, 2], [3, 6]],       // Node 0
    [[0, 2], [2, 3], [3, 8], [4, 5]], // Node 1
    [[1, 3], [4, 7]],       // Node 2
    [[0, 6], [1, 8]],       // Node 3
    [[1, 5], [2, 7]]        // Node 4
];

console.log("Total Weight of MST:", primsAlgorithm(V, adj)); // Output: 16
