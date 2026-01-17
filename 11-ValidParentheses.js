// DSA Problem: Valid Parentheses
// Problem: Given a string containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid
// Time Complexity: O(n)
// Space Complexity: O(n)

function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in mapping) {
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));  // false
console.log(isValid("([)]"));  // false
console.log(isValid("{[]}"));  // true
