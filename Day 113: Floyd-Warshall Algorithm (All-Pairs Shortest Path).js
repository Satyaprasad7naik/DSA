/**
 * Day 113: Floyd-Warshall Algorithm
 * Purpose: Find shortest paths between all pairs of vertices.
 */

function floydWarshall(n, edges) {
    // 1. Initialize the distance matrix with Infinity
    const dist = Array.from({ length: n }, () => new Array(n).fill(Infinity));

    // 2. Distance to self is always 0
    for (let i = 0; i < n; i++) dist[i][i] = 0;

    // 3. Fill the matrix with given edge weights
    for (let [u, v, weight] of edges) {
        dist[u][v] = weight;
    }

    // 4. Triple nested loop: Intermediate(k), Source(i), Destination(j)
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // If path through k is shorter, update it
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
    }

    // 5. Detect Negative Cycles (Optional)
    // If dist[i][i] becomes < 0, there is a negative cycle
    for (let i = 0; i < n; i++) {
        if (dist[i][i] < 0) {
            console.log("Negative Cycle Detected!");
            return null;
        }
    }

    return dist;
}

// Example Usage:
const n = 4;
const edges = [
    [0, 1, 3],
    [1, 0, 8],
    [1, 2, 1],
    [2, 0, 5],
    [2, 3, 8],
    [0, 3, 7]
];

const resultMatrix = floydWarshall(n, edges);

console.log("All-Pairs Shortest Path Matrix:");
console.table(resultMatrix);
