const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
// 방법 1 : replaceAll을 대신해서 replace 반복하는 방법
function solution_replace(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}
// 방법 2 : split과 join 사용
function solution_split_join(s) {
  numbers.forEach((num, i) => {
    s = s.split(num).join(i);
  });
  return Number(s);
}

// 방법 3 : 정규표현식 replace
function solution_regexp(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, String(i));
  }

  return Number(s);
}
