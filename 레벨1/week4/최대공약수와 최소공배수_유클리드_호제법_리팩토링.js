function solution(n, m) {
  // 유클리드 호제법
  // a>b, a를 b로 나눴을 때
  // (나머지 값이 0이 아니면) a에 b를 할당하고 b에는 a%b를 할당한다.
  // 0이 될 때까지 반복
  // 나머지 값이 0이 되면, 작은 수가 최대공약수가 됨
  let a = Math.max(n, m);
  let b = Math.min(n, m);
  let r = 0;

  while (a % b > 0) {
    r = a % b;
    a = b;
    b = r;
  }

  // 최소공배수 구하기 : 두 수를 곱한 값/최대공약수

  return [b, (n * m) / b];
}
