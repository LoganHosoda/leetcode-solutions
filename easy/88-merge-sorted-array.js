/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (nums1, m, nums2, n) => {
  nums2.forEach((num, idx) => nums1[m + idx] = num);
  return nums1.sort((a, b) => a - b);
};

