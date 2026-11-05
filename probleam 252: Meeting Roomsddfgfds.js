/**
 * Definition for an interval:
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
    if (!intervals || intervals.length === 0) return 0;

    const starts = [];
    const ends = [];

    for (let i = 0; i < intervals.length; i++) {
        starts.push(intervals[i].start);
        ends.push(intervals[i].end);
    }

    // Sort start and end times separately
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let rooms = 0;
    let endPointer = 0;

    for (let i = 0; i < starts.length; i++) {
        // If the current meeting starts before the earliest finished meeting, we need a new room
        if (starts[i] < ends[endPointer]) {
            rooms++;
        } else {
            // Otherwise, a room has freed up, so advance the end pointer
            endPointer++;
        }
    }

    return rooms;
}
