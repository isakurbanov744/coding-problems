# Coding Problem 331

You are given a string consisting of the letters `x` and `y`, such as `xyxxxyxyy`. In addition, you have an operation called `flip`, which changes a single `x` to `y` or vice versa.

Determine how many times you would need to apply this operation to ensure that all `x`'s come before all `y`'s. In the preceding example, it suffices to flip the second and sixth characters, so you should return `2`.

# Explanation

In this problem, we need to keep track of the index (`n`) of the last `x` letter in the input array. Later, the index value together with the input array will be sent to another function (`flip`) as arguments. The `flip` function will loop until `n` index value of the input array, meanwhile, a `counter` variable will be used in the function that will increment if the input array contains `y` letters. At the end, number of the counter will be steps required to flip all `x`'s in the input array.