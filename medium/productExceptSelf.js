// https://leetcode.com/problems/product-of-array-except-self/
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // this answer exceeds time for a very long input
var productExceptSelf = function(nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        let left;
        let right;
        if(i === 0) {
            left = 1;
        } else {
            left = nums.slice(0, i).reduce((acc, curr) => {
            return acc * curr;
            })
        }
        
        if(i === nums.length - 1) {
            right = 1;
        } else {
            right = nums.slice(i + 1).reduce((acc, curr) => {
                return acc * curr;
            })
        }
        output.push(left*right);
    }
    return output;
};

// input: [1,2,3,4]
// output: [24,12,8,6]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     let output = [];
//     let left = 1;
//     let right = 1;
    
//     for (let i = 0; i < nums.length; i++) {
//         output[i] = left;
//         left *= nums[i];
//     }
    
//     for (let j = nums.length - 1; j >= 0; j--) {
//         output[j] *= right;
//         right *= nums[j];
//     }
//     return output;
// };