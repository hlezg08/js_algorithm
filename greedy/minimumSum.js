const minimumSum = function (num) {
  let result = [];
  const numArr = String(num)
    .split('')
    .sort((a, b) => b - a);
  result.push(numArr[0]);
  result.push(numArr[1]);
  result[0] += numArr[2];
  result[1] += numArr[3];

  result = result.map(el => Number(el.split('').sort().join('')));

  return result.reduce((acc, cur) => (acc += cur));
};
