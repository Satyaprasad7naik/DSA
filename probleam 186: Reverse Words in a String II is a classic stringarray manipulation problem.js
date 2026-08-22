/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    // Helper function to reverse a portion of the array from index start to end
    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    let n = s.length;

    // Step 1: Reverse the entire character array
    reverse(s, 0, n - 1);

    // Step 2: Reverse each individual word back
    let start = 0;
    for (let end = 0; end <= n; end++) {
        // When we hit a space or the end of the array, we found a word boundary
        if (end === n || s[end] === ' ') {
            reverse(s, start, end - 1);
            start = end + 1;
        }
    }
};

// --- Example Test ---
let input = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"];
reverseWords(input);
console.log(input); 
// Output: ["b", "l", "u", "e", " ", "i", "s", " ", "s", "k", "y", " ", "t", "h", "e"]
