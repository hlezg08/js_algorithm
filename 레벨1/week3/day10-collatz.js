function solution(num) {
  //for문으로 풀기
  for (let i = 0; i < 500; i++) {
    if (num === 1) return cnt;
    cnt++;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
  }
  return -1;

  //처음에 푼 방법 : while문
  // var result = 0;
  // while (num > 1) {
  //   if (num % 2 === 0) {
  //     num /= 2;
  //     result++;
  //   } else {
  //     num = num * 3 + 1;
  //     result++;
  //   }
  //   if (num === 1) break;
  //   if (result > 500) {
  //     result = -1;
  //     break;
  //   }
  // }
  // return result;
}
