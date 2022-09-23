// 인접한 요소의 크기를 비교하는 방식
// 한 단계 끝날 때마다 가장 큰 값을 맨 뒤로 보냄
// 단계를 거칠수록 정렬 개수가 하나씩 감소

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    console.log(`pass ${i}: ${arr}`);
  }
  return arr;
}

console.log(bubbleSort([4, 3, 5, 1, 2]));
