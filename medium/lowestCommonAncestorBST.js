// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // if both p and q are in the left subtree, keep traversing it until you find lca
    // same about right subtree
    // otherwise, if they're split between the two, return the root as it's the lca
    if(root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.left, p, q);
    if(root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.right, p, q);
    return root;
};

// [3,5,1,6,2,0,8,null,null,7,4]
// 5
// 1
// [3,5,1,6,2,0,8,null,null,7,4]
// 5
// 4

// doesn't pass all the test cases