// 실패 : 3,8,15,22,23,25,26번 케이스
// 3번 케이스 수정 후 성공

function solution(new_id) {
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

  // 3단계 -> 실패 원인
  while (id.includes("..")) {
    id = id.replace("..", ".");
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
