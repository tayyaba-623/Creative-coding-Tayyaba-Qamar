function setup() {
  createCanvas(500, 500);   // Creates a canvas
  angleMode(DEGREES);
  colorMode(HSB, 360, 90, 90, 160);    // HSB colors
  rectMode(RADIUS);
  noFill();
}

function draw() {
  background(0, 0, 0, 9);
  translate(width / 2, height / 2);
  let count = 65;     // Total number of shapes to be drawn
  let time = frameCount;
  for (let i = 0; i < 65; i++) {
    let size = map(i, 6, count, 650, 15);
    let angle = sin(time * 0.4 + i * 5) * 70; // Determine the rotating angle
    stroke((time + i * 5) % 340, 70, 90, 90);
    push();
    rotate(angle);  // To rotate the shapes
    rect(10, 10, size, size);
    pop();
  }
}