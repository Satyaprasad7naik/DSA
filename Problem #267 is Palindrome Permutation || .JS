/**
 * @param {string} s
 * @return {string[]}
 */
function generatePalindromes(s) {
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  let mid = "";
  let oddCount = 0;
  const halfChars = [];

  for (const [ch, count] of freq.entries()) {
    if (count % 2 === 1) {
      oddCount++;
      mid = ch;
    }
    if (oddCount > 1) {
      return [];
    }
    const pairs = Math.floor(count / 2);
    for (let i = 0; i < pairs; i++) {
      halfChars.push(ch);
    }
  }

  halfChars.sort();
  const used = new Array(halfChars.length).fill(false);
  const result = [];

  function backtrack(current) {
    if (current.length === halfChars.length) {
      const left = current.join("");
      const right = [...current].reverse().join("");
      result.push(left + mid + right);
      return;
    }

    for (let i = 0; i < halfChars.length; i++) {
      if (used[i]) continue;
      // Skip duplicate characters at the same tree level
      if (i > 0 && halfChars[i] === halfChars[i - 1] && !used[i - 1]) {
        continue;
      }

      used[i] = true;
      current.push(halfChars[i]);
      backtrack(current);
      current.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
}

// Example test cases
console.log(generatePalindromes("aabb")); // ["abba", "baab"]
console.log(generatePalindromes("abc"));  // []
console.log(generatePalindromes("aab"));  // ["aba"]
