/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  let i = 0;

  while (true) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      count++;
    }
    i++;
    if (!nums.includes(0)) break;
  }
  for (let n = 0; n < count; n++) nums.push(0);
};
