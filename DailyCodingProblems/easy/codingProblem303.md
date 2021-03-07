# Coding Problem 303

Given a clock time in `hh:mm` format, determine, to the nearest degree, the angle between the hour and the minute hands.

# Explanation

This problem requires a bit of Trigonometry. It is important to keep in mind that, clock is `360°`, each hour represents `30°` (`360 / 12`) and each minute represents `6°` (`360 / 60`). 

In the program, it is important to split string input into numbers; seperating hour and minute. Two sub-functions are required to find angle of hour hand and minute hand. 
