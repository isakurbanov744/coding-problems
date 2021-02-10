# Coding Problem 343

Given a binary search tree and a range `[a, b]` (inclusive), return the sum of the elements of the binary search tree within the range.

For example, given the following tree:

        5
       / \
      3   8
     / \  / \
    2  4 6  10

and the range `[4, 9]`, return `23` `(5 + 4 + 6 + 8)`.

# Explanation

This problem requires knowledge of Binary Tree Representation of numbers. For this simple solution, a class `NodeClass` can be used to represent the Data Structure. The class will have field variables of: value, right node and a left node.

The nodes will be linked by making value field of each individual node either left or right element of that node.
For Example: 
Node 5, which is the root of the Binary Tree, will have 3 as it's left leaf and 8 as it's right leaf, if done as following:

- Initializing nodes:
    ```ts
    const a = new NodeClass(5);
    const b = new NodeClass(3);
    const c = new NodeClass(8);
    ```

- Connecting nodes: 
    ```ts
    a.addLeft(b.value);
    a.addRight(c.value);
    ```

In the above example, first nodes were initialized, later individual node values were linked to the root node (5). Value of `b` was initialized as left leaf and value of `c` was initialized as right leaf.

Output: 

        5
       / \
      3   8


As we have initialized the binary tree, we can put every value into an array, and using for-loop and if statement, we can sum every value in the binary tree that are in the range of `a` and `b`.