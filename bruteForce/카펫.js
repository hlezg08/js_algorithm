function solution(brown, yellow) {
  let x = 3;
  let y = 3;
  let br = 2 * x + 2 * (y - 2); // 초깃값: 8
  let ye = (x - 2) * (y - 2); // 초깃값: 1

  while (br <= brown && ye <= yellow) {
    if (br < brown) x++;
    else if (br === brown && ye < yellow) {
      y++;
      x = y;
    } else if (br === brown && ye === yellow) return [x, y];

    br = 2 * x + 2 * (y - 2);
    ye = (x - 2) * (y - 2);
  }
}
