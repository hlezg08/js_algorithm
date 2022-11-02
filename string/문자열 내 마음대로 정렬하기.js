function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a.localeCompare(b);
  });

  //   간단하게 줄이면 (다른 풀이 참고)
  //   return strings.sort((a, b) =>
  //     a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]),
  //   );

  // localeCompare 없이 풀기
  // return strings.sort((a, b) => {
  //   if (a[n] > b[n]) return 1;
  //   else if (a[n] < b[n]) return -1;
  //   else return a < b ? -1 : 1;
  // });
}
