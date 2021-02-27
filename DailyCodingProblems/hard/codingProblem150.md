# Coding Problem

Given a list of points, a central point, and an integer `k`, find the nearest `k` points from the central point.

For example, given the list of points `[(0, 0), (5, 4), (3, 1)]`, the central point `(1, 2)`, and `k = 2`, return `[(0, 0), (3, 1)]`.

# Explanation

In this problem, we can use Geometric formulas to find the distance between the points. Since this is a 2D graph, Euclidean Distance formula has been used in this solution. Best approach would be to calculate distance between each point in the array and the central point. For this, a function that takes 2 argments which are coordinates (first being coordinate from the array and second being central point). The function will return Euclidean Distance between the given coordinates. Later an arrow function can be used to sort the input array of coordinates in desceding order. Finally, `slice` function can be used to return the sorted array of coordinates, from `0`'th index to `k`th index. `mainFunction` will return the answer in format of 2D array.
 