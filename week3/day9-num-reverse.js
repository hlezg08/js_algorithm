function solution(n) {
  var answer = [];
  let arr = [];
  let n_str = String(n);
  for (let i = 0; i < n_str.length; i++) arr.push(Number(n_str[i]));
  console.log(arr);
  //answer=arr.reverse()
  return answer;
}
