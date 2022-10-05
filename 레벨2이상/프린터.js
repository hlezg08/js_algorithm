function solution(priorities, location) {
  let result = [];
  let queue = [];

  for (let i = 0; i < priorities.length; i++) {
    queue.push([i, priorities[i]]);
  }

  while (true) {
    let temp = queue.shift();
    let pass = true;
    for (let wait of queue) {
      if (temp[1] < wait[1]) {
        pass = false;
        queue.push(temp);
        break;
      }
    }
    if (pass) result.push(temp);
    if (queue.length === 0) break;
  }

  for (let arr of result) {
    if (location === arr[0]) return result.indexOf(arr) + 1;
  }
}
