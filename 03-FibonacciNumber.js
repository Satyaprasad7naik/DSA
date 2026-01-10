/**
 * Fibonacci Number
 * Given an integer n, return the nth fibonacci number.
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...
 * F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
 */

// Approach 1: Recursive (Simple but inefficient)
const fibRecursive = (n) => {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

// Approach 2: Dynamic Programming with Memoization (Optimized)
const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
};

// Approach 3: Iterative (Most Efficient - O(n) time, O(1) space)
const fibIterative = (n) => {
  if (n <= 1) return n;
  
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};

// Test cases
console.log(fibIterative(0));   // 0
console.log(fibIterative(1));   // 1
console.log(fibIterative(5));   // 5
console.log(fibIterative(10));  // 55
console.log(fibIterative(15));  // 610

// Export for testing
module.exports = { fibRecursive, fibMemo, fibIterative };
