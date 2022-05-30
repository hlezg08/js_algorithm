function solution(answers) {
  var cnt = [0, 0, 0];
  let answer = [];
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === arr1[i % 5]) cnt[0]++;
    if (answers[i] === arr2[i % 8]) cnt[1]++;
    if (answers[i] === arr3[i % 10]) cnt[2]++;
  }

  let max = cnt[0];
  for (let i = 0; i < 3; i++) {
    if (cnt[i] > max) max = cnt[i];
  }
  for (let i = 0; i < 3; i++) {
    if (cnt[i] === max) answer.push(i + 1);
  }
  return answer;
}
