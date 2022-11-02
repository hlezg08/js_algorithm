function solution(n, a, b) {
  let cnt = 0;
  while (a > 0 && b > 0) {
    if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
      cnt++;
      return cnt;
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt++;
  }
}
