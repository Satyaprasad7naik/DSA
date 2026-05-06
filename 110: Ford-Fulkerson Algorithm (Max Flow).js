/**
 * Problem 110: Find the Maximum Flow in a flow network.
 * Algorithm: Ford-Fulkerson (Edmonds-Karp implementation)
 */

function bfs(residualGraph, s, t, parent) {
    let visited = new Set();
    let queue = [s];
    visited.add(s);
    parent[s] = -1;

    while (queue.length > 0) {
        let u = queue.shift();

        for (let v = 0; v < residualGraph.length; v++) {
            if (!visited.has(v) && residualGraph[u][v] > 0) {
                if (v === t) {
                    parent[v] = u;
                    return true;
                }
                queue.push(v);
                parent[v] = u;
                visited.add(v);
            }
        }
    }
    return false;
}

function fordFulkerson(graph, s, t) {
    let u, v;
    let n = graph.length;
    let residualGraph = Array.from({ length: n }, (_, i) => [...graph[i]]);
    let parent = new Array(n);
    let maxFlow = 0;

    while (bfs(residualGraph, s, t, parent)) {
        let pathFlow = Infinity;
        
        // Find minimum capacity in the path found by BFS
        for (v = t; v !== s; v = parent[v]) {
            u = parent[v];
            pathFlow = Math.min(pathFlow, residualGraph[u][v]);
        }

        // Update residual capacities of the edges and reverse edges
        for (v = t; v !== s; v = parent[v]) {
            u = parent[v];
            residualGraph[u][v] -= pathFlow;
            residualGraph[v][u] += pathFlow;
        }

        maxFlow += pathFlow;
    }

    return maxFlow;
}

// Example Usage:
const graph = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
];

console.log("The maximum possible flow is " + fordFulkerson(graph, 0, 5));
