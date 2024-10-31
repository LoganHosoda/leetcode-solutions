/**
 * @param {number[]} nums
 * @return {boolean}
 */

 function canJump(nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
        if (max >= nums.length - 1) return true;
    }
    return false;
 }

// var canJump = function(nums) {
//     if (nums.length === 1) return true;

//     for (let i = 0; i < nums.length; i++) {
//         // loop backwards to see if jump can be made
//         if (nums[i] === 0) {
//             const checkJump = loopBack(nums, i);
//             if (checkJump[0]) i = checkJump[1];
//             else return false
//         }
//         // check if current index reaches the end, or is 0
//         if ((i + 1) + nums[i] >= nums.length) {
//             console.log(`nums[i]: ${nums[i]}, i: ${i}, nums.length: ${nums.length}`)
//             return true;
//         } else if (nums[i] === 0) {
//             const checkJump = loopBack(nums, i);
//             if (checkJump[0]) i = checkJump[1];
//             else return false
//         }

//         console.log(`nums[i]: ${nums[i]}, i: ${i}`)
//     }
//     return true;
// };

// function loopBack(nums, i) {
//     let foundJump = false;
//     for (let j = i - 1; j >= 0; j--) {
//         if (j + nums[j] > i) {
//             i = j + nums[j];
//             foundJump = true;
//             return [foundJump, i]
//         }
//     }
//     if (!foundJump) {
//         return [foundJump, i];
//     }
// }

// Input: array of nums, positive only, no floats
// Output: true / false
// Goal: check if you can jump over zeros to reach the end
// Brainstorm: check if jump = arr.length
// - If it does not, store the max jump, jump the minimum
// - If zero is reach, check if previous index can make the jump, repeat
// - If no previous index can make the jump, then return false

