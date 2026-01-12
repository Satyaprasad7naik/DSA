// Simple Sum Array Problem
// Calculate the sum of all elements in an array

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5]));        // Output: 15
console.log(sumArray([10, 20, 30]));           // Output: 60
console.log(sumArray([-1, -2, -3]));           // Output: -6
console.log(sumArray([0]));                    // Output: 0
console.log(sumArray([]));                     // Output: 0

// Alternative Solution using reduce
function sumArrayReduce(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

console.log(sumArrayReduce([1, 2, 3, 4, 5])); // Output: 15
