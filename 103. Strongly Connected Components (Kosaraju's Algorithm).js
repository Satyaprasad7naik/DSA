/**
 * Problem 103: Strongly Connected Components (Kosaraju's Algorithm)
 * * Logic:
 * 1. Perform DFS to push nodes into a stack based on their finishing times.
 * 2. Reverse the graph (transpose).
 * 3. Pop nodes from the stack and perform DFS on the reversed graph to find SCCs.
 */

class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.adj = Array.from({ length: vertices }, () => []);
    }

    addEdge(u, v) {
        this.adj[u].push(v);
    }

    // Step 1: Fill stack with finishing times
    fillOrder(v, visited, stack) {
        visited[v] = true;
        for (let neighbor of this.adj[v]) {
            if (!visited[neighbor]) {
                this.fillOrder(neighbor, visited, stack);
            }
        }
        stack.push(v);
    }

    // Step 2: Get the transpose (reversed edges)
    getTranspose() {
        let g = new Graph(this.V);
        for (let v = 0; v < this.V; v++) {
            for (let neighbor of this.adj[v]) {
                g.addEdge(neighbor, v);
            }
        }
        return g;
    }

    // DFS for the reversed graph
    dfsReverse(v, visited, component) {
        visited[v] = true;
        component.push(v);
        for (let neighbor of this.adj[v]) {
            if (!visited[neighbor]) {
                this.dfsReverse(neighbor, visited, component);
            }
        }
    }

    // Main function to find SCCs
    findSCCs() {
        let stack = [];
        let visited = new Array(this.V).fill(false);

        // Step 1: Fill the stack
        for (let i = 0; i < this.V; i++) {
            if (!visited[i]) {
                this.fillOrder(i, visited, stack);
            }
        }

        // Step 2: Create a reversed graph
        let gr = this.getTranspose();

        // Step 3: Process nodes in stack order
        visited.fill(false);
        let sccs = [];

        while (stack.length > 0) {
            let v = stack.pop();
            if (!visited[v]) {
                let component = [];
                gr.dfsReverse(v, visited, component);
                sccs.push(component);
            }
        }
        return sccs;
    }
}

// --- Test Cases ---
const g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);

const result = g.findSCCs();
console.log("Strongly Connected Components:");
result.forEach((scc, index) => {
    console.log(`SCC ${index + 1}: ${scc.join(", ")}`);
});

/**
 * Expected Output:
 * SCC 1: 0, 1, 2
 * SCC 2: 3
 * SCC 3: 4
 */
