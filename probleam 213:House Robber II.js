/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    
    // Base edge case: if there is only one house, rob it.
    if (n === 1) return nums[0];
    
    // Helper function to solve the linear House Robber problem for a given range
    function robLinear(arr, start, end) {
        let prev2 = 0; // Represents dp[i-2]
        let prev1 = 0; // Represents dp[i-1]
        
        for (let i = start; i <= end; i++) {
            let current = Math.max(prev1, prev2 + arr[i]);
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
    
    // Case 1: Exclude the last house (indices 0 to n-2)
    // Case 2: Exclude the first house (indices 1 to n-1)
    return Math.max(robLinear(nums, 0, n - 2), robLinear(nums, 1, n - 1));
};
