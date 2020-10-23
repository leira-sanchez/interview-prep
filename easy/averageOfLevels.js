// https://leetcode.com/problems/average-of-levels-in-binary-tree/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root) return [];
    const output = [];
    let level = 0;
    let queue = [root];
    
    while(queue.length) {
        let levelLength = queue.length;
        output.push([]);
        let sum = 0;
        for(let i = 0; i < levelLength; i++) {
            const { val, left, right } = queue.shift();
            sum += val;
            if(left) queue.push(left);
            if(right) queue.push(right);
        }
        output[level].push(sum/levelLength);
        level++;
    }
    return output;
};

averageOfLevels([3,9,20,15,7]); //[3.00000,14.50000,11.00000]