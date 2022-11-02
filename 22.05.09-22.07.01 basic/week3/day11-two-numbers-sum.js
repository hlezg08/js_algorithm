function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
      //if문을 includes로도 해결 가능
      // if(!answer.includes(sum)) answer.push(sum)

      //Set 이용하면 if문 쓸 필요 없음
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}

//다른 방법: forEach 사용
// numbers.forEach((n1,i)=>{
//   numbers.slice(i+1).forEach(n2=>{
//       const sum=n1+n2;
//       answer.add(sum)
//   })
// })
