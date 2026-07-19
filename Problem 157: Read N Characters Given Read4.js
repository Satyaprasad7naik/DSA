/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let copiedChars = 0;
        let readChars = 4;
        
        // Temporary buffer to hold output from read4
        let buf4 = new Array(4);
        
        // Keep reading as long as we haven't reached 'n' and we haven't hit the end of the file
        while (copiedChars < n && readChars === 4) {
            readChars = read4(buf4);
            
            // Transfer from our temporary buffer to the main destination buffer
            for (let i = 0; i < readChars; i++) {
                if (copiedChars === n) {
                    return copiedChars;
                }
                buf[copiedChars] = buf4[i];
                copiedChars++;
            }
        }
        
        return copiedChars;
    };
};
