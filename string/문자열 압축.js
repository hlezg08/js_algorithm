function zip(arr) {
  let result = '';
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1 && arr[i] === arr[i + 1]) cnt++;
    else {
      if (cnt !== 1) result += cnt + arr[i];
      else result += arr[i];
      cnt = 1;
    }
  }
  return result;
}

function solution(str) {
  let n = str.length;
  let unitArr = [];
  let answer = [];
  for (let u = 1; u <= Math.floor(n / 2); u++) {
    let isSplit = false;
    let arr = [];
    for (let i = 0; i < n; i += u) {
      temp = str.slice(i, i + u);
      arr.push(temp);
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        isSplit = true;
        break;
      }
    }
    if (isSplit) {
      unitArr.push(u);
      answer.push(zip(arr).length);
    }
  }
  //unitArr 비어있으면 문자열 개수 리턴
  return unitArr.length === 0 ? str.length : Math.min(...answer);
}
