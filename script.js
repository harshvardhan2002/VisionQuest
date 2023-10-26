// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player properties
const player = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 25,  // Adjust width (smaller)
    height: 25, // Adjust height (smaller)
    speed: 25,
};


// Obstacle properties

const obstacles = [];

// Game variables
let score = 0;
let isGameOver = false;

// Event listeners for player movement
document.addEventListener("keydown", (event) => {
    if (!isGameOver) {
        if (event.key === "ArrowLeft" && player.x > 0) {
            player.x -= player.speed;
        } else if (event.key === "ArrowRight" && player.x + player.width < canvas.width) {
            player.x += player.speed;
        }
    }
});

// Motion of bg
const video = document.getElementById('background-video');

video.addEventListener('animationiteration', () => {
    video.style.transform = 'translateY(0)';
});

// Start scrolling when the game starts (e.g., after clicking a "Start Game" button)
document.getElementById("start-button").addEventListener("click", function() {
    this.style.display = "none"; // Hide the start button
    const background = document.getElementById("background-image");
    background.classList.add("scrolling"); // Add the "scrolling" class to start the animation
});

// Initially reset the video position
resetVideoPosition();



// Game loop
function gameLoop() {
    if (!isGameOver) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw the player
        ctx.fillStyle = "#4caf50";
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // Update and draw obstacles
        for (let i = 0; i < obstacles.length; i++) {
            ctx.fillStyle = "#e74c3c";
            ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

            // Check for collision with player
            if (checkCollision(player, obstacles[i])) {
                // Game over logic
                gameOver();
                return;
            }

            // Remove obstacles that are out of the canvas
            if (obstacles[i].y > canvas.height) {
                obstacles.splice(i, 1);
                i--;
            } else {
                obstacles[i].y += 2;
            }
        }

        // Create new obstacles
        if (Math.random() < 0.02) {
            const obstacleWidth = Math.random() * 50 + 20;
            const obstacleX = Math.random() * (canvas.width - obstacleWidth);
            const obstacle = {
                x: obstacleX,
                y: 0,
                width: obstacleWidth,
                height: 20,
            };
            obstacles.push(obstacle);
        }

        // Update and display score
        ctx.fillStyle = "#fff";
        ctx.font = "24px Arial";
        ctx.fillText(`Score: ${score}`, 10, 30);

        // Increase score
        score++;

        // Continue the game loop
        requestAnimationFrame(gameLoop);
    } else {
        // Display game over message
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#e74c3c";
        ctx.font = "36px Arial";
        ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2 - 50);

        ctx.fillStyle = "#fff";
        ctx.font = "24px Arial";
        ctx.fillText(`Your Score: ${score}`, canvas.width / 2 - 80, canvas.height / 2 + 20);

        // Show restart button
        document.getElementById("game-over").style.display = "block";
    }
}

// Function to check collision between player and obstacle
function checkCollision(player, obstacle) {
    return (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    );
}
document.addEventListener("keydown", (event) => {
    if (!isGameOver) {
        if (event.key === "ArrowLeft" && player.x > 0) {
            player.x -= player.speed;
        } else if (event.key === "ArrowRight" && player.x + player.width < canvas.width) {
            player.x += player.speed;
        }
    }
});

// Other game logic and event handling...


function gameOver() {
    isGameOver = true;

    // Display the final score in front of "Score: 0"
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Final Score: ${score}`;

    // Show the game over message and restart button
    document.getElementById("game-over").style.display = "block";
}

// Restart the game when the "Restart" button is clicked
document.getElementById("restart-button").addEventListener("click", () => {
    document.location.reload();
});


// Start the game loop
gameLoop();
