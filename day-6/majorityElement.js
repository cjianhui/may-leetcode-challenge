/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /*  Approach 1:
    let map = {};
    for (const num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }
    
    let majorityElement;
    let occurrences = 0;
    
    for (const [k, v] of Object.entries(map)) {
        if (v > occurrences) {
            occurrences = v;
            majorityElement = k;
        }
    }
    
    return majorityElement;
*/

  /*  Approach 2 */
  let count = 0;
  let majorityElement;
  for (const num of nums) {
    if (count === 0) {
      majorityElement = num;
    }
    count += num === majorityElement ? 1 : -1;
  }

  return majorityElement;
};
