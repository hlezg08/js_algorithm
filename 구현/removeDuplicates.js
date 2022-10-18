/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let visited = [];

  for (let i = 0; i < nums.length; i++) {
    if (visited.includes(nums[i])) {
      nums.splice(i, 1);
      i--;
    } else visited.push(nums[i]);
  }
};
