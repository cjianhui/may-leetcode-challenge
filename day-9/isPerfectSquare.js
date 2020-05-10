/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.round((left + right) / 2);

    if (mid === num / mid) return true;

    if (mid > num / mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
