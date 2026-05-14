/**
 * Floyd-Warshall Algorithm
 * Finds the shortest paths between all pairs of vertices in a weighted graph.
 * * Time Complexity: O(V^3)
 * Space Complexity: O(V^2)
 */

function floydWarshall(graph) {
    const dist = [];
    const V = graph.length;

    // Initialize the solution matrix same as input graph matrix
    for (let i = 0; i < V; i++) {
        dist[i] = [];
        for (let j = 0; j < V; j++) {
            dist[i][j] = graph[i][j];
        }
    }

    /* Add all vertices one by one to the set of intermediate vertices.
       ---> Before start of an iteration, we have shortest distances between all
            pairs of vertices such that the shortest distances consider only the
            vertices in set {0, 1, 2, .. k-1} as intermediate vertices.
       ---> After the end of an iteration, vertex k is added to the set of
            intermediate vertices and the set becomes {0, 1, 2, .. k} */
    for (let k = 0; k < V; k++) {
        // Pick all vertices as source one by one
        for (let i = 0; i < V; i++) {
            // Pick all vertices as destination for the above picked source
            for (let j = 0; j < V; j++) {
                // If vertex k is on the shortest path from i to j,
                // then update the value of dist[i][j]
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

const shortestDistances = floydWarshall(graph);
console.table(shortestDistances);
