let video, videoCapture, canvas, context, eyeCascade;
let spaceship, score = 0, isBlinking = false, blinkCount = 0, level = 1, gameActive = true;

// Define the width of a bubble (30px)
const bubbleWidth = 30;

function onOpenCvReady() {
    // Simulated webcam feed (for demonstration purposes)
    video = document.createElement('video');
    video.srcObject = new MediaStream([generateTestVideoTrack()]);
    video.play();

    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    // Initialize video capture using OpenCV
    videoCapture = new cv.VideoCapture(video);

    // Load the Haar Cascade XML file for eye detection
    eyeCascade = new cv.CascadeClassifier();
    eyeCascade.load('haarcascade_eye.xml');

    spaceship = document.getElementById('spaceship');

    startEyeDetection();
    startScoring();
    createRedBubbles();
}

function generateTestVideoTrack() {
    // Generate a simulated video track
    const canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    const context = canvas.getContext('2d');
    
    return canvas.captureStream(30).getVideoTracks()[0];
}

function startEyeDetection() {
    const frame = new cv.Mat();
    videoCapture.read(frame);

    // Detect eyes using the eyeCascade
    const eyes = new cv.RectVector();
    eyeCascade.detectMultiScale(frame, eyes);

    // Display the video frame on the canvas
    context.drawImage(
        cv.imshow('canvas', frame),
        0, 0, canvas.width, canvas.height
    );

    // Implement blink detection and spaceship movement logic here
    detectBlink(eyes);

    requestAnimationFrame(startEyeDetection);
}

function detectBlink(eyes) {
    // Implement blink detection logic here based on eye states (open or closed)
    const leftEye = eyes.get(0); // Assuming the left eye is detected first

    // Check if left eye is closed (you need to determine the appropriate thresholds)
    const isLeftEyeClosed = leftEye.width < bubbleWidth;

    // Detect a blink with a delay to prevent double-counting
    if (isLeftEyeClosed && !isBlinking) {
        isBlinking = true;
        blinkCount++;

        // Adjust spaceship position based on the blink (move 3 bubbles' width)
        moveSpaceship(3 * bubbleWidth);

        // Update score based on blink (10 points per second)
        score += 10;

        // Update the score display
        updateScore();

        if (blinkCount === 2) {
            // Double blink detected (pause game or implement level advancement)
            pauseGame();
        }
    } else if (!isLeftEyeClosed) {
        isBlinking = false;
    }

    // Implement blink detection and spaceship movement logic here
}

function moveSpaceship(distance) {
    // Implement spaceship movement logic based on the blink
    let currentLeft = parseInt(spaceship.style.left || '50px');
    currentLeft += distance;

    // Ensure the spaceship stays within the container
    currentLeft = Math.max(0, Math.min(canvas.width - spaceship.offsetWidth, currentLeft));

    spaceship.style.left = currentLeft + 'px';
}

function startScoring() {
    // Implement scoring logic (10 points every second)
    setInterval(() => {
        if (gameActive) {
            score += 10;
            updateScore();

            if (score >= level * 250) {
                // Level advancement logic (increase level and bubble speed)
                level++;
                updateBubbles();
            }
        }
    }, 1000);
}

function updateScore() {
    // Update the displayed score
    const scoreElement = document.getElementById('scoreValue');
    scoreElement.textContent = score;
}

function pauseGame() {
    gameActive = false;

    // Implement pause logic (you need to determine how to pause the game)
    // For example, stop scoring, display a message, or advance to the next level
    clearInterval(scoreUpdateInterval);
    alert('Game paused');
}

function createRedBubbles() {
    // Create and animate red bubbles (you can customize the animation)
    const bubblesContainer = document.getElementById('bubbles-container');

    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('red-bubble');
        bubble.style.left = `${i * bubbleWidth * 6}px`; // Adjust the spacing

        bubblesContainer.appendChild(bubble);
    }

    // Implement animation for red bubbles
    animateRedBubbles();
}

function animateRedBubbles() {
    const redBubbles = document.querySelectorAll('.red-bubble');
    
    redBubbles.forEach(bubble => {
        bubble.style.animationDuration = `${level * 3}s`; // Adjust animation speed
    });
}

function updateBubbles() {
    // Implement changes to bubbles when level increases
    animateRedBubbles();
    gameActive = true;
}

// Start the game when the page loads
onOpenCvReady();

