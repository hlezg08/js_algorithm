function solution(new_id) {
  let cnt = 0;
  let sub = "";

  // 1,2단계
  let id = new_id.toLowerCase();
  for (let letter of id) {
    if (letter >= 0 && letter <= 9) continue;
    else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
      continue;
    else if (letter === "-" || letter === "_" || letter === ".") continue;
    else id = id.replace(letter, "");
  }
  console.log("2단계 " + id);
  // 3단계
  for (let letter of id) {
    if (letter === ".") {
      cnt++;
      sub += letter;
      id = id.replace(sub, ".");
    } else {
      if (cnt > 1) id = id.replace(sub, ".");
      cnt = 0;
      sub = "";
    }
  }
  console.log("3단계 " + id);
  // 4단계
  if (id[0] === ".") id = id.substring(1, id.length);
  if (id[id.length - 1] === ".") id = id.substring(0, id.length - 1);
  console.log("4단계 " + id);
  // 5단계
  if (id.length === 0) id = "a";
  console.log("5단계 " + id);
  // 6단계
  if (id.length >= 16) id = id.substring(0, 15);
  if (id[id.length - 1] === ".") id = id.substring(0, id.length - 1);
  console.log("6단계 " + id);
  // 7단계
  if (id.length <= 2) {
    let s = id[id.length - 1];
    while (id.length <= 2) {
      id += s;
    }
  }
  console.log("7단계 " + id);
  return id;
}
