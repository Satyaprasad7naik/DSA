/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length;
    // A line requires at least 2 points. If 2 or fewer points exist, they are all on the same line.
    if (n <= 2) return n;
    
    let maxCount = 1;
    
    for (let i = 0; i < n; i++) {
        // Map to store the frequency of each slope from the current point 'i'
        const slopes = new Map();
        
        for (let j = i + 1; j < n; j++) {
            let slope;
            
            // Handle the vertical line case to avoid division by zero
            if (points[i][0] === points[j][0]) {
                slope = Infinity;
            } else {
                slope = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
            }
            
            // If the slope is seen for the first time from point 'i', it means 2 points are on it (i and j).
            // Otherwise, we increment the existing count.
            slopes.set(slope, (slopes.get(slope) || 1) + 1);
            
            // Update the global maximum
            maxCount = Math.max(maxCount, slopes.get(slope));
        }
    }
    
    return maxCount;
};
