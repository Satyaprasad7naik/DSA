/**
 * PROBLEAM 244TH : Shortest Word Distance II
 * 
 * Problem Statement:
 * Design a data structure that will be initialized with a string array, 
 * and then it should answer queries of the shortest distance between 
 * two different strings from the array.
 * 
 * Time Complexity: 
 * - Constructor: O(N) where N is the number of words in the input array.
 * - shortest(): O(K + M) where K and M are the number of occurrences of the two words.
 * 
 * Space Complexity: O(N) to store the indices of each word in a Hash Map.
 */

class WordDistance {
    /**
     * @param {string[]} wordsDict
     */
    constructor(wordsDict) {
        this.locations = new Map();

        // Store all indices for each word in ascending order
        for (let i = 0; i < wordsDict.length; i++) {
            const word = wordsDict[i];
            if (!this.locations.has(word)) {
                this.locations.set(word, []);
            }
            this.locations.get(word).push(i);
        }
    }

    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    shortest(word1, word2) {
        const loc1 = this.locations.get(word1);
        const loc2 = this.locations.get(word2);

        let i = 0;
        let j = 0;
        let minDistance = Infinity;

        // Two-pointer approach to find the minimum difference between sorted arrays
        while (i < loc1.length && j < loc2.length) {
            minDistance = Math.min(minDistance, Math.abs(loc1[i] - loc2[j]));

            if (loc1[i] < loc2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return minDistance;
    }
}

// --- Test Cases ---
const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
const wordDistance = new WordDistance(wordsDict);

console.log(wordDistance.shortest("coding", "practice")); // Output: 3
console.log(wordDistance.shortest("makes", "coding"));    // Output: 1
