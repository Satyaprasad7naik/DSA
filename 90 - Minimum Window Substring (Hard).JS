/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    if (!s || !t) return "";

    let map = {};
    for (let char of t) {
        map[char] = (map[char] || 0) + 1;
    }

    let left = 0, right = 0;
    let required = Object.keys(map).length;
    let formed = 0;
    let windowCounts = {};
    let ans = [-1, 0, 0]; // [length, left, right]

    while (right < s.length) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (map[char] && windowCounts[char] === map[char]) {
            formed++;
        }

        // Try to contract the window
        while (left <= right && formed === required) {
            char = s[left];
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            windowCounts[char]--;
            if (map[char] && windowCounts[char] < map[char]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
}

// Example Test Case
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
