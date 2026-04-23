/**
 * @param {number} V - Number of vertices
 * @param {number[][]} edges - Array of [u, v, weight]
 * @param {number} src - Source node
 * @return {number[] | string} - Shortest distances or error message
 */
function bellmanFord(V, edges, src) {
    let dist = new Array(V).fill(Infinity);
    dist[src] = 0;

    // Step 1: Relax all edges V - 1 times
    for (let i = 0; i < V - 1; i++) {
        for (let [u, v, weight] of edges) {
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }

    // Step 2: Check for negative weight cycles
    for (let [u, v, weight] of edges) {
        if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
            return "Graph contains a negative weight cycle";
        }
    }

    return dist;
}

// Example Usage:
const V = 5;
const edges = [
    [0, 1, -1], [0, 2, 4], [1, 2, 3], 
    [1, 3, 2], [1, 4, 2], [3, 2, 5], 
    [3, 1, 1], [4, 3, -3]
];
const source = 0;

console.log(bellmanFord(V, edges, source)); 
// Output: [0, -1, 2, -2, 1]
