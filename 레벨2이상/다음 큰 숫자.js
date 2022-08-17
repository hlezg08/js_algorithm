function solution(n) {
  const binary = n.toString(2);
  let n_count = 0;
  for (let i = 0; i < binary.length; i++) if (binary[i] === "1") n_count++;

  let i = n + 1;
  let answer = 0;

  while (1) {
    let i_count = 0;
    const bin = i.toString(2);
    for (let i = 0; i < bin.length; i++) if (bin[i] === "1") i_count++;
    if (n_count === i_count) {
      answer = i;
      break;
    }
    i++;
  }
  return answer;
}
