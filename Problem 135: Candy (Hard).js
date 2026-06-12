/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = function(ratings) {
    const n = ratings.length;
    // Rule 1: Every child gets at least 1 candy
    const candies = new Array(n).fill(1);

    // Pass 1: Left to Right
    // If the current child has a higher rating than the left neighbor, 
    // they get one more candy than the left neighbor.
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Pass 2: Right to Left
    // If the current child has a higher rating than the right neighbor, 
    // they get strictly more candies than the right neighbor.
    // We use Math.max to ensure we don't break the rules established in Pass 1.
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Sum up all the candies and return the total
    return candies.reduce((total, amount) => total + amount, 0);
};

// Example Test Cases:
console.log(candy([1, 0, 2])); // Output: 5
console.log(candy([1, 2, 2])); // Output: 4
