const fs = require('fs');
const readline = require('readline');

async function printTenthLine(filePath) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentLine = 0;

    for await (const line of rl) {
        currentLine++;
        if (currentLine === 10) {
            console.log(line);
            break; // Found the 10th line, we can stop reading
        }
    }

    // If the file has fewer than 10 lines, it outputs nothing naturally
}

// Usage:
// printTenthLine('file.txt');
