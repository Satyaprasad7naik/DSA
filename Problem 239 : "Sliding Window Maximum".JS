/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Will store indices of elements, not the elements themselves

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove indices that are out of the current window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift(); 
        }

        // 2. Remove indices of elements smaller than the current element 
        // from the back of the deque, as they can never be the maximum in the current or future windows
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 3. Add the current element's index to the deque
        deque.push(i);

        // 4. If the window has reached size k, the maximum is at the front of the deque
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
