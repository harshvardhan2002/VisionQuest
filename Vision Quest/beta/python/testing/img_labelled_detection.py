import cv2
import numpy as np
import mediapipe as mp
import tensorflow as tf
from tensorflow.keras.models import load_model

# initialize mediapipe
mpHands = mp.solutions.hands
hands = mpHands.Hands(max_num_hands=1, min_detection_confidence=0.7)
mpDraw = mp.solutions.drawing_utils

# Load the gesture recognizer model
model = load_model('mp_hand_gesture')

# Load class names
f = open('gesture.names', 'r')
classNames = f.read().split('\n')
f.close()
print(classNames)

# Initialize the webcam
cap = cv2.VideoCapture(0)

# Read logo1 and resize
logo1 = cv2.imread('thumbsup.png')
size = 250
logo1 = cv2.resize(logo1, (size, size))
# Create a mask1 of logo1
img2gray1 = cv2.cvtColor(logo1, cv2.COLOR_BGR2GRAY)
ret, mask1 = cv2.threshold(img2gray1, 1, 255, cv2.THRESH_BINARY)

# Read logo1 and resize
logo2 = cv2.imread('thumbsdown.png')
size = 250
logo2 = cv2.resize(logo2, (size, size))
# Create a mask1 of logo1
img2gray2 = cv2.cvtColor(logo2, cv2.COLOR_BGR2GRAY)
ret, mask2 = cv2.threshold(img2gray2, 1, 255, cv2.THRESH_BINARY)


while True:
    # Read each frame from the webcam
    _, frame = cap.read()

    x, y, c = frame.shape

    # Flip the frame vertically
    frame = cv2.flip(frame, 1)
    framergb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Get hand landmark prediction
    result = hands.process(framergb)

    # print(result)
    
    className = ''

    # post process the result
    if result.multi_hand_landmarks:
        landmarks = []
        for handslms in result.multi_hand_landmarks:
            for lm in handslms.landmark:
                # print(id, lm)
                lmx = int(lm.x * x)
                lmy = int(lm.y * y)

                landmarks.append([lmx, lmy])

            # Drawing landmarks on frames
            mpDraw.draw_landmarks(frame, handslms, mpHands.HAND_CONNECTIONS)

            # Predict gesture
            prediction = model.predict([landmarks])
            # print(prediction)
            classID = np.argmax(prediction)
            className = classNames[classID]

    # show the prediction on the frame
    # cv2.putText(frame, className, (10, 50), cv2.FONT_HERSHEY_SIMPLEX, 
                #    1, (0,0,255), 2, cv2.LINE_AA)


    # Region of Image (ROI), where we want to insert logo1
    roi = frame[-size-10:-10, -size-10:-10]
 
    # Set an index of where the mask1 is
    if(className == 'thumbs up'):
        roi[np.where(mask1)] = 0
        roi += logo1
    elif(className == 'thumbs down'):
        roi[np.where(mask2)] = 0
        roi += logo2


    # Show the final output
    cv2.imshow("Output", frame) 

    if cv2.waitKey(1) == ord('q'):
        break

# release the webcam and destroy all active windows
cap.release()
cv2.destroyAllWindows()
