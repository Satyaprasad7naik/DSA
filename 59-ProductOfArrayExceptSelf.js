// 59-ProductOfArrayExceptSelf.js
// Problem:
// Given an integer array nums, return an array answer such that
// answer[i] is the product of all the elements of nums except nums[i].
// Solve in O(n) time without using division.

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

// Example tests
console.log(productExceptSelf([1, 2, 3, 4]));          // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));    // [0, 0, 9, 0, 0]

module.exports = productExceptSelf;





// Example tests
console.log(productExceptSelf([1, 2, 3, 4]));          // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));    // [0, 0, 9, 0, 0]

module.exports = productExceptSelf;

