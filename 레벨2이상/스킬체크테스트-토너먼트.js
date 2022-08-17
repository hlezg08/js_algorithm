// 테스트 케이스 1,25,26 실패
function solution(n, a, b) {
  let cnt = 0;
  while (a > 0 && b > 0) {
    // if문을 제일 윗 순서로 이동하니 성공
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
      cnt++;
      return cnt;
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt++;
    // if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
    //   cnt++;
    //   return cnt;
    // }
  }
}
