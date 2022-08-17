function bigNum(str) {
  let biggest = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) > biggest) {
      biggest = Number(str[i]);
      //String으로 냅둬도 크기 비교가 가능하지만 리턴 타입이 숫자여야 하므로 타입 변환
    }
  }
  return biggest;
}
