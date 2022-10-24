/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const n = arr.length;
  let freq = {};
  for (let num of arr) {
    if (!(num in freq)) freq[num] = 1;
    else freq[num]++;
  }

  let freqArr = Object.values(freq).sort((a, b) => b - a);
  let sum = 0;
  let i = 0;

  while (true) {
    sum += freqArr[i];
    i++;
    if (sum >= n / 2) break;
  }
  return i;
};
