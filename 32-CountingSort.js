// Problem: Counting Sort
// Description: Implement counting sort algorithm to sort an array of non-negative integers
// Counting sort is a non-comparison sorting algorithm that sorts based on the count of each distinct element
// It works best for arrays with a limited range of input values

/**
 * @param {number[]} arr - Array of non-negative integers
 * @param {number} max - Maximum value in the array
 * @return {number[]} - Sorted array
 */

// Solution 1: Basic Counting Sort
// Time Complexity: O(n + k) where n is the number of elements and k is the range of values
// Space Complexity: O(k) for the count array
function countingSort(arr, max) {
  // Create count array to store count of each element
  const count = new Array(max + 1).fill(0);
  
  // Store count of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  
  // Change count[i] so that it contains actual position of this element in output array
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  
  // Build the output array
  const output = new Array(arr.length);
  
  // Process input array in reverse to maintain stability
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  return output;
}

// Solution 2: Simple Counting Sort (without stability requirement)
// Time Complexity: O(n + k)
// Space Complexity: O(k)
function simplCountingSort(arr, max) {
  const count = new Array(max + 1).fill(0);
  
  // Count occurrences of each element
  for (let num of arr) {
    count[num]++;
  }
  
  // Reconstruct the array
  let index = 0;
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < count[i]; j++) {
      arr[index++] = i;
    }
  }
  
  return arr;
}

// Solution 3: Counting Sort with custom comparator (Extended)
// Time Complexity: O(n + k)
// Space Complexity: O(n + k)
function countingSortExtended(arr) {
  if (arr.length === 0) return arr;
  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  
  const count = new Array(range).fill(0);
  const output = new Array(arr.length);
  
  // Count occurrences
  for (let num of arr) {
    count[num - min]++;
  }
  
  // Update count to actual positions
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }
  
  // Build output from end to maintain stability
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }
  
  return output;
}

// Test Cases
console.log("Test Case 1 - Basic Counting Sort:");
console.log(countingSort([4, 2, 2, 8, 3, 3, 1], 8)); // [1, 2, 2, 3, 3, 4, 8]

console.log("\nTest Case 2 - Simple Counting Sort:");
console.log(simplCountingSort([5, 2, 8, 2, 9, 1, 5], 9)); // [1, 2, 2, 5, 5, 8, 9]

console.log("\nTest Case 3 - Extended Counting Sort:");
console.log(countingSortExtended([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]

console.log("\nTest Case 4 - Single Element:");
console.log(countingSort([5], 5)); // [5]

console.log("\nTest Case 5 - All Same Elements:");
console.log(countingSort([3, 3, 3, 3], 3)); // [3, 3, 3, 3]

console.log("\nTest Case 6 - Already Sorted:");
console.log(countingSort([1, 2, 3, 4, 5], 5)); // [1, 2, 3, 4, 5]

console.log("\nTest Case 7 - Reverse Sorted:");
console.log(countingSort([5, 4, 3, 2, 1], 5)); // [1, 2, 3, 4, 5]
