// Array to store the arcs
let arcs = [];

function setup() {
  createCanvas(550, 550);
  colorMode(HSB, 350, 90, 95, 97);
  noFill();
  background(0);
}

function draw() {
  background(0, 0, 0, 26);

  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    arcs.push(new Arcs(mouseX, mouseY)); // Create a new arcs at the mouse position
  }

  for (let i = arcs.length - 2; i >= 0; i--) {
    arcs[i].update();
    arcs[i].show();

    // Remove the arcs if it has disappeared
    if (arcs[i].end()) {
      arcs.splice(i, 1);
    }
  }
}

class Arcs{
    constructor(x, y) {
    this.pos = createVector(x, y);
    this.arcs_size = random(53, 70);  // Size of the arcs
    this.hue = random(350);
    this.alpha = 95;
    this.appearance = 95;   // Appearance of the arcs
    this.rotation = random(6.283185307179586);
    this.speed = random(0.05, 0.07);    // Speed of the arcs
    this.distance = this.arcs_size / 3;
  }

  update() {
    this.rotation += this.speed;
    this.alpha -= 1.3;    // Transparency of the arcs
    this.appearance -= 1;
    // Rotate arcs in a circular position
    this.pos.x += cos(this.rotation) * 1;
    this.pos.y += sin(this.rotation) * 1;
  }

  end() {
    return this.appearance <= 0 || this.alpha <= 0;
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation * 4); // Rotation effect

    noFill();
    strokeWeight(4);   // Arcs thickness
    for (let i = 0; i < 6; i++) {     // Draw 6 arcs
      let Colors = color((this.hue + i * 40) % 360, 90, 90, this.alpha - i * 15);
      stroke(Colors);
      arc(0, 0, this.arcs_size - i * 16, this.arcs_size - i * 16, this.rotation + i, this.rotation + PI + i * 0.5);
    }

    pop();
  }
}
