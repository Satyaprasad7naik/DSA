/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals based on starting points
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize the result array with the first interval
  const result = [intervals[0]];

  // Step 2: Iterate through the sorted intervals
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = result[result.length - 1];

    // Check for overlap
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Merge by updating the end time of the last merged interval
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      // No overlap, push the current interval to result
      result.push(currentInterval);
    }
  }

  return result;
}

// --- Test Cases ---
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]]));                // Output: [[1,5]]
