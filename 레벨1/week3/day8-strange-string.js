//짝수 인덱스는 toUpperCase, 홀수 인덱스는 toLowerCase를 꼭 추가해야 함
//공백은 1개 이상이 될 수 있음
//문자열 맨 앞 뒤에 공백이 있을 경우 공백을 포함해야 함
function solution(s) {
  let arr = s.split(" ");
  let answer = [];
  for (let str of arr) {
    let tmp_str = "";
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) tmp_str += str[i].toUpperCase();
      else tmp_str += str[i].toLowerCase();
    }
    answer.push(tmp_str);
  }
  answer = answer.join(" ");
  console.log(answer);
  return answer;

  //map 메소드 이용
  //   const answer=s.split(" ").map(word=>{
  //     return word.split("").map((letter,i)=>{
  //         return i%2===0?letter.toUpperCase()
  //         :letter.toLowerCase()
  //     }).join("")
  // }).join(" ")
}
