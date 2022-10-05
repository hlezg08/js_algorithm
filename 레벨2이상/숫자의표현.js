function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    let tempTotal = 0;
    let j = i;
    while (tempTotal <= n) {
      tempTotal += j;
      j++;
      if (tempTotal === n) {
        cnt++;
        break;
      }
    }
  }
  return cnt;
}
