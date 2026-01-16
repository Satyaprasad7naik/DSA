/**
 * Linear Search - DSA Problem
 * Search for an element in an array sequentially
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Function to perform linear search
function linearSearch(arr, target) {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If target is found, return the index
    if (arr[i] === target) {
      return i;
    }
  }
  // If target is not found, return -1
  return -1;
}

// Test cases
const testArray = [5, 2, 8, 12, 3, 7, 1, 9];

console.log("Array:", testArray);
console.log("Search for 12:", linearSearch(testArray, 12)); // Output: 3
console.log("Search for 7:", linearSearch(testArray, 7));  // Output: 5
console.log("Search for 1:", linearSearch(testArray, 1));  // Output: 6
console.log("Search for 10:", linearSearch(testArray, 10)); // Output: -1
