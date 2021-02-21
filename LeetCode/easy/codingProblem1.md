# Coding Problem 

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- I can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- X can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- C can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

# Explanation

This problem requires us to map Roman Symbols and their translations into deciman system. In the beginning of the algorithm, it is required to split the input Roman Symbols, into an array. 

Later, current Roman Symbol can be selected and used to find it's value in decimal system. Similarly, we also need to keep track of the next Symbol and it's equivalent in decimal system, this is because both of the numbers will be compared in the next step of the algorithm. In the next step, if the `nextVal` is larger than `currentVal`, we have to subtract `currentVal` from the sum (which is 0 currently). Else if, the `nextVal` is smaller than `currentVal`, the algorithm shall add, `currentVal`into `sum` variable. This process shall be repeated until no elements are left in the array.
