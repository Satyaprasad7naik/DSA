/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
    // Edge case: 0 or 1 meeting means no conflicts possible
    if (!intervals || intervals.length <= 1) {
        return true;
    }

    // Step 1: Sort meetings by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Iterate and check adjacent meetings for overlaps
    for (let i = 1; i < intervals.length; i++) {
        const prevMeetingEnd = intervals[i - 1][1];
        const currentMeetingStart = intervals[i][0];

        // If the previous meeting ends after the current one starts, there is a conflict
        if (prevMeetingEnd > currentMeetingStart) {
            return false;
        }
    }

    return true;
}

// --- Test Cases ---
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // Output: false
console.log(canAttendMeetings([[7, 10], [2, 4]]));             // Output: true
console.log(canAttendMeetings([[1, 5], [5, 10], [10, 15]]));   // Output: true (Back-to-back is allowed)
