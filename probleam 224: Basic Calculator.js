/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative
    let num = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char >= '0' && char <= '9') {
            // Build multi-digit numbers
            num = num * 10 + (char - '0');
        } else if (char === '+') {
            result += sign * num;
            sign = 1;
            num = 0;
        } else if (char === '-') {
            result += sign * num;
            sign = -1;
            num = 0;
        } else if (char === '(') {
            // Push current result and sign onto the stack
            stack.push(result);
            stack.push(sign);
            // Reset for the inner expression
            result = 0;
            sign = 1;
            num = 0;
        } else if (char === ')') {
            // Finish evaluating the current block
            result += sign * num;
            num = 0;
            
            // Pop the sign evaluated before the parenthesis
            let prevSign = stack.pop();
            // Pop the result evaluated before the parenthesis
            let prevResult = stack.pop();
            
            result = prevResult + prevSign * result;
        }
    }

    // Add any remaining number
    result += sign * num;
    return result;
};
