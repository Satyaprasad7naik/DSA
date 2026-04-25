/**
 * Floyd-Warshall Algorithm - All Pairs Shortest Path
 * @param {number[][]} graph - Adjacency matrix where graph[i][j] is the weight of edge i -> j
 * @returns {number[][]} - Shortest distance matrix
 */
function floydWarshall(graph) {
    const n = graph.length;
    // Initialize the distance matrix with the input graph
    let dist = Array.from({ length: n }, (_, i) => [...graph[i]]);

    // Standard value for Infinity if no path exists
    const INF = Infinity;

    // Pick all vertices as an intermediate vertex one by one
    for (let k = 0; k < n; k++) {
        // Pick all vertices as source one by one
        for (let i = 0; i < n; i++) {
            // Pick all vertices as destination for the above source
            for (let j = 0; j < n; j++) {
                // If vertex k is on the shortest path from i to j,
                // then update the value of dist[i][j]
                if (dist[i][k] !== INF && dist[k][j] !== INF) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
    }

    return dist;
}

// Example Usage:
const INF = Infinity;
const graph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0]
];

console.table(floydWarshall(graph));
