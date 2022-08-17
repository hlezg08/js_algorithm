function solution(n, lost, reserve) {
  // lost, reserve 배열 정렬 안해도 통과

  // 잃어버린 경우와 여벌이 있는 경우 체육복 수 정리
  let students = new Array(n + 1).fill(1);
  for (let i = 1; i < students.length; i++) {
    if (lost.includes(i)) students[i]--;
    if (reserve.includes(i)) students[i]++;
  }

  // students 배열을 돌면서 체육복이 0개일 때
  // i-1번째 학생과 i+1번째 학생 체육복이 1개보다 많으면 나눠주기
  for (let i = 1; i < students.length; i++) {
    if (students[i] === 0 && students[i - 1] > 1) {
      students[i]++;
      students[i - 1]--;
    } else if (students[i] === 0 && students[i + 1] > 1) {
      students[i]++;
      students[i + 1]--;
    }
  }

  students = students.slice(1);
  students = students.filter((el) => el > 0);
  return students.length;
}
