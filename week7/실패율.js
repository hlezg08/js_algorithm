// 테스트 케이스 1,6,7,9,13,23,24,25 실패
// 테스트 케이스 5, [3,3,3,3] 	[3,1,2,4,5] 추가해서 재도전 -> NaN 예외처리해서 통과
function solution(N, stages) {
  let result = [];
  let tmp = [];
  for (let i = 1; i <= N; i++) {
    const filtered = stages.filter((el) => el >= i);
    const failed = stages.filter((el) => el === i);
    const p = failed.length / filtered.length; //실패율
    // 실패율이 0/0일 경우 NaN으로 반환됨->예외처리
    tmp.push(Number.isNaN(p) ? 0 : p);
  }
  for (let i = 1; i <= N; i++) {
    const max = Math.max(...tmp);
    result.push(tmp.indexOf(max) + 1);
    tmp[tmp.indexOf(max)] = -1;
  }

  return result;
}
