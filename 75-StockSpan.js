// 75-StockSpan.js
// Problem: Stock Span Problem
// Given an array of stock prices, for each day find the span of stock’s price on that day.
// The span is the maximum number of consecutive days (up to today) the price was less than or equal to today's price.
//
// Example:
// Input:  [100, 80, 60, 70, 60, 75, 85]
// Output: [1,   1,  1,  2,  1,  4,  6]

function calculateStockSpan(prices) {
  const n = prices.length;
  const span = new Array(n).fill(1);
  const stack = []; // will store indexes

  for (let i = 0; i < n; i++) {
    // Pop indices with price <= current price
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }

    // If stack empty, all previous prices are smaller or equal
    span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];

    // Push current index
    stack.push(i);
  }

  return span;
}

// Example usage / simple tests
(function test() {
  const prices1 = [100, 80, 60, 70, 60, 75, 85];
  console.log("Input: ", prices1);
  console.log("Stock Span: ", calculateStockSpan(prices1)); // [1,1,1,2,1,4,6]

  const prices2 = [10, 4, 5, 90, 120, 80];
  console.log("Input: ", prices2);
  console.log("Stock Span: ", calculateStockSpan(prices2)); // [1,1,2,4,5,1]
})();

module.exports = { calculateStockSpan };
