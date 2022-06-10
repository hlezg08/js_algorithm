function solution(participant, completion) {
  let hash = {};
  let answer = "";

  // object 타입으로 hash(해시테이블) 초기화
  for (let el of participant) hash[el] = 0;

  // participant 요소가 hash의 key일때 value 하나씩 증가
  for (let el of participant) if (hash[el] !== undefined) hash[el]++;

  // completion 배열을 돌면서 요소가 hash의 key에 해당되면 value 하나씩 감소
  for (let el of completion) if (hash[el] !== undefined) hash[el]--;

  // value가 0이 아닌 key값을 반환
  for (let key in hash) {
    if (hash[key] !== 0) answer = key;
  }

  return answer;
}
