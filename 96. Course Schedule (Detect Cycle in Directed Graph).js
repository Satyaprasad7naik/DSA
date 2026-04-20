/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);
    const queue = [];
    let count = 0;

    // Build adjacency list and calculate indegrees
    for (let [course, pre] of prerequisites) {
        adj[pre].push(course);
        indegree[course]++;
    }

    // Push courses with no prerequisites into the queue
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // Process the queue
    while (queue.length > 0) {
        const curr = queue.shift();
        count++;

        for (let neighbor of adj[curr]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If count matches numCourses, no cycle exists
    return count === numCourses;
};

// Example Test Case
console.log(canFinish(2, [[1, 0]])); // Output: true
console.log(canFinish(2, [[1, 0], [0, 1]])); // Output: false
