# Ransom Note

https://leetcode.com/problems/ransom-note/

```
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

### Solution

To keep track of the letters in the magazine, we can contruct a map with the key as the letter and the value as the number of occurences of that letter.

Then, we can just iterate through the letters in the ransom note string and check if it's present in the map. If it is, we check if there are sufficient letters in the magazine to construct the ransom note string.

Time Complexity: `O(M + N)`, where the length of the ransom note is `M` and the length of the magazine letters is `N`.

Space Complexity: `O(N)`

The implemented solution is [here](ransomNote.js)
