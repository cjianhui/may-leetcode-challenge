/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // get decimal representation of mask
  const mask = Math.pow(2, num.toString(2).length) - 1;
  return ~num & mask;
};
