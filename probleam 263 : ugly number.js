/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {
  if (n <= 0) return false;

  for (const factor of [2, 3, 5]) {
    while (n % factor === 0) {
      n /= factor;
    }
  }

  return n === 1;
}

// Test cases
console.log(isUgly(6));  // true
console.log(isUgly(1));  // true
console.log(isUgly(14)); // false
console.log(isUgly(0));  // false
