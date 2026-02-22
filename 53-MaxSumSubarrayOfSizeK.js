function maxSumSubarray(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;

  // Step 1: First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Step 2: Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}


🧪 Example Test Cases :

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
// 9

console.log(maxSumSubarray([1, 2, 3, 4, 5], 2));
// 9

console.log(maxSumSubarray([5, 2], 3));
// null
