const fs = require('fs');

// Read the file and split into lines, filtering out empty lines
const lines = fs.readFileSync('file.txt', 'utf8').split('\n').filter(Boolean);
const rows = lines.map(line => line.trim().split(/\s+/));

const maxCols = Math.max(...rows.map(row => row.length));

for (let col = 0; col < maxCols; col++) {
    let transposed = [];
    for (let row of rows) {
        if (col < row.length) {
            transposed.push(row[col]);
        }
    }
    console.log(transposed.join(' '));
}
