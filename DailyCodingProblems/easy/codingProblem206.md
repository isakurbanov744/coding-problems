# Coding Problem

A permutation can be specified by an array `P`, where `P[i]` represents the location of the element at `i` in the permutation. For example, `[2, 1, 0]` represents the permutation where elements at the index `0` and `2` are swapped.

Given an array and a permutation, apply the permutation to the array. For example, given the array `["a", "b", "c"]` and the permutation `[2, 1, 0]`, return `["c", "b", "a"]`.

# Explanation

In this problem, we are given two arrays, one is the input array with string, integer or float values, the other is an array for permutation. 

Here, permutation `i` refers to the index `i` that the given element shall be located. In the code, we need to use the value's given in the permutation array to to set the locations of the output array. For error checks, we can keep track of size of elements in the permutation array, making sure it isn't bigger than the input array length (which will cause index error). Secondly, we can make sure that size of both arrays match, to avoid index and range errors.