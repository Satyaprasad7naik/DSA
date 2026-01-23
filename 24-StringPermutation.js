/**
 * Problem 24: String Permutation (Anagram Check)
 * 
 * Check if two strings are permutations of each other (anagrams).
 * 
 * Examples:
 * isPermutation('listen', 'silent') => true
 * isPermutation('hello', 'world') => false
 * isPermutation('abc', 'bca') => true
 */

// Solution 1: Using sorting
function isPermutationSort(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');
    
    return sorted1 === sorted2;
}

// Solution 2: Using character count (more efficient)
function isPermutationCount(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const charCount = {};
    
    // Count characters in first string
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Subtract characters from second string
    for (let char of str2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

// Test cases
console.log('Testing String Permutation:');

// Test Solution 1
console.log('\nSolution 1 (Sorting):');
console.log(isPermutationSort('listen', 'silent')); // true
console.log(isPermutationSort('hello', 'world')); // false
console.log(isPermutationSort('abc', 'bca')); // true
console.log(isPermutationSort('aab', 'aba')); // true
console.log(isPermutationSort('rat', 'car')); // false

// Test Solution 2
console.log('\nSolution 2 (Character Count):');
console.log(isPermutationCount('listen', 'silent')); // true
console.log(isPermutationCount('hello', 'world')); // false
console.log(isPermutationCount('abc', 'bca')); // true
console.log(isPermutationCount('aab', 'aba')); // true
console.log(isPermutationCount('rat', 'car')); // false

// Export for use in other files
module.exports = { isPermutationSort, isPermutationCount };
