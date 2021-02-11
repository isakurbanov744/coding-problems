# Coding Problem

The "look and say" sequence is defined as follows: beginning with the term `1`, each subsequent term visually describes the digits appearing in the previous term. The first few terms are as follows:

    1
    11
    21
    1211
    111221

As an example, the fourth term is `1211`, since the third term consists of one `2` and one `1`.

Given an integer `N`, print the `N`th term of this sequence.

# Explanation

This problem can be solved by keeping track of count of consecutive equal numbers in a sequence, later the count and the previous character can be added to the output string. If the two chars are different, `1` and that char shall be added to the output string.

The sequence repetition depends on input integer `N`, and repeats until `N`.