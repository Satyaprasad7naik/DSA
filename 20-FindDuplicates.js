/**
 * Problem: Find Duplicates in Array
 * Description: Given an array of integers, find and return all duplicate elements.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

// Test Cases
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5])); // [2, 3]
console.log(findDuplicates([1, 1, 1])); // [1]
console.log(findDuplicates([1, 2, 3, 4])); // []
console.log(findDuplicates([0, 0, 1, 1, 1, 2])); // [0, 1]

module.exports = findDuplicates;
