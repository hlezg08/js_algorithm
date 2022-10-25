function solution(people, limit) {
  let answer = [];
  people = people.sort((a, b) => a - b);

  while (people.length > 0) {
    let pair = false;
    let front = people.shift();
    for (let i = people.length - 1; i >= 0; i--) {
      if (front + people[i] <= limit) {
        pair = true;
        answer.push([front, people[i]]);
        people.splice(i, 1);
        break;
      }
    }

    if (!pair) answer.push([front]);
  }
  return answer.length;
}
