/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let result = [];
  let arr = [];
  let isUsed = [];

  function solution(k, nums) {
    if (k === nums.length) {
      let tmp = [];
      for (let i = 0; i < nums.length; i++) {
        tmp.push(arr[i]);
      }
      result.push(tmp);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!isUsed[nums[i]]) {
        arr[k] = nums[i];
        isUsed[nums[i]] = true;
        solution(k + 1, nums);
        isUsed[nums[i]] = false;
      }
    }
  }

  solution(0, nums);

  return result;
};
