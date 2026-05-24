Here is the next logical problem for your repository sequence, following Pascal's Triangle II. In the standard problem sets, question 120 is the **Triangle** minimum path sum problem.

### Problem 120: Triangle

**Description:**
Given a `triangle` array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.

**Example:**

```text
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11.

```

### JavaScript Implementation

This solution uses a bottom-up Dynamic Programming approach. By starting at the second-to-last row and working upwards, you can add the minimum of the two adjacent numbers from the row below to the current number. This modifies the triangle in-place to save space.

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
    // Start from the second to the bottom row and move upwards
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col < triangle[row].length; col++) {
            // Update the current element by adding the minimum of the two adjacent elements below it
            triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
        }
    }
    
    // The top element will now hold the overall minimum path sum
    return triangle[0][0];
};

// --- Test Cases ---
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // Expected Output: 11
console.log(minimumTotal([[-10]]));                       // Expected Output: -10

```

### Complexity

* **Time Complexity:** O(N), where N is the total number of elements in the triangle. We visit every element exactly once.
* **Space Complexity:** O(1), as we are modifying the input `triangle` array in-place. If modifying the input is not allowed, you would use an extra 1D array of size `n` (number of rows), making the space complexity O(n).
