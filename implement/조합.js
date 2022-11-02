let arr = [0, 1, 2, 3];
function getCombination(arr, num) {
  let result = [];
  if (num === 1) return arr.map((el) => [el]);
  arr.forEach((el, idx, origin) => {
    let rest = origin.slice(idx + 1);
    let combination = getCombination(rest, num - 1);
    let newArr = combination.map((v) => [el, ...v]);
    result.push(...newArr);
  });
  return result;
}
console.log(getCombination(arr, 2));
