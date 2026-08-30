/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map(); // Stores value -> index mapping

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement already exists in our hash map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Otherwise, store the current number and its index
        map.set(nums[i], i);
    }
    
    return [];
}
