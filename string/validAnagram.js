/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let obj = {};
  for (let char of s) {
    if (char in obj) obj[char]++;
    else obj[char] = 1;
  }

  for (let char of t) {
    if (!(char in obj)) return false;
    else obj[char]--;
  }

  for (let value of Object.values(obj)) if (value !== 0) return false;

  return true;
};
