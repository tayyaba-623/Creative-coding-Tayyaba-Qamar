var img;
function preload() {
  img = loadImage("Mountains.jpeg");   // Load an image
} 

function setup() {
  createCanvas(500, 500);   // Create a Canvas
  background(255);     // Background color of the canvas
}

function draw() {
  image(img, 0, 0);  // Show the image at position (0, 0)
  let p = map(mouseX, 0, width, 3, 30); // Convert mouseX position to a number between 3-30
  p = floor(p);
  filter(POSTERIZE, p);  // Apply Posterize filter
}