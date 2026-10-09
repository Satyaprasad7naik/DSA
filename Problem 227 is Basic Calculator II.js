/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let currentNumber = 0;
    let operation = '+';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (!isNaN(char) && char !== ' ') {
            currentNumber = currentNumber * 10 + Number(char);
        }
        
        if ((isNaN(char) && char !== ' ') || i === s.length - 1) {
            if (operation === '+') {
                stack.push(currentNumber);
            } else if (operation === '-') {
                stack.push(-currentNumber);
            } else if (operation === '*') {
                let prev = stack.pop();
                stack.push(prev * currentNumber);
            } else if (operation === '/') {
                let prev = stack.pop();
                // Truncate decimals toward zero
                stack.push(Math.trunc(prev / currentNumber));
            }
            
            operation = char;
            currentNumber = 0;
        }
    }
    
    return stack.reduce((sum, num) => sum + num, 0);
};
