/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        // Check if the number exists in the map and the index difference is <= k
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        // Store or update the latest index of the number
        map.set(nums[i], i);
    }
    
    return false;
};
