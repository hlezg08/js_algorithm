function countLetter(str) {
  str = str.toLowerCase(); //대문자 "A" 조건을 추가하는 것보다 더 효율적
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      count++;
    }
  }
  return count;
}
