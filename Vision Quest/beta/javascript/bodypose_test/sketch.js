function setup() {
    var canvas = createCanvas(1280, 720);
    canvas.parent('p5js-canvas');
    capture = createCapture(VIDEO);
    capture.size(width, height);
    capture.hide();
    // thumbsup = loadImage("thumbsup.png");
}

function draw() {
    // background(255);
    // image(capture, 0, 0, 480, 360);

    background(220);
    // translate(capture.width, 0);
    // scale(-1, 1);
    image(capture, 0, 0, width, height);
    // predictgesture();
}
