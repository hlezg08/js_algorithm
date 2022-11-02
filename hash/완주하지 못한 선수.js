// 10월 28일 복습
function solution(participant, completion) {
  let completed = {};
  for (let person of participant) {
    if (person in completed) completed[person]++;
    else completed[person] = 1;
  }

  for (let person of completion) if (person in completed) completed[person]--;

  for (let key in completed) {
    if (completed[key] === 1) return key;
  }
}
