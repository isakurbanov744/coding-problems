# Coding Problem 304

A knight is placed on a given square on an `8 x 8` chessboard. It is then moved randomly several times, where each move is a standard knight move. If the knight jumps off the board at any point, however, it is not allowed to jump back on.

After `k` moves, what is the probability that the knight remains on the board?

# Explanation

In this problem, we can use a bit map to represent the `8 x 8` chessboard. We can use, an array of 8 subarrays, populated with `0`s and `1`s. In the bit map, 0 represents an available cell, and 1 shows that the cell is occupied. Later we can add every move that a horse can make into an array, using a for loop, we can determine if the horse can move to a certain cell.

Thus, we can calculate the amount of moves it will take for the horse, to fall off the board.
