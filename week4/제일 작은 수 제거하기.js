function solution(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  arr.splice(arr.indexOf(min), 1);

  return arr.length !== 0 ? arr : [-1];
}
