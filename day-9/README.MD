# Valid Perfect Square

https://leetcode.com/problems/valid-perfect-square/

```
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
```

### Solution

We can use binary search to determine the square root of a number.

Let us define left and right as the bounds of our search space.

Then, there are two scenarios we can consider:

```
Scenario 1: mid > num/mid
1   2   3   4   5   6   7   8   9
|               |               |
left           mid            right

If mid > num/mid, the square root of num can only be found from left to mid - 1.
We can therefore set right to mid - 1.
```

```
Scenario 2: mid < num/mid


If mid < num/mid, the square root of num can only be found from mid + 1 to right.
We can therefore set left to mid + 1.
```

If `mid === num/mid`, then we have found the square root for the number and we can return true. If not, when the search space is exhausted (`left < right`), we return false.

Time Complexity: `O(log n)`\
Space Compexity: `O(1)`
