/**
 * Problem 255: Verify Preorder Sequence in Binary Search Tree (Medium)
 * 
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    let lowerBound = -Infinity;
    const stack = [];

    for (const num of preorder) {
        // Any node in the right subtree must be greater than its ancestor root
        if (num < lowerBound) {
            return false;
        }

        // Pop ancestors smaller than current number to find the parent root
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            lowerBound = stack.pop();
        }

        stack.push(num);
    }

    return true;
};

// --- Follow-up: O(1) Auxiliary Space Solution (In-place Stack) ---
var verifyPreorderConstantSpace = function(preorder) {
    let lowerBound = -Infinity;
    let stackIdx = -1; // Pointer acting as the top of the stack inside preorder[]

    for (const num of preorder) {
        if (num < lowerBound) {
            return false;
        }

        while (stackIdx >= 0 && num > preorder[stackIdx]) {
            lowerBound = preorder[stackIdx--];
        }

        preorder[++stackIdx] = num;
    }

    return true;
};

// --- Test Cases ---
console.log("Test 1 [5, 2, 1, 3, 6]:", verifyPreorder([5, 2, 1, 3, 6])); // Expected: true
console.log("Test 2 [5, 2, 6, 1, 3]:", verifyPreorder([5, 2, 6, 1, 3])); // Expected: false
console.log("Test 3 (O(1) Space) [5, 2, 1, 3, 6]:", verifyPreorderConstantSpace([5, 2, 1, 3, 6])); // Expected: true
