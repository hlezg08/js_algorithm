function solution(people, limit) {
  let answer = [];
  people = people.sort((a, b) => a - b);

  while (people.length > 0) {
    const front = people.shift();

    if (people.length === 0) {
      answer.push([front]);
      break;
    }

    let last = people.pop();

    // 가장 가벼운 사람+가장 무거운 사람<=limit일때
    // 구명보트 한 쌍 만들어서 answer에 push
    if (front + last <= limit) answer.push([front, last]);
    // 가장 가벼운 사람+가장 무거운 사람>limit 이면
    // 무거운 사람만 answer에 push
    else {
      answer.push([last]);
      people.unshift(front);
    }
  }
  return answer.length;
}
