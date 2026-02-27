/**
 * DSA Problem 57: Group Anagrams
 * 
 * Problem:
 * Given an array of strings, group anagrams together.
 * Anagrams are words/strings that contain the same characters in different order.
 * 
 * Example:
 * Input: ["eat","tea","tan","ate","nat","bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 * 
 * Complexity:
 * Time: O(n * k log k) where n is number of strings, k is max length of a string
 * Space: O(n * k) for the hash map
 */

// Solution 1: Using Sorted String as Key
function groupAnagrams(strs) {
  const map = new Map();
  
  for (let str of strs) {
    // Sort the string to get a canonical form
    const sorted = str.split('').sort().join('');
    
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  
  return Array.from(map.values());
}

// Solution 2: Using Character Count as Key (More Efficient)
function groupAnagrams2(strs) {
  const map = new Map();
  
  for (let str of strs) {
    // Create a character count key
    const count = new Array(26).fill(0);
    
    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    const key = count.join(',');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

// Solution 3: Using Prime Number Product (Advanced)
function groupAnagrams3(strs) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  const map = new Map();
  
  for (let str of strs) {
    let product = 1;
    
    for (let char of str) {
      product *= primes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    
    if (!map.has(product)) {
      map.set(product, []);
    }
    map.get(product).push(str);
  }
  
  return Array.from(map.values());
}

// Test Cases
const testCases = [
  { input: ["eat","tea","tan","ate","nat","bat"], expected: [["eat","tea","ate"],["tan","nat"],["bat"]] },
  { input: [""], expected: [[""]] },
  { input: ["a"], expected: [["a"]] },
  { input: ["ab","ba","abc","bac","cab"], expected: [["ab","ba"],["abc","bac","cab"]] },
  { input: ["listen","silent","hello","world"], expected: [["listen","silent"],["hello"],["world"]] }
];

// Helper function to check if two grouped results are equal
function areGroupsEqual(result1, result2) {
  if (result1.length !== result2.length) return false;
  
  const sorted1 = result1.map(group => group.sort()).sort();
  const sorted2 = result2.map(group => group.sort()).sort();
  
  return JSON.stringify(sorted1) === JSON.stringify(sorted2);
}

// Run tests for all solutions
console.log('Testing Solution 1: groupAnagrams');
testCases.forEach((test, index) => {
  const result = groupAnagrams(test.input);
  const passed = areGroupsEqual(result, test.expected);
  console.log(`Test ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
  if (!passed) console.log(`  Expected:`, test.expected, `Got:`, result);
});

console.log('\nTesting Solution 2: groupAnagrams2');
testCases.forEach((test, index) => {
  const result = groupAnagrams2(test.input);
  const passed = areGroupsEqual(result, test.expected);
  console.log(`Test ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
});

console.log('\nTesting Solution 3: groupAnagrams3');
testCases.forEach((test, index) => {
  const result = groupAnagrams3(test.input);
  const passed = areGroupsEqual(result, test.expected);
  console.log(`Test ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { groupAnagrams, groupAnagrams2, groupAnagrams3 };
}
