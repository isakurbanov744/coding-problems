# Coding Problem

A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. For example, `16891` is strobogrammatic.

Create a program that finds all strobogrammatic numbers with `N` digits.

# Explanation

This problem requires us to keep a map of all the numbers that appear same after rotating 180 degrees, which are: 0, 1, 9, 8, 6. Later, if the numbers are appropriate (as a result of recursion), we can add numbers that are stored in the map. Which will be the output.