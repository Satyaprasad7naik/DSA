/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let startingStation = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        
        // Track the gas in our tank for the current journey attempt
        currentGas += gas[i] - cost[i];

        // If current gas drops below 0, we can't reach the next station
        if (currentGas < 0) {
            // This means the current starting station (and any station before i) is invalid.
            // We set the next station as the new potential starting point.
            startingStation = i + 1;
            
            // Reset current gas for the new starting point
            currentGas = 0; 
        }
    }

    // If total gas is less than total cost, completing the circuit is impossible
    return totalGas < totalCost ? -1 : startingStation;
};

// --- Test Cases ---
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Expected Output: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Expected Output: -1
