function solution(number, k) {
  number = number.split("").map((num) => Number(num));
  let digit = number.length - k;
  let answer = "";
  let cur = 0;

  for (let i = 0; i < digit; i++) {
    let maxNum = number[cur];
    let maxIdx = cur;
    for (let j = cur; j <= k + i; j++) {
      if (maxNum < number[j]) {
        maxNum = number[j];
        maxIdx = j;
      }
    }
    cur = maxIdx + 1;
    answer += maxNum;
  }
  return answer;
}
