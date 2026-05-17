/**
 * Day 115: Cheapest Flights Within K Stops
 * Finds the cheapest price from src to dst with at most k stops.
 * * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, k) {
    // Initialize prices array with Infinity, and set src to 0
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    // A path with 'k' stops has 'k + 1' edges. 
    // We run the relaxation process k + 1 times.
    for (let i = 0; i <= k; i++) {
        // Create a copy of the prices array for the current iteration
        // to prevent chaining multiple flights in a single step.
        let tempPrices = [...prices];
        
        for (let [u, v, price] of flights) {
            // If the source node 'u' is reachable
            if (prices[u] === Infinity) continue;
            
            // If the cost to reach 'v' through 'u' is cheaper, update tempPrices
            if (prices[u] + price < tempPrices[v]) {
                tempPrices[v] = prices[u] + price;
            }
        }
        
        // Update the main prices array for the next iteration
        prices = tempPrices;
    }

    // If the destination is still Infinity, it means it's unreachable within k stops
    return prices[dst] === Infinity ? -1 : prices[dst];
}

// ==============================
// Test Cases
// ==============================

const n = 4;
const flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]];
const src = 0, dst = 3, k = 1;

console.log(`Cheapest price: ${findCheapestPrice(n, flights, src, dst, k)}`); 
// Expected Output: 700

const n2 = 3;
const flights2 = [[0,1,100],[1,2,100],[0,2,500]];
const src2 = 0, dst2 = 2, k2 = 0;

console.log(`Cheapest price: ${findCheapestPrice(n2, flights2, src2, dst2, k2)}`); 
// Expected Output: 500 (Route 0 -> 2 directly, since k=0 means no stops allowed)
