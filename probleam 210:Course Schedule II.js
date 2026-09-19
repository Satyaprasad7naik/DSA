/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    const result = [];
    const queue = [];

    // 1. Build the adjacency list and in-degree array
    for (let [course, pre] of prerequisites) {
        adjList[pre].push(course);
        inDegree[course]++;
    }

    // 2. Add all courses with 0 in-degree to the queue
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // 3. Process the queue (BFS)
    let head = 0;
    while (head < queue.length) {
        let current = queue[head++];
        result.push(current);

        for (let neighbor of adjList[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // 4. Check if we were able to visit all courses (i.e., no cycle)
    return result.length === numCourses ? result : [];
};
