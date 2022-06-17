function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = d.length;

  while (1) {
    let sum = d.reduce((acc, cur) => acc + cur, 0);
    if (sum > budget) d.pop();
    else if (sum === budget) return d.length;
    else {
      return d.length;
    }
  }
}
