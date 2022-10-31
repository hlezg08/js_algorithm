var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");
  const com = s.split("").reverse().join("");
  return s === com ? true : false;
};
