/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let set = new Set(J);

  let sum = 0;

  for (let stone of S) {
    if (set.has(stone)) {
      sum++;
    }
  }

  return sum;
};
