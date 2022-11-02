function solution(n) {
  const arr = new Array(n + 1).fill(1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i <= Math.floor(n ** (1 / 2)); i++) {
    for (let j = i * 2; j <= n; j += i) {
      if (arr[j] !== 0) arr[j] = 0;
      else continue;
    }
  }

  return arr.filter(el => el !== 0).length;
}
