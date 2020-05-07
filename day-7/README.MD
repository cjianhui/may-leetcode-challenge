# Cousins in Binary Tree

https://leetcode.com/problems/cousins-in-binary-tree/

```
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Note:
The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.
```

### Solution

#### Approach 1 (DFS)

Two nodes are cousins if they are at the same depth and are not siblings. Hence, we can use `DFS` to check the depth of nodes with value `x` and `y` respectively. Afterwhich, we use `dfs` again to recursively check if two nodes are siblings.

If the depth of node with value `x` is the same as the depth of node with value `y`, and they are not siblings, then they are cousins.

Time Complexity: `O(n)` \
 Space Complexity: `O(n)` (Call stack)

#### Approach 2 (BFS)

While Approach 1 gives us the result in linear time, it is not the most optimal approach as it traverses through the tree multiple times to obtain the depths of the nodes and also check if they are siblings.

We can traverse the tree only once by using `bfs`. A queue will be used to store the nodes. At every level of the tree, we first check if values `x` and `y` can be found in either the left or right child of the current node.

Then, we check if they are siblings at the current level.
If `x` and `y` are found and they are not siblings, then they are cousins.

If not, we enqueue the left and right child of the current node into the queue and repeat.

Time Complexity: `O(n)`\
 Space Complexity: `O(n)`
