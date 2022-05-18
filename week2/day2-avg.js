function solution(arr) {
  var answer = 0;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  answer = sum / arr.length;
  return answer;

  //Array.reduce 함수 활용하는 방법
  // const init = 0;
  // const sumWithInit = arr.reduce((p, c) => p + c, init);
  // return sumWithInit / arr.length;
}
