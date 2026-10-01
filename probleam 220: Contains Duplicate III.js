/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    if (valueDiff < 0) return false;
    
    const bucketSize = valueDiff + 1n;
    const bucket = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = BigInt(nums[i]);
        const bucketId = getBucketId(num, bucketSize);
        
        // Check if bucket itself already has a number
        if (bucket.has(bucketId)) {
            return true;
        }
        
        // Check adjacent bucket for potential values within valueDiff
        if (bucket.has(bucketId - 1n) && num - bucket.get(bucketId - 1n) <= valueDiff) {
            return true;
        }
        
        if (bucket.has(bucketId + 1n) && bucket.get(bucketId + 1n) - num <= valueDiff) {
            return true;
        }
        
        // Place current number in its bucket
        bucket.set(bucketId, num);
        
        // Maintain the sliding window size of indexDiff
        if (i >= indexDiff) {
            const oldBucketId = getBucketId(BigInt(nums[i - indexDiff]), bucketSize);
            bucket.delete(oldBucketId);
        }
    }
    
    return false;
};

function getBucketId(n, bucketSize) {
    return n < 0 ? (n + 1n) / bucketSize - 1n : n / bucketSize;
}
