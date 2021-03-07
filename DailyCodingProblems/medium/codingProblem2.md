# Coding Problem

Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

# Explanation

This coding problem can be easily solved if division would be allowed. We could just loop through every element and divide product of all elements in the array by the element at index `i`.

However, doing this problem without division, we need to write another algorithms to find product of all elements on the right side of the current index `i` and as well on the left side. Later, we can return the product of right and left sides (which we already calculated). In the main function, the output can be placed on the current index that the loop is on.
