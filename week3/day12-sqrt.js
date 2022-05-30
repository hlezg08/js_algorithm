function solution(n) {
  let x = n ** (1 / 2); //또는 Math.sqrt(n)
  if (x % 1 === 0) return (x + 1) ** 2; //Number.isInteger()도 가능
  else return -1;
}
