function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr2[i].length; j++) {
      tmp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmp);
  }

  // 또 다른 풀이 : 2차원 배열 동적할당하는 방법
  // const answer = [[]];
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr1[i].length; j++) {
  //     const sum = arr1[i][j] + arr2[i][j];
  //     if (answer[i] === undefined) answer[i] = [];
  //     answer[i][j] = sum;
  //   }
  // }

  // 또 다른 풀이 : map 이용
  // return arr1.map((num1, i) => {
  //   return num1.map((num2, j) => {
  //     return num2 + arr2[i][j];
  //   });
  // });

  return answer;
}
