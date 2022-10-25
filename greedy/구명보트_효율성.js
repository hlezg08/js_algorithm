function solution(people, limit) {
  let answer = [];
  people = people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    const front = people[start];
    let last = people[end];

    if (front + last <= limit) {
      answer.push([front, last]);
      start++;
      end--;
    } else {
      answer.push([last]);
      end--;
    }
  }
  return answer.length;
}
