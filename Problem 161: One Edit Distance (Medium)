/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = function(s, t) {
    const m = s.length;
    const n = t.length;

    // Ensure 's' is always the shorter or equal length string to simplify logic
    if (m > n) {
        return isOneEditDistance(t, s);
    }

    // If the difference in lengths is greater than 1, it requires more than 1 edit
    if (n - m > 1) {
        return false;
    }

    for (let i = 0; i < m; i++) {
        if (s[i] !== t[i]) {
            // If the lengths are the same, the only valid edit is a replacement
            if (m === n) {
                return s.substring(i + 1) === t.substring(i + 1);
            }
            // If lengths differ by 1, the only valid edit is an insertion into the shorter string (or deletion from the longer)
            return s.substring(i) === t.substring(i + 1);
        }
    }

    // If all characters in the shorter string match the beginning of the longer string,
    // they are one edit apart ONLY if the longer string has exactly one extra character at the end.
    return m + 1 === n;
};

// --- Test Cases ---
console.log(isOneEditDistance("ab", "acb")); // true (insert 'c')
console.log(isOneEditDistance("cab", "ad")); // false 
console.log(isOneEditDistance("1203", "1213")); // true (replace '0' with '1')
console.log(isOneEditDistance("abc", "abc")); // false (zero edits apart)
