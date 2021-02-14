# Coding Problem 

Given an array nums and a value `val`, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with `O(1)` extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

# Explanation

This problem needs to be solved in a simple way, to avoid lots of memory usage, which is required to get good stats on LeetCode

The problem requires us to remove every element in `nums` which are equal to `val`, and return new length of `nums` without modifying the initial input array and without considering `val` elements. 
This can be done by setting a `counter` to 0, looping through every element in `nums` and if element isn't equal to `nums`, changing that element into the next element and incrementing the `counter`.