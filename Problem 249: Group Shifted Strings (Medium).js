/**
 * Problem 249: Group Shifted Strings
 * 
 * Time Complexity: O(N * K), where N is the number of strings and K is the maximum length of a string.
 * Space Complexity: O(N * K) to store the grouped strings and hash keys in the Map.
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
function groupStrings(strings) {
    const map = new Map();

    for (const str of strings) {
        const key = getHashKey(str);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

/**
 * Helper to normalize a string so its first character is shifted to 'a'
 * @param {string} str
 * @return {string}
 */
function getHashKey(str) {
    const shift = str.charCodeAt(0) - 97; // 97 is ASCII for 'a'
    let chars = [];

    for (let i = 0; i < str.length; i++) {
        // Add 26 before modulo to handle negative wrap-around (e.g., 'ba' -> 'az')
        const normalizedCode = ((str.charCodeAt(i) - 97 - shift + 26) % 26) + 97;
        chars.push(String.fromCharCode(normalizedCode));
    }

    return chars.join('');
}

// --- Test Cases ---
const test1 = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
console.log("Test 1:", groupStrings(test1));
// Expected Output: [ [ 'abc', 'bcd', 'xyz' ], [ 'acef' ], [ 'az', 'ba' ], [ 'a', 'z' ] ]

const test2 = ["a"];
console.log("Test 2:", groupStrings(test2));
// Expected Output: [ [ 'a' ] ]
