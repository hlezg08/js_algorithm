function solution(participant, completion) {
  let hash = {};

  // object 타입으로 hash(해시테이블) 초기화
  for (let el of participant) hash[el] = 0;

  // participant 요소가 hash의 key일때 value 하나씩 증가
  for (let el of participant) if (hash[el] !== undefined) hash[el]++;

  // completion 배열을 돌면서 요소가 hash의 key에 해당되면 value 하나씩 감소
  for (let el of completion) if (hash[el] !== undefined) hash[el]--;

  // value가 0이 아닌 key값을 반환
  for (let key in hash) {
    if (hash[key] !== 0) return key;
  }

  // const answer = {};

  // // 1. 참가한 선수 이름과 수를 정리
  // for (let i = 0; i < participant.length; i++) {
  //   answer[participant[i]] === undefined
  //     ? (answer[participant[i]] = 1)
  //     : answer[participant[i]]++;
  // }

  // // 2. 참가자 명단에서 완주한 사람의 이름을 제거
  // for (let i = 0; i < completion.length; i++) {
  //   answer[completion[i]]--;
  // }

  // // 3. 완주하지 못한 선수 찾기
  // for (let key in answer) {
  //   if (answer[key] !== 0) return key;
  // }
}
