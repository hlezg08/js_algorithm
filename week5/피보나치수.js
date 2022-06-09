function solution(n) {
  var answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push((answer[i - 2] % 1234567) + (answer[i - 1] % 1234567));
  }
  return answer[n] % 1234567;

  // 배열 push 대신 더해서 대입, answer[i] 대입할때 나눠주기
  // const answer = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567;
  // }
  // return answer[n];

  // 실패한 방법 : 재귀호출-O(2^N)은 반복문-O(N)보다 시간복잡도 커서 메모리 많이 차지->시간초과
  // let answer = 0;
  // if (n === 0) return 0;
  // else if (n === 1) return 1;
  // else return (solution(n - 1) % 1234567) + (solution(n - 2) % 1234567);
}
