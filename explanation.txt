The program is a simple, grid-based game where a cat chases a mouse, and the user watches the progress. The game ends when the cat catches the mouse. However, the implementation is not fully completed, as the user interface (UI) needs improvement and the mouse's movement could be enhanced for a more challenging experience. Below is the detailed explanation of the current implementation.

The game consists of several classes:

- GameObject.java: An abstract class representing a game object (e.g., Cat or Mouse) on the game board. It includes methods for getting and setting the x and y coordinates of the object.
- Cat.java: Represents the cat in the game and extends the GameObject class. The cat's move method calculates the cat's new position based on the current position of the mouse. The cat moves diagonally, horizontally, or vertically towards the mouse.
- Mouse.java: Represents the mouse in the game and extends the GameObject class. The mouse's move method randomly chooses a direction for the mouse to move. If the chosen direction is blocked, the mouse tries the other directions until an available direction is found.
- GameBoard.java: Represents the game board and contains an array of GameObjects. It includes methods for adding and removing objects from the game board.
- GameManager.java: Manages the game logic, such as playing turns and checking if the game is over. The playTurn method moves the cat and mouse, and the checkGameOver method checks if the cat has caught the mouse.
- GameUI.java: Handles the graphical user interface for the game, displaying the game board, cat, and mouse positions. The playGame method starts the game loop, and the updateGridPanel method updates the grid panel with the current game state.


2 Most Important Use Cases:

1) Cat Movement Logic:
The Cat's movement logic is implemented in the Cat class's move() method. The method iterates through the game board to find the Mouse's position and calculates the horizontal and vertical distances between the Cat and the Mouse. The Cat will then move towards the Mouse using the following rules:
a. If the Cat is one cell away from the Mouse, it attempts to move diagonally.
b. If the horizontal distance is greater than the vertical distance, the Cat will move horizontally.
c. If the horizontal distance is not greater than the vertical distance, the Cat will move vertically.
The Cat's movement is limited to one cell per turn and accounts for the boundaries of the game board. The Cat also updates its position on the game board after each move.

2) Mouse Movement Logic:
The Mouse's movement logic is implemented in the Mouse class's move() method. The Mouse moves randomly in one of the four cardinal directions (up, down, left, or right). The method generates a random direction, calculates the new position based on the chosen direction, and checks if the new position is within the game board boundaries and unoccupied. If the new position is valid, the Mouse moves to that position and updates its position on the game board.
If the randomly chosen direction is blocked or invalid, the method iterates through the remaining directions in a clockwise manner until it finds a valid direction or determines that all directions are blocked. If no valid moves are available, the Mouse remains in its current position.

