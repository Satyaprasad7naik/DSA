/**
 * Problem 122: Best Time to Buy and Sell Stock II
 * * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let maxProfit = 0;

    // Loop through the prices starting from the second day
    for (let i = 1; i < prices.length; i++) {
        // If the current day's price is greater than the previous day's, 
        // we capture the profit.
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}

// --- Test Cases ---
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 7 (Buy on day 2, sell on day 3, buy on day 4, sell on day 5)
console.log(maxProfit([1, 2, 3, 4, 5]));    // Expected output: 4 (Buy on day 1, sell on day 5)
console.log(maxProfit([7, 6, 4, 3, 1]));    // Expected output: 0 (No transactions are done)
