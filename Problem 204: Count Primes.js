/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    if (n <= 2) return 0;

    // Create a boolean array "isPrime" and initialize all entries to true.
    // A value in isPrime[i] will finally be false if i is Not a prime, else true.
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let p = 2; p * p < n; p++) {
        if (isPrime[p] === true) {
            // Mark all multiples of p as not prime, starting from p * p
            for (let i = p * p; i < n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // Count how many numbers are still marked as prime
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
};

// Example usage:
// console.log(countPrimes(10)); // Output: 4 (Primes: 2, 3, 5, 7)
