/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump = 0, maxReach = 0; end = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (i === end) {
            jump++;
            end = maxReach;
            if (end >= nums.length - 1) break;
        }
    }
    return jump;
};

