/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let answer = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (answer.includes(nums[i])) {
      answer.splice(answer.indexOf(nums[i]), 1);
    } else answer.push(nums[i]);
  }
  return answer;
};
