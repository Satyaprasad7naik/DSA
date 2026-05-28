/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    if (!prices || prices.length === 0) return 0;

    // Initialize states for the two transactions
    let buy1 = Infinity;
    let profit1 = 0;
    let buy2 = Infinity;
    let profit2 = 0;

    for (let price of prices) {
        // 1st Transaction: find the lowest price to buy, and max profit if we sell today
        buy1 = Math.min(buy1, price);
        profit1 = Math.max(profit1, price - buy1);
        
        // 2nd Transaction: reinvest the profit from the 1st transaction.
        // We effectively subtract our first profit from the current buying price.
        buy2 = Math.min(buy2, price - profit1);
        profit2 = Math.max(profit2, price - buy2);
    }

    return profit2;
}

// --- Test Cases ---
console.log(maxProfit([3,3,5,0,0,3,1,4])); // Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3. Total = 6.

console.log(maxProfit([1,2,3,4,5])); // Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.

console.log(maxProfit([7,6,4,3,1])); // Output: 0
// Explanation: No transactions are done, profit is 0.
