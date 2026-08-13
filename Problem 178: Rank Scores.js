/**
 * Problem 178: Rank Scores
 * 
 * Write a solution to find the rank of the scores. The ranking should be calculated according to the following rules:
 * - The scores should be ranked from the highest to the lowest.
 * - If there is a tie between two scores, both should have the same ranking.
 * - After a tie, the next ranking number should be the next consecutive integer value.
 */

function rankScores(scores) {
    // Sort scores in descending order
    scores.sort((a, b) => b.score - a.score);
    
    let currentRank = 1;
    const result = [];

    for (let i = 0; i < scores.length; i++) {
        // Increment rank only if the current score is strictly less than the previous score
        if (i > 0 && scores[i].score < scores[i - 1].score) {
            currentRank++;
        }
        
        result.push({
            score: scores[i].score,
            rank: currentRank
        });
    }

    return result;
}

// --- Test Case ---
const scoresTable = [
  { id: 1, score: 3.50 },
  { id: 2, score: 3.65 },
  { id: 3, score: 4.00 },
  { id: 4, score: 3.85 },
  { id: 5, score: 4.00 },
  { id: 6, score: 3.65 }
];

console.table(rankScores(scoresTable));
