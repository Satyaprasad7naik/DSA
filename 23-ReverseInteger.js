/**
 * Reverse Integer - Problem 23
 * Given an integer, reverse its digits.
 * 
 * Example:
 * reverseInteger(123) => 321
 * reverseInteger(-456) => -654
 */

// Method 1: Using String Conversion
function reverseInteger(num) {
  const sign = num < 0 ? -1 : 1;
  const reversed = Math.abs(num)
    .toString()
    .split('')
    .reverse()
    .join('');
  
  return sign * parseInt(reversed);
}

// Method 2: Using Mathematical Approach
function reverseIntegerMath(num) {
  let sign = num < 0 ? -1 : 1;
  let reversed = 0;
  let temp = Math.abs(num);
  
  while (temp !== 0) {
    const digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  
  return sign * reversed;
}

// Test Cases
console.log('Method 1 Results:');
console.log(reverseInteger(123));      // Output: 321
console.log(reverseInteger(-456));     // Output: -654
console.log(reverseInteger(1200));     // Output: 21

console.log('\nMethod 2 Results:');
console.log(reverseIntegerMath(123));      // Output: 321
console.log(reverseIntegerMath(-456));     // Output: -654
console.log(reverseIntegerMath(1200));     // Output: 21
