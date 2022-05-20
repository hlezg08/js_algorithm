function solution(num) {
  var result = 0;

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
      result++;
    } else {
      num = num * 3 + 1;
      result++;
    }
    if (num === 1) break;
    if (result > 500) {
      result = -1;
      break;
    }
  }

  return result;
}
