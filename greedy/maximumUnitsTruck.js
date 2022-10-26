/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let count = 0;
  let answer = 0;
  for (let type of boxTypes) {
    if (count + type[0] <= truckSize) {
      count += type[0];
      answer += type[0] * type[1];
    } else {
      answer += (truckSize - count) * type[1];
      return answer;
    }
  }
  return answer;
};
