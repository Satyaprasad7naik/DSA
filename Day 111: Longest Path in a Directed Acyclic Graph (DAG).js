/**
 * Day 111: Longest Path in a DAG
 * Strategy: Topological Sort + Edge Relaxation
 */

class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adj = Array.from({ length: vertices }, () => []);
    }

    addEdge(u, v, weight) {
        this.adj[u].push({ node: v, weight: weight });
    }

    topologicalSortUtil(v, visited, stack) {
        visited[v] = true;
        for (let neighbor of this.adj[v]) {
            if (!visited[neighbor.node]) {
                this.topologicalSortUtil(neighbor.node, visited, stack);
            }
        }
        stack.push(v);
    }

    findLongestPath(s) {
        let stack = [];
        let visited = new Array(this.V).fill(false);
        let dist = new Array(this.V).fill(-Infinity);

        // 1. Perform Topological Sort
        for (let i = 0; i < this.V; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        // 2. Initialize source distance
        dist[s] = 0;

        // 3. Process vertices in topological order
        while (stack.length > 0) {
            let u = stack.pop();

            if (dist[u] !== -Infinity) {
                for (let neighbor of this.adj[u]) {
                    if (dist[neighbor.node] < dist[u] + neighbor.weight) {
                        dist[neighbor.node] = dist[u] + neighbor.weight;
                    }
                }
            }
        }

        // Print results
        this.printShortestPath(dist, s);
    }

    printShortestPath(dist, s) {
        console.log(`Longest paths from source ${s}:`);
        for (let i = 0; i < this.V; i++) {
            console.log(`To ${i}: ${dist[i] === -Infinity ? "Unreachable" : dist[i]}`);
        }
    }
}

// Example Usage:
const g = new Graph(6);
g.addEdge(0, 1, 5);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 6);
g.addEdge(1, 2, 2);
g.addEdge(2, 4, 4);
g.addEdge(2, 5, 2);
g.addEdge(2, 3, 7);
g.addEdge(3, 5, 1);
g.addEdge(3, 4, -1);
g.addEdge(4, 5, -2);

g.findLongestPath(1);
