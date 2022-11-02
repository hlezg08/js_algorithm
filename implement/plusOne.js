/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 처음에 틀린 케이스 : [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Number로 형변환하면 오류 (최대치인 2^53-1를 벗어나므로)
var plusOne = function (digits) {
  const answer = BigInt(digits.join('')) + 1;
  return String(answer)
    .split('')
    .map(num => Number(num));
};
