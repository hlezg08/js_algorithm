/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let answer = [];
  if (nums1.length > nums2.length) {
    let temp = [...nums1];
    nums1 = [...nums2];
    nums2 = [...temp];
  }

  for (let i = 0; i < nums2.length; i++) {
    let idx = nums1.indexOf(nums2[i]);
    if (idx !== -1) {
      answer.push(nums2[i]);
      nums1[idx] = -1;
    }
  }

  return answer;
};
