const num = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
function solution(s) {
  let answer = "";
  let tmp = "";
  for (let i = 0; i < s.length; i++) {
    if (!Number.isInteger(Number(s[i]))) tmp += s[i];
    else answer += s[i];

    if (num[tmp] !== undefined) {
      answer += num[tmp];
      tmp = "";
    }
  }
  return Number(answer);
}
