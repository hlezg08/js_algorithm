function solution(n, words) {
  let mentioned = [];
  let answerIdx = 0;
  let passed = true;

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i][words[i].length - 1] !== words[i + 1][0]) {
      answerIdx = i + 1;
      passed = false;
      break;
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (!mentioned.includes(words[i])) mentioned.push(words[i]);
    else {
      answerIdx = i;
      passed = false;
      break;
    }
  }

  return passed ? [0, 0] : [(answerIdx % n) + 1, Math.floor(answerIdx / n) + 1];
}
