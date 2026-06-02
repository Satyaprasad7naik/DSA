/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    wordSet.delete(beginWord);
    
    // BFS to find the shortest paths and build an adjacency list
    let level = new Set([beginWord]);
    const adjList = new Map();
    let found = false;

    while (level.size > 0 && !found) {
        const nextLevel = new Set();
        
        for (const word of level) {
            const neighbors = getNeighbors(word, wordSet);
            for (const neighbor of neighbors) {
                if (neighbor === endWord) found = true;
                
                if (!adjList.has(word)) {
                    adjList.set(word, []);
                }
                adjList.get(word).push(neighbor);
                nextLevel.add(neighbor);
            }
        }
        
        // Remove visited words from the wordSet to prevent cycles and ensure shortest path
        for (const word of nextLevel) {
            wordSet.delete(word);
        }
        level = nextLevel;
    }

    if (!found) return [];

    // DFS to reconstruct the paths from the adjacency list
    const result = [];
    const path = [beginWord];

    function dfs(currentWord) {
        if (currentWord === endWord) {
            result.push([...path]);
            return;
        }
        if (!adjList.has(currentWord)) return;

        for (const neighbor of adjList.get(currentWord)) {
            path.push(neighbor);
            dfs(neighbor);
            path.pop(); // backtrack
        }
    }

    dfs(beginWord);
    return result;

    // Helper function to find all valid transformations of a word
    function getNeighbors(word, dict) {
        const neighbors = [];
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) { // ASCII codes for 'a' to 'z'
                const char = String.fromCharCode(c);
                if (char === word[i]) continue;
                
                const newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (dict.has(newWord)) {
                    neighbors.push(newWord);
                }
            }
        }
        return neighbors;
    }
};
