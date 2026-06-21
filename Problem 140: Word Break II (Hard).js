/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    function dfs(start) {
        // If we have already solved this substring, return the cached result
        if (memo.has(start)) {
            return memo.get(start);
        }

        // If we reach the end of the string, return an array with an empty string
        // to represent a valid path completion
        if (start === s.length) {
            return [""];
        }

        const sentences = [];

        // Try every possible end index for the current word
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);

            // If the current word is in the dictionary, process the rest of the string
            if (wordSet.has(word)) {
                const nextSentences = dfs(end);

                // Append the current word to all valid sentences formed by the remaining string
                for (const nextSentence of nextSentences) {
                    if (nextSentence === "") {
                        sentences.push(word);
                    } else {
                        sentences.push(word + " " + nextSentence);
                    }
                }
            }
        }

        // Cache and return the results for the current starting index
        memo.set(start, sentences);
        return sentences;
    }

    return dfs(0);
};

// Example usage:
const s = "catsanddog";
const wordDict = ["cat","cats","and","sand","dog"];
console.log(wordBreak(s, wordDict)); 
// Output: [ 'cat sand dog', 'cats and dog' ]
