/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (!rooms || rooms.length === 0) return;

    const rows = rooms.length;
    const cols = rooms[0].length;
    const queue = [];
    const INF = 2147483647;

    // 1. Add all gates (0) to the queue to start multi-source BFS
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (rooms[r][c] === 0) {
                queue.push([r, c]);
            }
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // 2. BFS from all gates simultaneously
    while (queue.length > 0) {
        const [r, c] = queue.shift();

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Only visit if within bounds and the room is currently empty (INF)
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && rooms[nr][nc] === INF) {
                rooms[nr][nc] = rooms[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }
};
