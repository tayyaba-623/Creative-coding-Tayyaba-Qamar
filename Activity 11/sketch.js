let microphone;
let grid = [];
let distance = 50;  // Distance between dots

const colors = [
  ['#ff3300', '#ffffff', '#ffde59'],   
  ['#E044A7', '#fce4ec', '#0078ED'],  
  ['#EB5757', '#ffffff', '#5B2071']   
];

let current_colors = colors[0];  

function setup() {
  createCanvas(windowWidth, windowHeight)
  microphone = new p5.AudioIn();
  microphone.start();  // Capture the audio
  createGrid();
}

function draw() {
  background(20, 0, 40);
  let level = microphone.getLevel() * 900;
  let time = millis() / 900;

  for (let i = 0; i < grid.length; i++) {
    let dis = grid[i];
    let distanceToMouse = dist(mouseX, mouseY, dis.x, dis.y);
    let pulse = max(0, 1 - distanceToMouse / 210);  // Check the closness of each dot to mouse
    let Size = dis.baseSize + pulse * 32 + sin(time * 3 + dis.phase) * 3 + level * 21; // Set dot size based on audio loudness and closeness to mouse
    let Color = color(current_colors[i % current_colors.length]); // Take color from the current color array
    Color.setAlpha(map(pulse, 0, 1, 111, 253));
    fill(Color);
    noStroke();   // Remove outline from the dots
    circle(dis.x, dis.y + sin(time * 2 + dis.phase) *3, Size);
  }
}

function createGrid() {
  grid = [];
  for (let x = 0; x < width; x += distance) {  // Move across the canvas in the x direction
    for (let y = 0; y < height; y += distance) {  // Move across the canvas in the y direction
      grid.push({ x, y, baseSize: random(10, 22), phase: random(TWO_PI) });
    }
  }
}

function keyPressed() {
  // Press key 1, 2, 3 to change the color of the dots 
  let colors_index = parseInt(key) - 1;
  if (colors_index >= 0 && colors_index < colors.length) {
    current_colors = colors[colors_index];
  }
}
