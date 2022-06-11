function solution(nums) {
  const pocket = [];
  for (let i = 0; i < nums.length; i++) {
    //pocket 배열 길이가 N/2보다 작고 pocket에 nums[i]가 들어있지 않을 때만 값을 넣는다.
    if (pocket.length !== nums.length / 2 && !pocket.includes(nums[i])) {
      pocket.push(nums[i]);
    }
  }
  return pocket.length;
}
