function solution(name) {
  const aCode = 'A'.charCodeAt();
  const zCode = 'Z'.charCodeAt();
  let count = 0;

  for (let letter of name) {
    const letterCode = letter.charCodeAt();
    count += Math.min(letterCode - aCode, zCode - letterCode + 1);
    count += 1;
  }

  return count - 1;
}
