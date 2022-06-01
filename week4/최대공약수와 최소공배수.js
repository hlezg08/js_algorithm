//최대공약수: 유클리드 호제법 이용
//gcd(a,b)=gcd(b,a%b)=...=gcd(r,0)=r
function gcd(a, b) {
  while (1) {
    let r = a % b;
    a = b;
    b = r;
    if (b === 0) break;
  }
  return a;
}
function lcm(a, b) {
  return (((gcd(a, b) * a) / gcd(a, b)) * b) / gcd(a, b);
}
function solution(n, m) {
  var answer = [];
  let tmp;
  if (n < m) {
    tmp = n;
    n = m;
    m = tmp;
  }
  answer.push(gcd(n, m));
  answer.push(lcm(n, m));
  return answer;
}
