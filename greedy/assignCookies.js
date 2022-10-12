var findContentChildren = function (g, s) {
  let count = 0;
  for (let i = 0; i < g.length; i++) {
    // 1 <= g[i], s[j] <= 2^31 - 1 범위 때문에 차이 값 크게 설정
    let minDif = 9999999999;
    let idx = -1;
    let isPossible = false;
    for (let j = 0; j < s.length; j++) {
      if (s[j] >= g[i] && s[j] - g[i] < minDif) {
        minDif = s[j] - g[i];
        idx = j;
        isPossible = true;
      }
    }
    if (isPossible) {
      count++;
      s[idx] = 0;
    }
  }

  return count;
};
