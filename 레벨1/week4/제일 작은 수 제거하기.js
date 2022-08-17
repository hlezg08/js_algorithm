function solution(arr) {
  let answer = [];

  //가장 작은 수(최솟값) 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  //최솟값 Math.min 메소드로 푸는 방법
  //const min=Math.min(...arr);

  //최솟값 제거한 뒤 배열 반환
  //arr.splice(arr.indexOf(min),1)
  //return arr.length!==0?arr:[-1];

  //다른 방법
  //const answer=arr.filter(num=>{
  //     return min!==num
  // })

  //직접 제거하지 않고 새로운 배열에 최솟값을 제외한 값들을 넣는 방법
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) answer.push(arr[i]);
  }
  return answer.length !== 0 ? answer : [-1];
}
