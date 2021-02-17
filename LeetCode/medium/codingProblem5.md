# Coding Problem

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

- `countAndSay(1) = "1"`
- `countAndSay(n)` is the way you would "say" the digit string from countAndSay(n-1), which is then       converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

Given a positive integer `n`, return the `nth` term of the count-and-say sequence.

# Explanation

This problem can be solved by keeping track of count of consecutive equal numbers in a sequence, later the count and the previous character can be added to the output string. If the two chars are different, `1` and that char shall be added to the output string.

The sequence repetition depends on input integer `n`, and repeats until `n`.

Example for the 3rd term:

- In the first loop the output will be `11`, since the counter will count until `1`
- In the second loop, the output will be `21`, since the counter will count `2` `1`s
- In the third loop, the output will be `1211`, the `prev` variable will be set to `2`, which only appears once, at this point the output will be: `12`, later the `prev` variable will becode `1`, and the counter will count `1` only once. This is where the loop ends since its the 3rd and the last loop, and the out put will be: `1211`.
