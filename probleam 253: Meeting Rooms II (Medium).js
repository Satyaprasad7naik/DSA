/**
 * Problem 253: Meeting Rooms II (Medium)
 * Given an array of meeting time intervals, find the minimum number of conference rooms required.
 *
 * Time Complexity: O(N log N) - Sorting the start and end arrays
 * Space Complexity: O(N) - Storing the start and end times separately
 *
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
    if (!intervals || intervals.length === 0) return 0;

    // 1. Separate start and end times into two arrays
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    let rooms = 0;
    let endPointer = 0;

    // 2. Iterate through all start times
    for (let startPointer = 0; startPointer < intervals.length; startPointer++) {
        // If the current meeting starts BEFORE the earliest ending meeting finishes,
        // we need a new room.
        if (starts[startPointer] < ends[endPointer]) {
            rooms++;
        } else {
            // Otherwise, the earliest meeting has ended, so we can reuse that room
            // and move the end pointer to the next earliest ending time.
            endPointer++;
        }
    }

    return rooms;
}

// --- Test Cases ---
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // Expected Output: 2
console.log(minMeetingRooms([[7, 10], [2, 4]]));            // Expected Output: 1
console.log(minMeetingRooms([[1, 5], [8, 9], [8, 9]]));     // Expected Output: 2
