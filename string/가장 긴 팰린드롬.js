function isPalin(str) {
  const com = str.split('').reverse().join('');
  return str === com ? true : false;
}
function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isPalin(s.slice(i, j + 1))) {
        answer.push(s.slice(i, j + 1).length);
      }
    }
  }
  return Math.max(...answer);
}
