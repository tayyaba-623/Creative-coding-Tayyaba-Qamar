function setup() {
  createCanvas(700, 400);
  background(232);
  
  // Car body 
  fill(255, 0, 127);  // Pink color
  rect(170, 251, 359, 61, 22);  // Lower body
  rect(226, 201, 238, 65, 22);  // Cabin
  
  // Car windows
  fill(153, 255, 255);   // Sky blue color
  rect(235, 214, 51, 39, 11); // Left window
  rect(292, 214, 51, 39, 11); // Middle left
  rect(348, 214, 51, 39, 11); // Middle right
  rect(404, 214, 51, 39, 11); // Right window
  
  // Wheels
  fill(0);  // Black color
  ellipse(245, 321, 58, 58); // Left wheel
  ellipse(450, 321, 58, 58); // Right wheel
  
  // Small circle inside the wheel
  fill(255);  // White color
  ellipse(245, 322, 26, 26); // Left 
  ellipse(450, 322, 26, 26); // Right
  
  // Car Bumper
  fill(255, 255, 0);  // Yellow color
  rect(161, 266, 11, 31);
  
  // Headlight
  fill(255);  // White color
  ellipse(160, 277, 11, 11);
  
  // Taillight 
  fill(255, 0, 0);  // Red color
  ellipse(529, 276, 11, 11);
  
  // Ground line
  stroke(120);   // Grey color
  strokeWeight(3);
  line(2, 352, width, 352);
} 
