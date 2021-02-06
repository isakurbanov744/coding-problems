# Coding Problem 3

Given a sorted list of integers of length `N`, determine if an element `x` is in the list without performing any multiplication, division, or bit-shift operations.

Do this in `O(log N)` time.

# Explanation

This problem requires simple implementation of `Binary Search`. However, the restriction of not being able to use division multiplication or bit-shift operations makes this problem hard. 

In this problem, we have to find the middle element in an array to perform `Binary Search`, doing so is easy if division or multiplication is used, however here an efficient algorithm needs to be implemeted to solve this problem. In the algorithm, we need to set two variables (`p` and `q`) equal to the beginning index of the array and another to the ending index of array. In a for-loop, the `p` index needs to be incremented and the `q` element needs to be decremented. If both variables are equal the last intex, the algorithm should return `p`, if `q` is more than `p`, the algorithm shall return `p`.
