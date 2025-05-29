function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);

  noStroke();
  fill(0, 255, 0);  // Green color
  ellipse(200, 260, 160, 101);  // Body
  ellipse(200, 160, 110, 112); // Head

  stroke(0);
  strokeWeight(2);
  line(175, 110, 160, 60); // Left antenna
  line(225, 110, 240, 60); // Right antenna
  fill(255, 0, 0); 
  noStroke();  // Removing the stroke from the ellipse
  ellipse(160, 60, 13, 13); // Left antenna tip
  ellipse(240, 60, 13, 13); // Right antenna tip

  // Eyes
  fill(255);
  ellipse(180, 145, 20, 40); // Left eye
  ellipse(220, 145, 20, 40); // Right eye
  fill(0);
  ellipse(180, 145, 10, 10); // Left pupil
  ellipse(220, 145, 10, 10); // Right pupil

  noFill();
  stroke(0);
  strokeWeight(2);
  noFill();
  bezier(180, 180, 190, 200, 210, 200, 220, 180); // Adding bezier curve for the natural smile
}
