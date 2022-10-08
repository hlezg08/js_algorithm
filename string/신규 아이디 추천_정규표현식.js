function solution(id) {
  id = id.toLowerCase();
  id = id.replace(/[^\w\-\.]/g, '');
  id = id.replace(/\.{2,}/g, '.');
  id = id.replace(/^\.|\.$/g, '');

  if (id.length === 0) id += 'a';
  if (id.length >= 16) id = id.slice(0, 15);
  id = id.replace(/\.$/g, '');

  if (id.length <= 2) {
    id += id[id.length - 1].repeat(3 - id.length);
  }

  return id;
}
