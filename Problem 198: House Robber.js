/**
 * LeetCode 198: House Robber
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prev2 = 0; // Represents dp[i-2]
    let prev1 = 0; // Represents dp[i-1]

    for (let i = 0; i < nums.length; i++) {
        let current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

// --- Test Cases ---
console.log(rob([1, 2, 3, 1])); // Output: 4 (Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 1 + 3 = 4)
console.log(rob([2, 7, 9, 3, 1])); // Output: 12 (Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total = 2 + 9 + 1 = 12)
