function solution(seoul) {
  let idx;
  var answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      idx = i;
    }
  }
  answer = "김서방은 " + idx + "에 있다";
  return answer;

  //조금 더 빠르게 처리하는 법 (break문 대신 return)
  // for(let i=0;i<seoul.length;i++){
  //   if(seoul[i]==="Kim"){
  //     idx=i;
  //      return `김서방은 ${i}에 있다`;
  //   }
  // }

  //indexOf 이용
  //let idx=seoul.indexOf("Kim");
}
