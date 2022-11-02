function solution(board, moves) {
  let new_board = [];
  let basket = [];
  let count = 0;

  // 배열 배치를 수정하고 0을 제거한 뒤 new_board에 담는다.
  for (let i = 0; i < board.length; i++) {
    new_board[i] = [];
    for (let j = board[i].length - 1; j >= 0; j--) {
      new_board[i].push(board[j][i]);
    }
    new_board[i] = new_board[i].filter((el) => el !== 0);
  }

  for (let move of moves) {
    // 크레인이 움직이면서 인형을 바구니에 담는다.
    if (new_board[move - 1].length !== 0) {
      const pop = new_board[move - 1].pop();
      basket.push(pop);

      // 방금 담은 인형 번호와 그 이전에 담았던 인형 번호가 일치하면 바구니에서 빼고 카운트 올리기
      if (basket[basket.length - 2] === pop) {
        basket.pop();
        basket.pop();
        count += 2;
      }
    }
  }
  return count;
}
