// 테스트 10번: 런타임에러->시간초과
function solution(number, k) {
  number = number.split('').map(num => Number(num));
  let digit = number.length - k;
  let answer = '';
  let cur = 0;

  for (let i = digit; i >= 1; i--) {
    const arr = number.slice(cur, number.length - i + 1);
    let maxNum = arr[1];
    for (let num of arr) {
      if (num === 9) {
        maxNum = 9;
        break;
      }
      if (maxNum < num) maxNum = num;
    }

    for (let j = cur; j < number.length; j++) {
      if (number[j] === maxNum) {
        cur = j;
        break;
      }
    }

    number[cur] = -1;
    answer += String(maxNum);
  }
  return answer;
}
