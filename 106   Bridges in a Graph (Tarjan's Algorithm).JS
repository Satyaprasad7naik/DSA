/**
 * Function to find all bridges in an undirected graph.
 * @param {number} n - Number of vertices
 * @param {number[][]} edges - List of edges
 */
function findBridges(n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const tin = new Array(n).fill(-1); // Time of insertion
    const low = new Array(n).fill(-1); // Lowest time reachable
    const bridges = [];
    let timer = 0;

    function dfs(node, parent) {
        tin[node] = low[node] = timer++;
        
        for (const neighbor of adj[node]) {
            if (neighbor === parent) continue;
            
            if (tin[neighbor] === -1) {
                dfs(neighbor, node);
                low[node] = Math.min(low[node], low[neighbor]);
                
                // Check if the edge node-neighbor is a bridge
                if (low[neighbor] > tin[node]) {
                    bridges.push([node, neighbor]);
                }
            } else {
                // Back-edge case
                low[node] = Math.min(low[node], tin[neighbor]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (tin[i] === -1) dfs(i, -1);
    }

    return bridges;
}

// Example Usage:
const n = 4;
const edges = [[0, 1], [1, 2], [2, 0], [1, 3]];
console.log("Bridges found:", findBridges(n, edges)); // Output: [[1, 3]]
