/**
 * Simple DSA Problem 28: Factorial of a Number
 * This function calculates the factorial of a given non-negative integer.
 */

function factorial(n) {
  if (n < 0) return "Negative numbers not allowed";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Test cases
console.log("Factorial of 5:", factorial(5)); // Output: 120
console.log("Factorial of 0:", factorial(0)); // Output: 1
console.log("Factorial of 10:", factorial(10)); // Output: 3628800
