const fs = require('fs');

function solve() {
    // Read file.txt synchronously (or use readline for large files)
    try {
        const data = fs.readFileSync('file.txt', 'utf8');
        const lines = data.split(/\r?\n/);
        
        // Regex matching either (xxx) xxx-xxxx or xxx-xxx-xxxx
        const regex = /^([0-9]{3}-|\([0-9]{3}\) )[0-9]{3}-[0-9]{4}$/;

        for (let line of lines) {
            if (regex.test(line)) {
                console.log(line);
            }
        }
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

solve();
