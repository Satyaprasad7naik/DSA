/**
 * Problem 29: Armstrong Number (Narcissistic Number)
 * 
 * An Armstrong number (also known as a Narcissistic number) is a number that is 
 * equal to the sum of its own digits each raised to the power of the number of digits.
 * 
 * Example:
 * - 153 is an Armstrong number: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * - 370 is an Armstrong number: 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370
 * - 9474 is an Armstrong number: 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474
 */

// Approach 1: Convert to string and check
function isArmstrongNumber(num) {
  if (num < 0) return false;
  
  const digits = String(num).split('');
  const numDigits = digits.length;
  
  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), numDigits);
  }, 0);
  
  return sum === num;
}

// Approach 2: Mathematical approach without string conversion
function isArmstrongNumberMath(num) {
  if (num < 0) return false;
  
  let temp = num;
  let numDigits = 0;
  
  // Count number of digits
  while (temp > 0) {
    numDigits++;
    temp = Math.floor(temp / 10);
  }
  
  // Calculate sum of digits raised to power of numDigits
  temp = num;
  let sum = 0;
  
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }
  
  return sum === num;
}

// Approach 3: Find all Armstrong numbers in a range
function findArmstrongNumbers(start, end) {
  const armstrong = [];
  
  for (let num = start; num <= end; num++) {
    if (isArmstrongNumber(num)) {
      armstrong.push(num);
    }
  }
  
  return armstrong;
}

// Test cases
console.log('=== Testing Armstrong Number ===');

// Test single digit numbers
console.log('Single digit numbers (all are Armstrong):');
console.log('1 is Armstrong:', isArmstrongNumber(1));  // true (1^1 = 1)
console.log('5 is Armstrong:', isArmstrongNumber(5));  // true (5^1 = 5)
console.log('9 is Armstrong:', isArmstrongNumber(9));  // true (9^1 = 9)

// Test 3-digit numbers
console.log('\n3-digit Armstrong numbers:');
console.log('153 is Armstrong:', isArmstrongNumber(153));  // true
console.log('370 is Armstrong:', isArmstrongNumber(370));  // true
console.log('371 is Armstrong:', isArmstrongNumber(371));  // true (3^3 + 7^3 + 1^3 = 371)
console.log('407 is Armstrong:', isArmstrongNumber(407));  // true

// Test non-Armstrong numbers
console.log('\nNon-Armstrong numbers:');
console.log('123 is Armstrong:', isArmstrongNumber(123));  // false
console.log('100 is Armstrong:', isArmstrongNumber(100));  // false

// Test 4-digit numbers
console.log('\n4-digit Armstrong numbers:');
console.log('1634 is Armstrong:', isArmstrongNumber(1634));  // true (1^4 + 6^4 + 3^4 + 4^4 = 1634)
console.log('8208 is Armstrong:', isArmstrongNumber(8208));  // true
console.log('9474 is Armstrong:', isArmstrongNumber(9474));  // true

// Test mathematical approach
console.log('\nTesting mathematical approach:');
console.log('153 (Math):', isArmstrongNumberMath(153));  // true
console.log('370 (Math):', isArmstrongNumberMath(370));  // true
console.log('123 (Math):', isArmstrongNumberMath(123));  // false

// Test finding Armstrong numbers in range
console.log('\nFinding Armstrong numbers 0-1000:');
console.log(findArmstrongNumbers(0, 1000));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]

// Time Complexity Analysis:
// Approach 1: O(d) where d is number of digits
// Approach 2: O(d) where d is number of digits
// Finding in range: O(n * d) where n is range size and d is average digit count

// Space Complexity: O(1) or O(d) depending on approach

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isArmstrongNumber,
    isArmstrongNumberMath,
    findArmstrongNumbers
  };
}
