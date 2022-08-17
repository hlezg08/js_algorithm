function solution(arr) {
  let answer = [];

  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {}

  return answer;
}
