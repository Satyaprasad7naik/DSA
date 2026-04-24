/**
 * 100-FloydWarshall.js
 * Purpose: All-pairs shortest path algorithm.
 */

function floydWarshall(graph, V) {
    let dist = Array.from({ length: V }, () => Array(V).fill(Infinity));

    // Initialize distances based on the graph edges
    for (let i = 0; i < V; i++) {
        for (let j = 0; j < V; j++) {
            if (i === j) dist[i][j] = 0;
            else if (graph[i][j] !== 0) dist[i][j] = graph[i][j];
        }
    }

    // Triple nested loop to find the shortest path
    for (let k = 0; k < V; k++) {
        for (let i = 0; i < V; i++) {
            for (let j = 0; j < V; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}

// Example usage:
const INF = Infinity;
const graph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0]
];

console.table(floydWarshall(graph, 4));
