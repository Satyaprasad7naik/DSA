/**
 * Problem 102: Kruskal's Algorithm for MST
 * Objective: Find the minimum total weight to connect all nodes.
 */

class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(i) {
        if (this.parent[i] === i) return i;
        // Path compression
        return this.parent[i] = this.find(this.parent[i]);
    }

    union(i, j) {
        let rootI = this.find(i);
        let rootJ = this.find(j);

        if (rootI !== rootJ) {
            // Union by rank
            if (this.rank[rootI] < this.rank[rootJ]) {
                this.parent[rootI] = rootJ;
            } else if (this.rank[rootI] > this.rank[rootJ]) {
                this.parent[rootJ] = rootI;
            } else {
                this.parent[rootI] = rootJ;
                this.rank[rootJ]++;
            }
            return true;
        }
        return false;
    }
}

function kruskalMST(numVertices, edges) {
    // 1. Sort all edges in non-decreasing order of their weight
    edges.sort((a, b) => a[2] - b[2]);

    const dsu = new DisjointSet(numVertices);
    const mst = [];
    let mstWeight = 0;

    for (let [u, v, weight] of edges) {
        // 2. If including this edge doesn't cause a cycle, add it
        if (dsu.union(u, v)) {
            mst.push([u, v, weight]);
            mstWeight += weight;
        }
        
        // Optimization: MST will always have exactly V-1 edges
        if (mst.length === numVertices - 1) break;
    }

    return { mst, mstWeight };
}

// Example Usage:
// Nodes: 0, 1, 2, 3
// Edges: [source, destination, weight]
const numVertices = 4;
const edges = [
    [0, 1, 10],
    [0, 2, 6],
    [0, 3, 5],
    [1, 3, 15],
    [2, 3, 4]
];

const result = kruskalMST(numVertices, edges);
console.log("Edges in MST:", result.mst);
console.log("Total Weight:", result.mstWeight);
