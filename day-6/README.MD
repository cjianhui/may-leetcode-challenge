# Majority Element

https://leetcode.com/problems/majority-element/

```
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
```

### Solution

#### Approach 1 (Hashmap)

We can use a hashmap to map elements to counts. This lets us count the occurrences in linear time by looping over `nums` and populating the hashmap.

Then, the majority element will be the key with the highest value (count).

Time Complexity: `O(n)`\
Space Complexity: `O(n)`

#### Approach 2 (Boyer–Moore majority vote algorithm)

The [Boyer-Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm) is an algorithm for finding the majority in a sequence of elements with linear time and constant space.

The main idea of this algorithm is keeping track of a counter that increments (`+1`) when we encounter the same candidate element and decrements (`-1`) when another element is seen.

When the counter is `0`, the candidate element is replaced with the current element.

The intuition is that if a candidate element is truly the majority, there will be more increases than decreases and the counter will be positive when the algorithm ends. This is only possible if the resulting candidate element at the end is the majority element.

Time Complexity: `O(n)`\
Space Complexity: `O(1)`
