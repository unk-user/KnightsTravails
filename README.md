## Knights Moves - JavaScript Implementation

This project implements a solution for the classic "Knights Moves" problem on a chessboard. It calculates the shortest path a knight can take from a starting position to a target position on an 8x8 chessboard.

**Functionality:**

This code implements a breadth-first search algorithm to find the shortest path a knight can take on a chessboard. It provides the following functionalities:

* **`KnightsMoves(start, target)`:** Takes the starting and target positions as coordinates (x, y) and returns an array representing the shortest path the knight can take to reach the target. If no path exists, it returns `null`.
* **`isInRange(value)`:** Checks if a given value is within the valid range of the chessboard (1 to 8).
* **`nextMoves(position)`:** Takes a position as coordinates (x, y) and returns an array of all valid knight moves from that position, considering the board boundaries.
* **`hasVisited(position, visited)`:** Checks if a given position has already been visited during the pathfinding process.

**Example Usage:**

```javascript
console.log(KnightsMoves([0, 0], [6, 5])); // Output: [[0, 0], [2, 1], [4, 2], [6, 3], [6, 5]]
