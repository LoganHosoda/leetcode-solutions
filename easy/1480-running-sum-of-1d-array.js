/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = nums => nums.reduce((acc, n, idx) => {
    idx === 0 ? acc.push(n) : acc.push(n + acc[idx-1])
    return acc;
}, [])

