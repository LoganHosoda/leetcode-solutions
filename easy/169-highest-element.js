/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj={}
    nums.forEach(n => obj[n] === undefined ? obj[n] = 1 : obj[n]++)
    const highest = Object.entries(obj).sort(([, a], [, b]) => b - a)[0]
    return Number(highest[0])
};

