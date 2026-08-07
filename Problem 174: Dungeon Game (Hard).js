/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    const m = dungeon.length;
    const n = dungeon[0].length;
    
    // Create a 2D DP array initialized to Infinity. 
    // We add an extra row and column to handle boundary cases cleanly.
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(Infinity));
    
    // Base cases: We need at least 1 health to survive after rescuing the princess.
    // Set the virtual cells right below and right next to the princess to 1.
    dp[m][n - 1] = 1;
    dp[m - 1][n] = 1;
    
    // Work backwards from bottom-right to top-left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // Find the minimum health needed based on the optimal path (right or down)
            const minHealthNeeded = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
            
            // The knight's health must always be at least 1 (cannot drop to 0 or below)
            dp[i][j] = Math.max(1, minHealthNeeded);
        }
    }
    
    // The top-left corner will now contain the minimum initial health required
    return dp[0][0];
};

// Example usage:
// const dungeon = [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]];
// console.log(calculateMinimumHP(dungeon)); // Output: 7
