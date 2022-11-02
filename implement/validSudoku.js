/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let visited = [];
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (visited.includes(board[i][j])) return false;
      else visited.push(board[i][j]);
    }
  }

  for (let j = 0; j < 9; j++) {
    let visited = [];
    for (let i = 0; i < 9; i++) {
      if (board[i][j] === '.') continue;
      if (visited.includes(board[i][j])) return false;
      else visited.push(board[i][j]);
    }
  }

  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      let visited = [];
      for (let k = 0; k < 9; k++) {
        let subValue = board[r + Math.floor(k / 3)][c + (k % 3)];
        if (Number.isNaN(Number(subValue))) continue;
        if (visited.includes(subValue)) return false;
        else visited.push(subValue);
      }
    }
  }
  return true;
};
