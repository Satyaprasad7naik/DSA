// Count Vowels in a String
// DSA - Simple Problem

const countVowels = (str) => {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  
  return count;
};

// Test Cases
console.log(countVowels("hello"));       // Output: 2
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("aeiou"));      // Output: 5
console.log(countVowels("bcdfg"));      // Output: 0
