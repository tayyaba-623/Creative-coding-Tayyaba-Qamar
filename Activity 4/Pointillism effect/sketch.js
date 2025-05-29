var img,x,y;
function preload() {
  img = loadImage("Cake image.jpeg");  // Load an image
}

function setup() {
  createCanvas(500, 500); // Create a canvas
  background(0);   // Background color of the canvas
  noStroke();      // Removing the stroke around ellipses
}

function draw() {
  for(let i = 0; i < 5; i++) {  // Use a loop to draw 5 ellipses per frame
    x = random(img.width);    // Choose a random x-coordinate from the image 
    y = random(img.height);   // Choose a random y-coordinate from the image 
    p = img.get(x,y);
    fill(p);
    ellipse(x,y,20,20);    // Draw an ellipse
  }
}