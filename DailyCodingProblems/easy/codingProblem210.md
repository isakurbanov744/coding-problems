# Coding Problem

A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

* if n is even, the next number in the sequence is n / 2
* if n is odd, the next number in the sequence is 3n + 1

It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

Bonus: What input n <= 1000000 gives the longest sequence?

# Explanation

This problem is simple and can be solved using a single line of code (ternary operator). According to the Collatz Sequence, the output of given number will always end with 1 (should end with 1). In the code, we can use a while loop that will make sure that the program stops when `n` is equal to 1. Inside the while loop, with a simple modulo operator, we can calculate if `n` value is odd or even (`n % 2 == 0`, even). Doing this appropriate formulas can be used to find the next value of `n`. Meanwhile, all values of `n` can be pushed to the output array, to return when `n` reaches 1.