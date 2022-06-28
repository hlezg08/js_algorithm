function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const tmp1 = arr1[i].toString(2).padStart(n, "0");
    const tmp2 = arr2[i].toString(2).padStart(n, "0");
    let el_arr = [];
    for (let j = 0; j < n; j++) {
      let el = 0;
      if (Number(tmp1[j]) + Number(tmp2[j]) > 1) el = "#";
      else el = Number(tmp1[j]) + Number(tmp2[j]) === 1 ? "#" : " ";
      el_arr.push(el);
    }
    answer.push(el_arr.join(""));
  }

  return answer;
}
