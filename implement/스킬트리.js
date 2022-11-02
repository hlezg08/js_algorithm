function solution(skill, skill_trees) {
  let answer = 0;
  const queue_arr = skill_trees.map((tree) => {
    return tree.split("").filter((t) => skill.includes(t));
  });

  for (let queue of queue_arr) {
    for (let i = 0; i < skill.length; i++) {
      if (skill[i] === queue[0]) {
        queue.shift();
      } else break;
    }
    if (queue.length === 0) answer++;
  }
  return answer;
}
