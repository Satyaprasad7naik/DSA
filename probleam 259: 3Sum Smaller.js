/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (!nums || nums.length < 3) return 0;
    
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    let count = 0;
    let n = nums.length;
    
    // Step 2: Iterate through each element as the first of the triplet
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        
        // Step 3: Use two pointers to find valid pairs
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum < target) {
                // If the sum is less than target, then all elements from 
                // 'left' to 'right - 1' will also form a valid sum with nums[i]
                count += (right - left);
                left++;
            } else {
                // If sum is too large, move the right pointer inward
                right--;
            }
        }
    }
    
    return count;
};
