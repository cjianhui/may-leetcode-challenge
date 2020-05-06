# First Unique Character in a String

```
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
```

### Solution

We can construct a map to hold the number of occurences of each letter in the string.

Then, we iterate through the string and lookup the map for the number of occurrences for each letter. If it is `1`, we return the index of the letter.

Time Complexity: `O(n)`\
Space Complexity: `O(n)`
