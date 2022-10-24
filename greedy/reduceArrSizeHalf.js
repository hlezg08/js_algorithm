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

  let freqArr = [];
  for (let key in freq) {
    freqArr.push([Number(key), freq[key]]);
  }

  freqArr.sort((a, b) => b[1] - a[1]);

  for (let i = 1; i <= freqArr.length; i++) {
    let temp = freqArr.slice(0, i);
    let sum = temp.reduce((prev, cur) => (prev += cur[1]), 0);
    if (n - sum <= n / 2) return i;
  }
};
