/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  num = String(num).split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "9") {
      num[i] = "9";
      break;
    }
  }
  num = Number(num.join(""));
  return num;
};
