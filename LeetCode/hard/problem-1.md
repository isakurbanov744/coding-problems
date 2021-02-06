# Coding Problem 304

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

# Explanation

This problem requires knowledge of sorting algorithms and basic statistics. To solve the problem it is required to solve the input array. In this simple solution, bubble sort is being used. 
After bubble sort, we have to determine if the array length is odd or even. If the array size is odd, meaning it `arr.length % 2 != 0`, median is the middle element in the sorted input array. 
However, if the length is even, meaning `arr.length % 2 == 0`, we can find the middle element using the formula: `let midEl = Math.floor(0 + (arr.length - 0) / 2)`. This will set the middle number to floor value of the output. Later, we will need to keep track of the number before the final middle number: `let beforeMid = midEl - 1`. Finally, median is: `median = (arr[beforeMid] + arr[midEl]) / 2`.