# Coding Problem 382

Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet `(a, b, c)` is defined by the equation `a2 + b2 = c2`.

# Explanation

The best practise for this problem is looping throgh every element in the input array. For this two for loops are enough, one will point at the first element and the other to the next element in the input array.

Next we need to implement the formula: `a2 + b2 = c2` for each element in the input array, whenever `a2 + b2` will be equal to `c2`, the algorithm will return true.