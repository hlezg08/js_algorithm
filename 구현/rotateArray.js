/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length <= 1) return nums;
  if (k >= nums.length) k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
  if (start < 0 || end > arr.length || start >= end) return;
  let startIdx = start;
  let endIdx = end;
  while (startIdx < endIdx) {
    [arr[startIdx], arr[endIdx]] = [arr[endIdx], arr[startIdx]];
    startIdx += 1;
    endIdx -= 1;
  }
}
