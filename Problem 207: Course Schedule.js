/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Step 1: Build the adjacency list and in-degree array
    const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    for (let [course, pre] of prerequisites) {
        adj[pre].push(course);
        inDegree[course]++;
    }

    // Step 2: Add all courses with 0 in-degree to the queue
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 3: Process the queue (BFS topological sort)
    let processedCourses = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        processedCourses++;

        for (let neighbor of adj[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If we processed all courses, there are no cycles
    return processedCourses === numCourses;
};

// --- Example Test Cases ---
console.log(canFinish(2, [[1, 0]])); // Output: true
console.log(canFinish(2, [[1, 0], [0, 1]])); // Output: false (Cycle detected)
