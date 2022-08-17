function solution(s) {
  let zero = 0;
  let count = 0;
  while (1) {
    let c = 0;
    s = s
      .split("")
      .filter((el) => {
        if (el === "1") {
          c++;
          return el;
        } else zero++;
      })
      .join("");
    s = Number(c).toString(2);
    count++;
    if (s === "1") break;
  }
  return [count, zero];
}
