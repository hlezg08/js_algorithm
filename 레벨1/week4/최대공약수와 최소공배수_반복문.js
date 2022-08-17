function solution(n, m) {
  // n,m 크기 비교
  const biggest = Math.max(n, m); //const biggest=n>m?n:m;

  // 최대공약수 반복문
  let max = 0;
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  // 최소공배수 반복문
  let min = 0;
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}
