/**
 * Problem: Sliding Window Maximum
 * Given an array nums and a window size k, return the max elements for each window.
 * Complexity: Time O(n), Space O(k)
 */

function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Stores indices of elements

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window range
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 2. Remove indices of elements smaller than the current element
        // (Maintaining a monotonic decreasing queue)
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        // 3. Once the first window is complete, add the front of deque to results
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example Test Case:
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); 
// Output: [3, 3, 5, 5, 6, 7]
