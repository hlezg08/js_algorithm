function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    let i = command[0];
    let j = command[1];
    let k = command[2];

    //Array.sort()의 경우 숫자가 배열로 들어와도 숫자 크기 순이 아니라 유니코드 순서로 정렬
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }
  return answer;
}
