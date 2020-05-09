https://leetcode.com/problems/check-if-it-is-a-straight-line/

```
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
```

#### Solution

To determine the coordinates form a straight line, we can check if the gradient/slope of the coordinates are equal. If at any point they are not, then it is not a straight line.

Time Complexity: `O(n)`\
Space Complexity: `O(1)`
