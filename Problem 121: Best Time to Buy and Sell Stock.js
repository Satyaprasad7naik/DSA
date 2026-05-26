/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        // If we find a new minimum price, update minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // If selling at the current price yields a better profit, update maxProfit
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
};

// --- Test Cases ---
console.log("Test Case 1:", maxProfit([7, 1, 5, 3, 6, 4])); // Expected Output: 5
console.log("Test Case 2:", maxProfit([7, 6, 4, 3, 1]));    // Expected Output: 0
console.log("Test Case 3:", maxProfit([2, 4, 1]));          // Expected Output: 2
console.log("Test Case 4:", maxProfit([2]));                // Expected Output: 0
