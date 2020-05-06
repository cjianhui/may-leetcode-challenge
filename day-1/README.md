# First Bad Version

https://leetcode.com/problems/first-bad-version/

```
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
```

### Solution

#### Approach 1 (Linear Search) (Time Limit Exceeded)

On first glance, a naive approach will be to check all versions from 1 to n and return the first version that is bad.

Time Complexity: `O(n)`\
Space Complexity:`O(1)`

#### Approach 2 (Binary Search)

Since the versions are in sorted order and we want to find the first bad version, we can apply binary search to narrow the search space.

Let us define start and end as the bounds of our search space.

Then, there are two scenarios we can consider:

```
Scenario 1: isBadVersion(mid) === true
1   2   3   4   5   6   7   8
G   G   G   B   B   B   B   B
|           |               |
start      mid            end

If isBadVersion(mid) is true, either mid is the first bad version or the first bad version is found in 1 to mid - 1.
We can therefore set end to mid - 1.
```

```
Scenario 2: isBadVersion(mid) === false
1   2   3   4   5   6   7   8
G   G   G   G   G   B   B   B
|           |               |
start      mid            end

If isBadVersion(mid) is false, then the first bad version can only be found from mid + 1 to end. Hence we set start to mid + 1.
```

Then, when start and end eventually meets, we will obtain the first bad version.

There's one caveat when setting `mid = start + end / 2` though as it could result in an integer overflow.
A mathematically equivalent way of getting mid is `mid = start + end - start / 2`, which will circumvent the integer overflow problem.

Time Complexity: `O(log n)`\
Space Complexity: `O(1)`
