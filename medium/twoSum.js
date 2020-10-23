/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//brute force
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target && i !== j) {
//                 return [i, j]
//             }
//         }
//     }
// };

// use memoization
function twoSum(nums, target) {
    const memo = {}
    for ( let i = 0; i < nums.length; i++) {
        const m = (target - nums[i])  // 9 -2 = 7      /* 9 - 7 = 2
        if (memo.hasOwnProperty(m)) return [i, memo[m]]
        else memo[nums[i]] = i
    }
    
}

twoSum([2,7,11,15], 9); // [0,1]
twoSum([3,2,4], 6); // [1,2]
twoSum([3,3], 6); // [0,1]