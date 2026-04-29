/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var findBridges = function(n, connections) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of connections) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const discoveryTime = new Array(n).fill(-1);
    const lowLink = new Array(n).fill(-1);
    const bridges = [];
    let timer = 0;

    const dfs = (node, parent) => {
        discoveryTime[node] = lowLink[node] = timer++;

        for (const neighbor of adj[node]) {
            if (neighbor === parent) continue;

            if (discoveryTime[neighbor] === -1) {
                // If neighbor is not visited, recurse
                dfs(neighbor, node);
                
                // Check if the subtree rooted at neighbor has a back-edge
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);

                // If the lowest vertex reachable from neighbor is 
                // still deeper than node, then node-neighbor is a bridge
                if (lowLink[neighbor] > discoveryTime[node]) {
                    bridges.push([node, neighbor]);
                }
            } else {
                // Update lowLink for back-edges
                lowLink[node] = Math.min(lowLink[node], discoveryTime[neighbor]);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (discoveryTime[i] === -1) {
            dfs(i, -1);
        }
    }

    return bridges;
};

// Example Usage:
const n = 4;
const connections = [[0,1],[1,2],[2,0],[1,3]];
console.log(findBridges(n, connections)); // Output: [[1,3]]
