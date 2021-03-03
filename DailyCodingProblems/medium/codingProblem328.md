# Coding Problem 328

In chess, the Elo rating system is used to calculate player strengths based on game results.

A simplified description of the Elo system is as follows. Every player begins at the same score. For each subsequent game, the loser transfers some points to the winner, where the amount of points transferred depends on how unlikely the win is. For example, a 1200-ranked player should gain much more points for beating a 2000-ranked player than for beating a 1300-ranked player.

Implement this system.

# Explanation

This problem requires a single formula to find the score gained or lost as a result of the game. If the result is win, points calculated by Elo rating system are added to the score of winner, similarly calculated points are subtracted from the loosing sides score.