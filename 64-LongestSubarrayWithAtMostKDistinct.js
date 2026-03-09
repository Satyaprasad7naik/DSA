// 64-LongestSubarrayWithAtMostKDistinct.js

function longestSubarrayWithAtMostKDistinct(nums, k) {
  let left = 0;
  let maxLen = 0;
  const freq = new Map();

  for (let right = 0; right < nums.length; right++) {
    const rVal = nums[right];
    freq.set(rVal, (freq.get(rVal) || 0) + 1);

    // shrink window until we have at most k distinct
    while (freq.size > k) {
      const lVal = nums[left];
      freq.set(lVal, freq.get(lVal) - 1);
      if (freq.get(lVal) === 0) freq.delete(lVal);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Example runs
console.log(longestSubarrayWithAtMostKDistinct([1, 2, 1, 2, 3], 2)); // 4
console.log(longestSubarrayWithAtMostKDistinct([1, 2, 1, 3, 4, 2, 3], 2)); // 3
console.log(longestSubarrayWithAtMostKDistinct([1, 2, 1, 3, 4, 2, 3], 3)); // 5

module.exports = { longestSubarrayWithAtMostKDistinct };
