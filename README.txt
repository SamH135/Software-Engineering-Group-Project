Cat and Mouse Game

Description:
This is a simple 2D grid-based Cat and Mouse game implemented in Java. The objective of the game is for the mouse to reach the cheese before the cat catches the mouse. The game consists of a cat, a mouse, and a cheese, all positioned on a game board represented by a 2D grid. The program has a graphical user interface using Swing, allowing players to interact with the game.

Game Elements:

Cat: The cat is represented by the Cat class and extends the GameObject class. It moves towards the mouse on the game board, following the shortest path.
Mouse: The mouse is represented by the Mouse class and also extends the GameObject class. The player can control the movement of the mouse on the game board.
Cheese: The cheese is represented by the Cheese class and extends the GameObject class. It remains stationary on the game board, and the mouse must reach it to win the game.
Game Logic:
The game is managed by the GameManager class, which handles the turn-based movement of the cat and the mouse, as well as checking for game over conditions. The game ends when either the cat catches the mouse or the mouse reaches the cheese.

The GameBoard class represents the game board using a 2D array of GameObject objects. It provides methods for adding and removing game objects from the game board.

The GameObject class is an abstract class that represents a game object on the game board, such as the cat, mouse, or cheese. Each subclass must implement the move method, which defines how the game object moves on the game board.

The game's graphical user interface is implemented using the GameUI class, which utilizes the Swing library to display the game board, game elements, and controls for the player to interact with the game.

How to Play:

Launch the game by running the main method in the GameUI class.
Click the "Start" button to begin the game. The cat will start moving towards the mouse automatically.
Use the "Up", "Down", "Left", and "Right" buttons to control the movement of the mouse.
The game ends when either the cat catches the mouse or the mouse reaches the cheese. A message will be displayed to indicate the result of the game.
Click the "Reset Board" button to restart the game.
The cat moves intelligently towards the mouse by calculating the shortest path. The player must strategically move the mouse to reach the cheese while avoiding the cat. The game offers a simple and engaging experience that tests the player's ability to navigate the mouse to safety.
