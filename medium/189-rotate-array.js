/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    let temp = []
    for (let i = 0; i < k; i++) {
        temp.push(nums.pop());
    }
    nums.reverse();
    for (n of temp) nums.push(n);
    nums.reverse();
};

