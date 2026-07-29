/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    // If the numerator is 0, the result is simply "0"
    if (numerator === 0) return "0";

    let result = "";

    // Determine the sign of the result
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }

    // Convert both to absolute values to handle division properly
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    // Calculate the integer part
    result += Math.floor(num / den);

    // Calculate the initial remainder
    let remainder = num % den;
    
    // If there is no remainder, we just return the integer part
    if (remainder === 0) {
        return result;
    }

    // If there is a remainder, add the decimal point
    result += ".";
    
    // Use a map to store the remainder and the index where it was first seen in the result string
    let map = new Map();

    // Calculate the fractional part
    while (remainder !== 0) {
        // If we've seen this remainder before, we've found a repeating fractional part
        if (map.has(remainder)) {
            let index = map.get(remainder);
            result = result.slice(0, index) + "(" + result.slice(index) + ")";
            break;
        }

        // Store the remainder and its position
        map.set(remainder, result.length);
        
        // Multiply remainder by 10 to get the next decimal digit
        remainder *= 10;
        result += Math.floor(remainder / den);
        remainder %= den;
    }

    return result;
};
