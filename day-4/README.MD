# Number Complement

```
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.



Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.


Example 2:

Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.


Note:

The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/
```

### Solution

We can use the bitwise operator NOT (`~`), to give us the complement of the integer.

However since, JavaScript bitwise operators convert their operands to 32-bit signed integers, we have to strip the leading `1s` that result from the NOT operator.

To do so, we can construct a bit mask of the same length as our number in binary representation and `&` the mask and the result of `~num` together.

```
~5          => 11111111111111111111111111111010
mask        => 00000000000000000000000000000111
~5 & mask   => 00000000000000000000000000000010 => 2
```
