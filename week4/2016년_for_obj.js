const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  // 제출하고 나서 참고한 방법
  let days = 0;
  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1;

  // 다른 방법 : reduce 메소드 이용
  // const days = new Array(a).fill(1).reduce((acc, cur, i) => {
  //   const mn = cur + i;
  //   return (
  //     acc +
  //     (mn !== a
  //       ? //a월 이전의 월이면 통째로 일수를 더함
  //         month[mn]
  //       : b - 1)
  //   );
  // }, 0);

  return week[days % 7];
}
