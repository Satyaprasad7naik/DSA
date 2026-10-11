/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1 = 0, count2 = 0;
    let candidate1 = null, candidate2 = null;

    // Step 1: Find at most two potential candidates
    for (let num of nums) {
        if (candidate1 !== null && candidate1 === num) {
            count1++;
        } else if (candidate2 !== null && candidate2 === num) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1++;
        } else if (count2 === 0) {
            candidate2 = num;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Verify the candidates
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    let result = [];
    let n = nums.length;
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result;
};
