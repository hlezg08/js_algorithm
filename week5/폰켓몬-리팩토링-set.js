function solution(nums) {
  let pocket = new Set(nums).size;
  const limit = nums.length / 2;

  if (pocket <= limit) return pocket;
  else return limit;
}
