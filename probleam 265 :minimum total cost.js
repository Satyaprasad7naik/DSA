/**
 * @param {number[][]} costs
 * @return {number}
 */
function minCostII(costs) {
  if (!costs || costs.length === 0 || costs[0].length === 0) return 0;

  const n = costs.length;
  const k = costs[0].length;

  let prevMin1 = 0;
  let prevMin2 = 0;
  let prevMin1Color = -1;

  for (let i = 0; i < n; i++) {
    let currMin1 = Infinity;
    let currMin2 = Infinity;
    let currMin1Color = -1;

    for (let j = 0; j < k; j++) {
      const prevBest = j === prevMin1Color ? prevMin2 : prevMin1;
      const totalCost = costs[i][j] + prevBest;

      if (totalCost < currMin1) {
        currMin2 = currMin1;
        currMin1 = totalCost;
        currMin1Color = j;
      } else if (totalCost < currMin2) {
        currMin2 = totalCost;
      }
    }

    prevMin1 = currMin1;
    prevMin2 = currMin2;
    prevMin1Color = currMin1Color;
  }

  return prevMin1;
}

// Test cases
console.log(minCostII([[1, 5, 3], [2, 9, 4]])); // 5
console.log(minCostII([[1, 3], [2, 4]]));       // 5
