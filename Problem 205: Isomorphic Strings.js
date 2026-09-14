/**
 * Determines if two strings are isomorphic.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapS2T = new Map();
  const mapT2S = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check if previous mapping conflicts with current characters
    if (mapS2T.has(charS) && mapS2T.get(charS) !== charT) return false;
    if (mapT2S.has(charT) && mapT2S.get(charT) !== charS) return false;

    // Register bidirectional pair
    mapS2T.set(charS, charT);
    mapT2S.set(charT, charS);
  }

  return true;
}

// Test Cases
console.log(isIsomorphic("egg", "add"));     // true
console.log(isIsomorphic("foo", "bar"));     // false
console.log(isIsomorphic("paper", "title")); // true
