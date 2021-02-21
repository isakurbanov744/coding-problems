# Coding Problem 

Given an integer `x`, return true if `x` is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

# Explanation

In this problem, the number can not be negative (i.e `num >= 0`). This problem can be solved by, creating a function that will reverse any integer (given that it is more than 0). The function will receive an integer as argument, later will convert that integer into a `string`, and will split the digits into an array of `string`s. Later, built in `reverse` function can be used to reverse the array, the function will return the reversed array combined and in an number format. 

The returned number will be compared with the base input number, and if both numbers are equal (i.e `a === b`), the algorithm will return `true`, and else will return `false`.
