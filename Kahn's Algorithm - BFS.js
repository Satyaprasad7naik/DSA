/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);
    const order = [];

    // Build adjacency list and fill indegrees
    for (let [course, pre] of prerequisites) {
        adj[pre].push(course);
        indegree[course]++;
    }

    // Add all courses with no prerequisites to the queue
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // Process the queue
    while (queue.length > 0) {
        const current = queue.shift();
        order.push(current);

        for (let neighbor of adj[current]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If order length matches numCourses, we found a valid path
    return order.length === numCourses ? order : [];
};

// Example Test Case:
// numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,1,2,3] or [0,2,1,3]
