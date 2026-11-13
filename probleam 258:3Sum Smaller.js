/**
 * Problem 259: 3Sum Smaller
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    if (nums.length < 3) return 0;
    
    // Sort the array to use the two-pointer technique
    nums.sort((a, b) => a - b);
    let count = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum < target) {
                // If nums[i] + nums[left] + nums[right] < target,
                // then because the array is sorted, any element between 
                // left and right will also satisfy this condition with nums[i] and nums[left].
                count += (right - left);
                left++;
            } else {
                right--;
            }
        }
    }
    
    return count;
};

// Test cases
console.log(threeSumSmaller([-2, 1, 1, 4], 3)); // Output: 2 (Explanation: [-2, 1, 1] and [-2, 1, 4])
console.log(threeSumSmaller([], 0));             // Output: 0
console.log(threeSumSmaller([0], 0));            // Output: 0
