/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    
    // If the starting pixel already has the target color, no change is needed
    if (originalColor === color) return image;
    
    const dfs = (r, c) => {
        // Check boundaries and if the current pixel matches the original color
        if (
            r < 0 || r >= image.length || 
            c < 0 || c >= image[0].length || 
            image[r][c] !== originalColor
        ) {
            return;
        }
        
        // Update the color
        image[r][c] = color;
        
        // Recursively visit neighbors (Up, Down, Left, Right)
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };
    
    dfs(sr, sc);
    return image;
};

// Example Test Case:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
