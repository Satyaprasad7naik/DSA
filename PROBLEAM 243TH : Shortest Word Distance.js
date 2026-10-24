var shortestDistance = function(wordsDict, word1, word2) {
    let pos1 = -1, pos2 = -1;
    let minDist = Infinity;
    
    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) pos1 = i;
        else if (wordsDict[i] === word2) pos2 = i;
        
        if (pos1 !== -1 && pos2 !== -1) {
            minDist = Math.min(minDist, Math.abs(pos1 - pos2));
        }
    }
    return minDist;
};
