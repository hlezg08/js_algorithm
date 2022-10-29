/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (
    cost.reduce((acc, cur) => acc + cur) > gas.reduce((acc, cur) => acc + cur)
  )
    return -1;

  let idxSum = 0;
  let total = 0;
  let idx = 0;

  for (let i = 0; i < gas.length; i++) {
    idxSum += gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (idxSum < 0) {
      idxSum = 0;
      idx = i + 1;
    }
  }
  return idx;
};
