/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;

    // Create an array initialized to false (meaning all numbers are potentially prime)
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    let count = 0;

    for (let p = 2; p * p < n; p++) {
        if (isPrime[p]) {
            // Mark all multiples of p starting from p^2 as not prime
            for (let i = p * p; i < n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    // Count how many true values remain
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
};
