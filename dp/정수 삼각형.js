function solution(dp) {
  const n = dp.length;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) dp[i][j] += dp[i - 1][0];
      else if (j === i) dp[i][j] += dp[i - 1][i - 1];
      else dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }
  return Math.max(...dp[n - 1]);
}
const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
solution(triangle);
