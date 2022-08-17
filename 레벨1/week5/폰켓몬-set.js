function solution(nums) {
  // 처음 풀었던 방법
  let num = nums.length / 2;
  let set = new Set(nums);

  //set을 array로 바꾸고 num개 만큼 자르기
  let arr = Array.from(set).slice(0, num);
  return arr.length;

  // 다른 방법: Set && for문
  //   const pocket = new Set();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (pocket.size !== nums.length / 2) {
  //       pocket.add(nums[i]);
  //     }
  //   }
  //   return pocket.size;
}
