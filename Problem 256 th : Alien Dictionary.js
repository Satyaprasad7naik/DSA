function alienOrder(words) {
    // Step 1: Initialize adjacency list and degree map for all unique characters
    const adj = new Map();
    const inDegree = new Map();

    for (const word of words) {
        for (const char of word) {
            if (!adj.has(char)) {
                adj.set(char, new Set());
                inDegree.set(char, 0);
            }
        }
    }

    // Step 2: Build the graph by comparing adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);
        let foundDifference = false;

        for (let j = 0; j < minLen; j++) {
            const c1 = w1[j];
            const c2 = w2[j];
            if (c1 !== c2) {
                if (!adj.get(c1).has(c2)) {
                    adj.get(c1).add(c2);
                    inDegree.set(c2, inDegree.get(c2) + 1);
                }
                foundDifference = true;
                break;
            }
        }

        // Edge case: "abc" comes before "ab", which is invalid in lexicographical ordering
        if (!foundDifference && w1.length > w2.length) {
            return "";
        }
    }

    // Step 3: Topological Sort using Kahn's Algorithm (BFS)
    const queue = [];
    for (const [char, degree] of inDegree) {
        if (degree === 0) {
            queue.push(char);
        }
    }

    let result = "";
    while (queue.length > 0) {
        const curr = queue.shift();
        result += curr;

        for (const neighbor of adj.get(curr)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If result length doesn't match total unique characters, there is a cycle
    return result.length === inDegree.size ? result : "";
}

// Example Usage:
const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words)); // Output: "wertf"
