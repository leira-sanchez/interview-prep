// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    // same as level but if level is even return one order, return a versed order if it's odd
    const traversal = [];
    if (!root) return traversal;
    let level = 0;
    const dequeue = [root];
    
    while (dequeue.length) {
        traversal.push([]);
        const levelLength = dequeue.length;
        for (let i = 0; i < levelLength; i++) {
            const { val, left, right } = dequeue.shift();
            if (level % 2 === 0) {
                traversal[level].push(val);
            }  else {
                traversal[level].unshift(val);
            }
            if (left) dequeue.push(left);
            if (right) dequeue.push(right);
        }
        level++;
    }
    return traversal;
};