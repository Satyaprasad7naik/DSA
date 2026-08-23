/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const res = new Set();
    
    // A sliding window of length 10 means we only loop up to s.length - 10
    for (let i = 0; i <= s.length - 10; i++) {
        const sub = s.substring(i, i + 10);
        
        if (seen.has(sub)) {
            res.add(sub); // Found a duplicate, add to result set
        } else {
            seen.add(sub); // Mark as seen
        }
    }
    
    return Array.from(res);
};
