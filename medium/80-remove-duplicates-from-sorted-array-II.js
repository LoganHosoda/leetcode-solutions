/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map = {};
    for (let i of nums) {
        map[i] ? map[i]++ : map[i] = 1
    } 
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] > 2) {
            nums.splice(i, 1);
            map[nums[i]]--;
            i--;
        }
    }
    return nums.length;
};

