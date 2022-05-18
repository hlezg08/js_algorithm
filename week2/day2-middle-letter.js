function solution(s) {
  var answer = "";
  let middle = parseInt(s.length / 2);
  if (s.length % 2 === 1) {
    answer = s[middle];
  } else {
    answer += s[middle - 1];
    answer += s[middle];
  }

  // Math.floor 이용
  // let middle=Math.floor((s.length)/2);
  // let answer = s[middle];
  // if(s.length%2===0){
  //   answer=s[middle-1]+answer;

  // 삼항 연산자 이용
  // return s.length%2===1 ?s[middle] :s.substring(middle-1,middle+1);

  return answer;
}
