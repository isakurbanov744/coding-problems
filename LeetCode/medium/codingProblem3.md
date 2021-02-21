# Coding Problem

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing `dividend` by `divisor`.

The integer division should truncate toward zero, which means losing its fractional part. For example, `truncate(8.345) = 8` and `truncate(-2.7335) = -2`.

Note:

- Assume we are dealing with an environment that could only store integers within the 32-bit signed     integer range: [−2^31,  2^31 − 1]. For this problem, assume that your function returns 2^31 − 1 when the division result overflows.

# Explanation

In this problem, quotent rule for division can be used. Which means that, we have to count number of times, divisor can be subtracted from dividend. There are exceptions to avoid while solving this problem, which are dividing any number by 0, or that a result of less than 2^31-1 sould be received.
