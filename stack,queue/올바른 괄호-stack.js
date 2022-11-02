function solution(s) {
  const stack = [];
  let arr = s.split('');

  for (let el of arr) {
    if (el === '(') stack.push(1);
    else {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}
