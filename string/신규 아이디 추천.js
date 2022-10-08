function solution(id) {
  // 1단계
  id = id.toLowerCase();

  let aCode = 'a'.charCodeAt();
  let zCode = 'z'.charCodeAt();

  // 2단계
  for (let char of id) {
    if (char.charCodeAt() >= aCode && char.charCodeAt() <= zCode) continue;
    else if (Number(char) >= 0 && Number(char) <= 9) continue;
    else if (char === '-' || char === '_' || char === '.') continue;
    else id = id.replace(char, '');
  }

  // 3단계
  while (id.includes('..')) {
    id = id.replace('..', '.');
  }

  // 4단계
  if (id[0] === '.') id = id.substring(1);
  if (id[id.length - 1] === '.') id = id.substring(0, id.length - 1);

  // 5단계
  if (id.length === 0) id += 'a';

  // 6단계
  if (id.length >= 16) id = id.substring(0, 15);
  if (id[id.length - 1] === '.') id = id.substring(0, id.length - 1);

  // 7단계
  if (id.length <= 2) {
    while (id.length < 3) {
      id += id[id.length - 1];
    }
  }

  return id;
}
