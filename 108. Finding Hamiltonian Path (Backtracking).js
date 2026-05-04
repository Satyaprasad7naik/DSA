/**
 * Problem 108: Hamiltonian Path using Backtracking
 * A Hamiltonian Path visits every vertex exactly once.
 */

function isSafe(v, graph, path, pos) {
    // Check if this vertex is adjacent to the previously added vertex
    if (graph[path[pos - 1]][v] === 0) return false;

    // Check if the vertex has already been included
    for (let i = 0; i < pos; i++) {
        if (path[i] === v) return false;
    }
    return true;
}

function hamPathUtil(graph, path, pos, V) {
    // Base case: If all vertices are included in the path
    if (pos === V) return true;

    // Try different vertices as the next candidate in Hamiltonian Path
    for (let v = 0; v < V; v++) {
        if (isSafe(v, graph, path, pos)) {
            path[pos] = v;

            if (hamPathUtil(graph, path, pos + 1, V)) return true;

            // Backtrack
            path[pos] = -1;
        }
    }
    return false;
}

function findHamiltonianPath(graph, V) {
    let path = new Array(V).fill(-1);

    // Try starting from every vertex
    for (let i = 0; i < V; i++) {
        path[0] = i;
        if (hamPathUtil(graph, path, 1, V)) {
            console.log("Hamiltonian Path found:", path.join(" -> "));
            return true;
        }
    }

    console.log("No Hamiltonian Path exists.");
    return false;
}

// Example Usage (Adjacency Matrix)
const graph = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0]
];

findHamiltonianPath(graph, 5);
