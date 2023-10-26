// game.js

// Function to capture video frames from the webcam
async function captureVideoFrames() {
    const videoElement = document.getElementById('webcam-video');
    const canvasElement = document.getElementById('game-canvas');
    const context = canvasElement.getContext('2d');

    // Access the webcam
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing webcam: ', error);
    }

    // Continuously capture frames and call detectEyeBlink()
    function captureFrame() {
        context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
        const capturedImageData = canvasElement.toDataURL('image/jpeg'); // Convert frame to image data
        detectEyeBlink(capturedImageData); // Send frame data for eye blink detection
        requestAnimationFrame(captureFrame);
    }

    captureFrame();
}

// Function to detect eye blink using Python server
function detectEyeBlink(capturedImageData) {
    // Send a request to the Python server for eye blink detection
    fetch("YOUR_SERVER_URL/api/eye-blink", {
        method: "POST",
        body: capturedImageData, // Send the captured image data
    })
    .then(response => response.json())
    .then(data => {
        const leftEyeBlink = data.left_eye_blink;
        const rightEyeBlink = data.right_eye_blink;

        // Check for left and right eye blinks and perform game actions
        if (leftEyeBlink) {
            // Perform left action in the game
        } else if (rightEyeBlink) {
            // Perform right action in the game
        }
    })
    .catch(error => {
        console.error("Eye blink detection error: " + error);
    });
}

// Initialize video frame capture
captureVideoFrames();
