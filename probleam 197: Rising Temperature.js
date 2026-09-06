/**
 * Problem 197: Rising Temperature
 * Simulates finding IDs where the temperature is higher than the consecutive previous day.
 */
function risingTemperature(weatherTable) {
    // Sort records chronologically by date
    weatherTable.sort((a, b) => new Date(a.recordDate) - new Date(b.recordDate));
    
    const risingIds = [];

    for (let i = 1; i < weatherTable.length; i++) {
        const curr = weatherTable[i];
        const prev = weatherTable[i - 1];

        // Calculate difference in days between curr and prev date
        const diffTime = new Date(curr.recordDate) - new Date(prev.recordDate);
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        // Check if dates are consecutive and temperature increased
        if (diffDays === 1 && curr.temperature > prev.temperature) {
            risingIds.push(curr.id);
        }
    }

    return risingIds;
}

// --- Test Case ---
const weatherTable = [
    { id: 1, recordDate: '2015-01-01', temperature: 10 },
    { id: 2, recordDate: '2015-01-02', temperature: 25 },
    { id: 3, recordDate: '2015-01-03', temperature: 20 },
    { id: 4, recordDate: '2015-01-04', temperature: 30 }
];

console.log("Result IDs:", risingTemperature(weatherTable)); 
// Output: [2, 4]
