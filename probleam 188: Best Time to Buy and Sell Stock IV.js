var maxProfit = function(k, prices) {
    if (!prices || prices.length === 0 || k === 0) return 0;
    
    let n = prices.length;
    
    // If k is large enough, treat it as unlimited transactions
    if (k >= Math.floor(n / 2)) {
        let maxProfitVal = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfitVal += prices[i] - prices[i - 1];
            }
        }
        return maxProfitVal;
    }
    
    // dp[i][j] represents max profit up to day j with at most i transactions
    const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));
    
    for (let i = 1; i <= k; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
        }
    }
    
    return dp[k][n - 1];
};
