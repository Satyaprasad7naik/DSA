// Bubble Sort - Simple Sorting Algorithm
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(arr) {
    const n = arr.length;
    
    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for comparing adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the current element is greater than next element
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));

// Test cases
const testArray1 = [5, 2, 8, 1, 9];
console.log("Test 1:", bubbleSort([...testArray1]));

const testArray2 = [3];
console.log("Test 2 (single element):", bubbleSort([...testArray2]));

const testArray3 = [];
console.log("Test 3 (empty array):", bubbleSort([...testArray3]));
