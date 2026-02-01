// Reverse Array Problem
// Reverse the elements in an array
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    // Swap elements
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

// Test cases
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20, 30, 40])); // Output: [40, 30, 20, 10]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']
console.log(reverseArray([1])); // Output: [1]
console.log(reverseArray([])); // Output: []

// Alternative Solution using spread operator
function reverseArraySpread(arr) {
  return [...arr].reverse();
}

console.log(reverseArraySpread([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// Alternative Solution using recursive approach
function reverseArrayRecursive(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  
  return reverseArrayRecursive(arr, start + 1, end - 1);
}

console.log(reverseArrayRecursive([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
