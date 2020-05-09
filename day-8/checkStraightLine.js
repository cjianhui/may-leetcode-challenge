/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 2) return true;
  let start = 0;
  let gradient = getGradient(
    coordinates[start],
    coordinates[coordinates.length - 1]
  );
  let end = coordinates.length - 2;
  while (end > start) {
    currGradient = getGradient(coordinates[start], coordinates[end]);
    if (currGradient != gradient) return false;
    end--;
  }

  return true;
};

const getGradient = (c1, c2) => {
  let [x1, y1] = c1;
  let [x2, y2] = c2;

  return (y2 - y1) / (x2 - x1);
};
