var rotate = function(nums, k) {
    k = k % nums.length; // Handle cases where k is greater than array length
    
    // Helper function to reverse a portion of the array in-place
    const reverse = (start, end) => {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    };
    
    // 1. Reverse the entire array
    reverse(0, nums.length - 1);
    // 2. Reverse the first k elements
    reverse(0, k - 1);
    // 3. Reverse the remaining n - k elements
    reverse(k, nums.length - 1);
};
