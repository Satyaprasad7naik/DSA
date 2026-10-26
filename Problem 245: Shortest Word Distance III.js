/**
 * Problem 245: Shortest Word Distance III
 * 
 * Time Complexity: O(N * L) where N is the number of words and L is the average length of word1/word2
 * Space Complexity: O(1)
 * 
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(wordsDict, word1, word2) {
    let index1 = -1;
    let index2 = -1;
    let minDistance = Infinity;
    const isSame = (word1 === word2);

    for (let i = 0; i < wordsDict.length; i++) {
        const currentWord = wordsDict[i];

        if (isSame) {
            // If word1 and word2 are identical, track the current and previous occurrences
            if (currentWord === word1) {
                if (index1 !== -1) {
                    minDistance = Math.min(minDistance, i - index1);
                }
                index1 = i;
            }
        } else {
            // If word1 and word2 are different, update their latest seen indices independently
            if (currentWord === word1) {
                index1 = i;
            } else if (currentWord === word2) {
                index2 = i;
            }

            if (index1 !== -1 && index2 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(index1 - index2));
            }
        }
    }

    return minDistance;
};

// --- Test Cases ---
const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];

console.log("Test 1 (Different words):", shortestWordDistance(wordsDict, "makes", "coding")); // Expected: 1
console.log("Test 2 (Same words):", shortestWordDistance(wordsDict, "makes", "makes"));       // Expected: 3
