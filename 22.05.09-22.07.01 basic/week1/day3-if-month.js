function days(month) {
  if (month === 2) {
    return 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}
// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일
