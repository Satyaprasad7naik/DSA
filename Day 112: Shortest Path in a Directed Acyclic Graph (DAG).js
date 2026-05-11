/**
 * Day 112: Shortest Path in a DAG using Topological Sort
 * Time Complexity: O(V + E)
 * Space Complexity: O(V + E)
 */

function shortestPathDAG(n, edges, source) {
    // 1. Build Adjacency List
    const adj = Array.from({ length: n }, () => []);
    for (let [u, v, weight] of edges) {
        adj[u].push([v, weight]);
    }

    // 2. Perform Topological Sort (DFS based)
    const visited = new Array(n).fill(false);
    const stack = [];

    function topologicalSort(u) {
        visited[u] = true;
        for (let [v, weight] of adj[u]) {
            if (!visited[v]) {
                topologicalSort(v);
            }
        }
        stack.push(u);
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) topologicalSort(i);
    }

    // 3. Initialize distances
    const dist = new Array(n).fill(Infinity);
    dist[source] = 0;

    // 4. Process vertices in topological order
    while (stack.length > 0) {
        const u = stack.pop();

        if (dist[u] !== Infinity) {
            for (let [v, weight] of adj[u]) {
                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }
    }

    return dist.map(d => d === Infinity ? -1 : d);
}

// Example Usage:
const n = 6;
const edges = [
    [0, 1, 2], [0, 4, 1],
    [1, 2, 3], 
    [4, 2, 2], [4, 5, 4],
    [2, 3, 6], 
    [5, 3, 1]
];
const source = 0;

console.log("Shortest distances from source 0:", shortestPathDAG(n, edges, source));
// Expected Output: [0, 2, 3, 6, 1, 5]
