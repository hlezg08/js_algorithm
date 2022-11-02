function solution(numbers, target) {
  let queue = [
    [numbers[0], 0],
    [-numbers[0], 0],
  ];

  while (true) {
    let [front, idx] = queue.shift();
    queue.push([front + numbers[idx + 1], idx + 1]);
    queue.push([front - numbers[idx + 1], idx + 1]);
    if (queue.length === 2 ** numbers.length) break;
  }
  return queue.filter((arr) => arr[0] === target).length;
}
