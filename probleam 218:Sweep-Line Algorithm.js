/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function(buildings) {
    const events = [];
    
    // For each building [left, right, height], create two events:
    // 1. Start event: [left, -height] -> negative height helps sort taller buildings first at the same x
    // 2. End event: [right, height]
    for (const [left, right, height] of buildings) {
        events.push([left, -height]);
        events.push([right, height]);
    }
    
    // Sort events by x coordinate. 
    // If x coordinates are the same, sort by height property to process correct layers.
    events.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    
    const result = [];
    // Multiset / array simulation to track active heights 
    // (In production/interviews, a Max-Heap/Priority Queue is ideal)
    const heights = [0]; 
    let prevMax = 0;
    
    for (const [x, h] of events) {
        if (h < 0) {
            // Building starts, add its height (-h)
            heights.push(-h);
        } else {
            // Building ends, remove one instance of its height (h)
            const index = heights.indexOf(h);
            if (index > -1) {
                heights.splice(index, 1);
            }
        }
        
        // Find the current maximum height
        heights.sort((a, b) => b - a);
        const currentMax = heights[0];
        
        // If the max height changes, record a skyline key point
        if (currentMax !== prevMax) {
            result.push([x, currentMax]);
            prevMax = currentMax;
        }
    }
    
    return result;
};
