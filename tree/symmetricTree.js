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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function func(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;
    console.log("t1:", t1, t1.left, t1.right);
    console.log("t2:", t2, t2.left, t2.right);
    return func(t1.left, t2.right) && func(t1.right, t2.left);
  }

  return func(root, root);
};
