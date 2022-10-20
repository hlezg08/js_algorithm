// 여벌 옷이 있는 학생 입장에서 나눠 줄 학생 선택하기
function solution(n, lost, reserve) {
  let arr = new Array(n + 1).fill(1);
  arr[0] = '';

  for (let l of lost) arr[l] -= 1;
  for (let r of reserve) arr[r] += 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 1 && arr[i - 1] === 0) {
      arr[i]--;
      arr[i - 1]++;
    } else if (arr[i] > 1 && arr[i + 1] === 0) {
      arr[i]--;
      arr[i + 1]++;
    }
  }
  return arr.filter(num => num > 0).length;
}
