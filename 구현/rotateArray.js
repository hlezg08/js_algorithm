/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let i = 0;
  while (i < k) {
    let num = nums.splice(nums.length - 1, 1);
    nums.unshift(num);
    i++;
  }
};
