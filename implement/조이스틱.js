// 12,13,15,18~22,24,25,27 실패
function solution(name) {
  const aCode = 'A'.charCodeAt();
  const zCode = 'Z'.charCodeAt();
  const arr = [0];
  let answer = 0;

  // arr 부분 이해 못함
  for (let i = 0; i < name.length; i++) {
    const letterCode = name[i].charCodeAt();

    // 문자가 A인 경우, 아닌 경우
    if (name[i] === 'A') {
      if (i === 0) arr.push(findConsecutiveA(name, i) - 1);
      else if (name[i - 1] !== 'A')
        arr.push(findConsecutiveA(name, i) - (i - 1));
      answer++;
    } else answer += Math.min(letterCode - aCode, zCode - letterCode + 1) + 1;
  }

  return answer - Math.max(...arr) - 1;
}

// idx 시점으로부터 A가 연속으로 나오는 횟수 구하기
const findConsecutiveA = (name, idx) => {
  let cnt = 0;
  let cur = -1;

  for (let i = idx; i < name.length; i++) {
    if (name[i] === 'A') {
      cur = i;
      break;
    }
  }

  for (let i = cur; i < name.length; i++) {
    if (name[i] === 'A') cnt++;
    else break;
  }

  return cnt;
};
