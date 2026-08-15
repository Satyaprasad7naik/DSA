/**
 * Problem 180: Consecutive Numbers
 * Finds all numbers that appear at least three times consecutively.
 * 
 * @param {Object[]} logs - Array of objects e.g., [{id: 1, num: 1}, {id: 2, num: 1}, ...]
 * @return {number[]}
 */
function findConsecutiveNumbers(logs) {
    if (logs.length < 3) return [];
    
    const result = new Set();
    
    for (let i = 0; i < logs.length - 2; i++) {
        const first = logs[i].num;
        const second = logs[i + 1].num;
        const third = logs[i + 2].num;
        
        // Check if three consecutive rows have the same number
        if (first === second && second === third) {
            result.add(first);
        }
    }
    
    return Array.from(result);
}

// --- Test Cases ---
const logs = [
    { id: 1, num: 1 },
    { id: 2, num: 1 },
    { id: 3, num: 1 },
    { id: 4, num: 2 },
    { id: 5, num: 1 },
    { id: 6, num: 2 },
    { id: 7, num: 2 }
];

console.log(findConsecutiveNumbers(logs)); // Output: [1]
