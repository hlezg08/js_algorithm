function solution(s) {
  var answer = "";
  let tmp_arr = s.split(" ");
  let arr = [];

  for (let str of tmp_arr) {
    let tmp_str = "";
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) tmp_str += str[i].toUpperCase();
      else {
        tmp_str += str[i].toLowerCase();
      }
    }
    arr.push(tmp_str);
  }

  if (arr[0] === "") {
    arr.shift();
    arr[0] = " " + arr[0];
  } else if (arr[arr.length - 1] === "") {
    arr.pop();
    arr[arr.length - 1] += " ";
  }
  //console.log(arr);
  answer = arr.join(" ");

  return answer;
}
//짝수 인덱스는 toUpperCase, 홀수 인덱스는 toLowerCase를 꼭 추가해야 함
//공백은 1개 이상이 될 수 있음
//문자열 맨 앞 뒤에 공백이 있을 경우 공백을 포함해야 함
