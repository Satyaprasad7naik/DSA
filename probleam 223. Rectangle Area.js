/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    // Calculate the areas of both individual rectangles
    const area1 = (ax2 - ax1) * (ay2 - ay1);
    const area2 = (bx2 - bx1) * (by2 - by1);
    
    // Calculate the overlapping width and height
    const overlapWidth = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
    const overlapHeight = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
    
    // Calculate the overlap area
    const overlapArea = overlapWidth * overlapHeight;
    
    // Total area is the sum of both minus the overlapping area
    return area1 + area2 - overlapArea;
};
