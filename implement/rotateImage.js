/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 1. 행 기준으로 reverse
  //   [
  //     [7, 8, 9],
  //     [4, 5, 6],
  //     [1, 2, 3],
  //   ]
  // 2. 행렬 transpose(원소끼리 swap)
  //   [
  //     [7, 4, 1],
  //     [8, 5, 2],
  //     [9, 6, 3],
  //   ]

  const n = matrix.length;
  matrix = matrix.reverse();

  for (let i = 0; i < n; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
