/**
 * Function to find Articulation Points in an undirected graph
 * @param {number} V - Number of vertices
 * @param {number[][]} adj - Adjacency list
 */
function findArticulationPoints(V, adj) {
    let timer = 0;
    let discoveryTime = new Array(V).fill(-1);
    let lowLinkValue = new Array(V).fill(-1);
    let visited = new Array(V).fill(false);
    let isArticulation = new Array(V).fill(false);

    function dfs(node, parent = -1) {
        visited[node] = true;
        discoveryTime[node] = lowLinkValue[node] = timer++;
        let children = 0;

        for (let neighbor of adj[node]) {
            if (neighbor === parent) continue;

            if (visited[neighbor]) {
                // Back edge found
                lowLinkValue[node] = Math.min(lowLinkValue[node], discoveryTime[neighbor]);
            } else {
                children++;
                dfs(neighbor, node);
                lowLinkValue[node] = Math.min(lowLinkValue[node], lowLinkValue[neighbor]);

                // Condition 1: Node is not root and low value of child >= discovery time of node
                if (parent !== -1 && lowLinkValue[neighbor] >= discoveryTime[node]) {
                    isArticulation[node] = true;
                }
            }
        }

        // Condition 2: Node is root and has more than one child
        if (parent === -1 && children > 1) {
            isArticulation[node] = true;
        }
    }

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    const result = [];
    isArticulation.forEach((val, index) => {
        if (val) result.push(index);
    });

    return result;
}

// Example Usage:
const V = 5;
const adj = [[1, 2, 3], [0, 2], [0, 1], [0, 4], [3]];
console.log("Articulation Points:", findArticulationPoints(V, adj)); // Output: [0, 3]
