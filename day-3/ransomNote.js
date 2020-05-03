/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (letter of magazine) {
    map[letter] = map[letter] + 1 || 1;
  }

  for (letter of ransomNote) {
    if (!map[letter]) {
      return false;
    }

    if (--map[letter] < 0) {
      return false;
    }
  }

  return true;
};
