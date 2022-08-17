function solution(phone_number) {
  let answer = "";

  //처음 시도한 방법
  //   for (let i = 0; i < phone_number.length - 4; i++) answer += "*";
  //   for (let i = phone_number.length - 4; i < phone_number.length; i++)
  //     answer += phone_number[i];

  //더 간단한 풀이
  answer = "*".repeat(phone_number.length - 4);

  //또 다른 방법
  //answer=answer.padStart(phone_number.length-4,'*');

  answer += phone_number.substr(phone_number.length - 4, 4);
  return answer;
}
