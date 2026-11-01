/**
 * Problem 251: Flatten 2D Vector (Medium)
 * 
 * Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.
 */

/**
 * Approach: Two Pointers (Row & Column)
 * Instead of flattening the entire array upfront (which uses O(N) extra space),
 * we maintain two pointers: `row` (outer array index) and `col` (inner array index).
 * 
 * Time Complexity:
 * - Constructor: O(1)
 * - next() / hasNext(): Amortized O(1) per element
 * Space Complexity: O(1) auxiliary space (stores only a reference to the input 2D array)
 */
class Vector2D {
    /**
     * @param {number[][]} vec
     */
    constructor(vec) {
        this.vec = vec;
        this.row = 0;
        this.col = 0;
    }

    /**
     * Helper method to advance pointers to the next valid integer,
     * skipping over any empty inner arrays.
     */
    advanceToNext() {
        while (this.row < this.vec.length && this.col === this.vec[this.row].length) {
            this.row++;
            this.col = 0;
        }
    }

    /**
     * @return {number}
     */
    next() {
        // Ensure we are pointing at a valid element before retrieving it
        this.advanceToNext();
        const result = this.vec[this.row][this.col];
        this.col++;
        return result;
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        this.advanceToNext();
        return this.row < this.vec.length;
    }
}

// ------------------- Test Cases -------------------

// Example 1: Standard 2D vector
const iterator1 = new Vector2D([[1, 2], [3], [4]]);
console.log("Example 1:");
console.log(iterator1.next());    // Expected: 1
console.log(iterator1.next());    // Expected: 2
console.log(iterator1.next());    // Expected: 3
console.log(iterator1.hasNext()); // Expected: true
console.log(iterator1.hasNext()); // Expected: true
console.log(iterator1.next());    // Expected: 4
console.log(iterator1.hasNext()); // Expected: false

// Example 2: 2D vector with empty subarrays
const iterator2 = new Vector2D([[], [1, 2], [], [], [3], []]);
console.log("\nExample 2 (With empty inner arrays):");
const output2 = [];
while (iterator2.hasNext()) {
    output2.push(iterator2.next());
}
console.log("Flattened Output:", output2); // Expected: [1, 2, 3]
