# Coding Problem

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input `[3, 4, -1, 1]` should give `2`. The input `[1, 2, 0]` should give `3`.

You can modify the input array in-place.

# Explanation

The approach in this coding problem is to use built in Set Data Structure in TypeScript. Set Data Structure in TypeScript can quickly return if a value is present in the current Set instance. In the program, we can convert the input array into a TypeScript Set, and we can initialize a `counter` variable to 1, to keep track of the missing number. Using a while loop, we can check if the current `counter` value is present in the current Set instance, if yes, the `counter` value is incremented by 1, to fill the missing number gap. If `counter` value is not present in the Set, then `counter` is returned from the function.
