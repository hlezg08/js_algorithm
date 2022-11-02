function gcd(a, b) {
  if (a < b) [a, b] = [b, a];
  while (1) {
    let r = a % b;
    a = b;
    b = r;
    if (b === 0) break;
  }
  return a;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function solution(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}
