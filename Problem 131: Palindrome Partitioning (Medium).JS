/**
 * Problem 131: Palindrome Partitioning
 * * Time Complexity: O(N * 2^N) where N is the length of string s. 
 * In the worst case (e.g., all identical characters like "aaaa"), there are 2^(N-1) possible partitions.
 * Space Complexity: O(N) for the recursion stack and current partition array.
 */

function partition(s) {
    const result = [];
    const currentPartition = [];

    // Helper function to check if a substring is a palindrome
    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    // Backtracking function
    const backtrack = (start) => {
        // Base case: If we've reached the end of the string, add a copy of the current partition to the result
        if (start === s.length) {
            result.push([...currentPartition]);
            return;
        }

        // Explore all possible substrings starting from the 'start' index
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                // If the current substring is a palindrome, add it to our current partition
                currentPartition.push(s.substring(start, end + 1));
                
                // Move to the next starting index
                backtrack(end + 1);
                
                // Backtrack: remove the last added substring to explore other partitions
                currentPartition.pop();
            }
        }
    };

    // Start backtracking from the 0th index
    backtrack(0);
    return result;
}

// --- Test Cases ---
console.log("Input: 'aab' | Output:", partition("aab")); 
// Expected: [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]

console.log("Input: 'a' | Output:", partition("a"));   
// Expected: [ [ 'a' ] ]
