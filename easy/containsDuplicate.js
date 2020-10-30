/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     if(!nums || nums.length < 2) return false;
//     const map = {};
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] in map) return true;
//         else map[nums[i]] = i;
//     }
//     return false;
// };

// var containsDuplicate = function(nums) {
//     if(new Set(nums).size < nums.length) return true;
//     else return false;
// };

var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
};

containsDuplicate([1,2,3,1]); // true
containsDuplicate([1,2,3,4]); // false
containsDuplicate([1,1,1,3,3,4,3,2,4,2]); // true