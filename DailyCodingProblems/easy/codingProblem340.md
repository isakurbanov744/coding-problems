# Coding Problem 340

Given a set of points `(x, y)` on a 2D cartesian plane, find the two closest points. For example, given the points `[(1, 1), (-1, -1), (3, 4), (6, 1), (-1, -6), (-4, -3)]`, return `[(-1, -1), (1, 1)]`.

# Explanation

First step to solve this problem is to understand how to calculate distance between two points in a 2D cartesian plane. This is accomplished through `Pythagorean Theorem`. The formula used is: `Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))`, where coordinates are: `(x1, y1)` and `(x2, y2)`.

After using for-loop and calculating distance between every point, we can add the distance values into an array, to be able to find the smallest distance later.

Doing so can be accomplished by using a simple algorithm, where a for-loop will be used to determine which is the smallest number among all, which will be the answer to the problem.