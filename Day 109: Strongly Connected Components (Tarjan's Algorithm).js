/**
 * Problem 109: Strongly Connected Components using Tarjan's Algorithm
 * Complexity: O(V + E)
 */

function findSCCs(n, adj) {
    let timer = 0;
    let disc = new Array(n).fill(-1);
    let low = new Array(n).fill(-1);
    let stackMember = new Array(n).fill(false);
    let st = [];
    let result = [];

    function dfs(u) {
        disc[u] = low[u] = ++timer;
        st.push(u);
        stackMember[u] = true;

        for (let v of adj[u]) {
            // If v is not visited, recur for it
            if (disc[v] === -1) {
                dfs(v);
                low[u] = Math.min(low[u], low[v]);
            } 
            // If v is in the stack, it's a back-edge
            else if (stackMember[v]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }

        // If u is a head node of an SCC, pop the stack
        if (low[u] === disc[u]) {
            let component = [];
            while (true) {
                let node = st.pop();
                stackMember[node] = false;
                component.push(node);
                if (u === node) break;
            }
            result.push(component);
        }
    }

    for (let i = 0; i < n; i++) {
        if (disc[i] === -1) {
            dfs(i);
        }
    }

    return result;
}

// Example Usage:
const n = 5;
const adj = Array.from({ length: n }, () => []);
adj[1].push(0);
adj[0].push(2);
adj[2].push(1);
adj[0].push(3);
adj[3].push(4);

console.log("Strongly Connected Components:");
console.log(findSCCs(n, adj)); 
// Output: [[4], [3], [1, 2, 0]]
