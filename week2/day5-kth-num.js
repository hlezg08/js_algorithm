function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    let tmp = [];
    for (let i = command[0] - 1; i < command[1]; i++) {
      tmp.push(array[i]);
    }
    tmp.sort((a, b) => a - b);
    answer.push(tmp[command[2] - 1]);
  }
  return answer;
}
