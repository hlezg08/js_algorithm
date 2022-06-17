function solution(s) {
  const str = s.split(" ");
  const new_s = [];
  for (let el of str) {
    new_s.push(el.toLowerCase());
  }

  const answer = [];
  for (let el of new_s) {
    if (isNaN(Number(el[0]))) {
      const capital = el[0].toUpperCase();
      el = el.substring(1, el.length);
      el = capital + el;
      answer.push(el);
    } else answer.push(el);
  }
  return answer.join(" ");
}
