# Coding Problem 339

Given an array of numbers and a number `k`, determine if there are three entries in the array which add up to the specified number `k`. For example, given `[20, 303, 3, 4, 25]` and `k = 49`, return true as `20 + 4 + 25 = 49`.

# Explanation

For this problem, basic for-loops and if-statements will be used. By iterating over three elements of the input array at the same time, we can determine if the values in the input array will add up to `k`.