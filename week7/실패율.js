// 테스트 케이스 1,6,7,9,13,23,24,25 실패
function solution(N, stages) {
  let result = [];
  let tmp = [];
  for (let i = 1; i <= N; i++) {
    const filtered = stages.filter((el) => el >= i);
    const failed = stages.filter((el) => el === i);
    tmp.push(failed.length / filtered.length); // 실패율
  }
  for (let i = 1; i <= N; i++) {
    const max = Math.max(...tmp);
    result.push(tmp.indexOf(max) + 1);
    tmp[tmp.indexOf(max)] = -1;
  }

  return result;
}
