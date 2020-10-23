// https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return [];
    let queue = [root];
    let level = 0;

    while (queue.length) {
      let levelLength = queue.length;
      for(let i = 0; i < levelLength; i++) {
        const { val, left, right } = queue.shift();
        if(!left && !right) return level + 1;
        if(left) queue.push(left);
        if(right) queue.push(right);
      }
      level++;
    }
};

minDepth([3,9,20,null,null,15,7]); // 2