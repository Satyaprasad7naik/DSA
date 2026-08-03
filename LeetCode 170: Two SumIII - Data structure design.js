class TwoSum {
    constructor() {
        // Map to store the numbers and their frequencies
        this.numCounts = new Map();
    }

    /** 
     * @param {number} number
     * @return {void}
     */
    add(number) {
        this.numCounts.set(number, (this.numCounts.get(number) || 0) + 1);
    }

    /** 
     * @param {number} value
     * @return {boolean}
     */
    find(value) {
        for (let [num, count] of this.numCounts.entries()) {
            let complement = value - num;
            
            // If the complement is the same as the number, we need at least two of them
            if (complement === num) {
                if (count > 1) {
                    return true;
                }
            } 
            // Otherwise, just check if the complement exists in our map
            else if (this.numCounts.has(complement)) {
                return true;
            }
        }
        return false;
    }
}

// Example Usage:
// const twoSum = new TwoSum();
// twoSum.add(1);
// twoSum.add(3);
// twoSum.add(5);
// console.log(twoSum.find(4)); // true (1 + 3)
// console.log(twoSum.find(7)); // false
