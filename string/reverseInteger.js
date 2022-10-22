/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (original) {
  let target = original;

  target = String(target).split('').reverse();
  if (target.includes('-')) target.pop();

  target = Number(target.join(''));
  if (original < 0) target = -target;

  return target < (-2) ** 31 || target > 2 ** 31 - 1 ? 0 : target;
};
