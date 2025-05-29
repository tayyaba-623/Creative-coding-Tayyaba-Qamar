var img,x,y;
function preload() {
  img = loadImage("Icecream.jpeg");  // Load an image
}

function setup() {
  createCanvas(600, 450);   // Create the canvas
  background(255);// Background color of the canvas
  noStroke();
}

function draw() {
  // Retrive the current mouse position
  x = mouseX;
  y = mouseY;
  image(img,0,0);
  var i = get(x,y);
  fill(i);  // Fill the rectangle with the sampled color
  rect(x,y,60,60,8);  // Draw a rounded rectangle at the mouse point
}