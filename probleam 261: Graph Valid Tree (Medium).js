/**
 * Problem 261: Graph Valid Tree
 * @param {number} n - Number of nodes (0 to n-1)
 * @param {number[][]} edges - List of undirected edges
 * @return {boolean}
 */
function validTree(n, edges) {
    // A tree with n nodes must have exactly n - 1 edges
    if (edges.length !== n - 1) return false;

    // Initialize Disjoint Set (Union-Find) parent array
    const parent = Array.from({ length: n }, (_, index) => index);

    function find(i) {
        if (parent[i] === i) {
            return i;
        }
        return parent[i] = find(parent[i]); // Path compression
    }

    function union(i, j) {
        const rootI = find(i);
        const rootJ = find(j);
        
        if (rootI === rootJ) {
            return false; // Cycle detected
        }
        parent[rootI] = rootJ;
        return true;
    }

    // Process every edge
    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return false;
        }
    }

    return true;
}

// Example test case:
// console.log(validTree(5, [[0,1], [0,2], [0,3], [1,4]])); // true
// console.log(validTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]])); // false
