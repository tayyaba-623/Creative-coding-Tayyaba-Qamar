// Define variables for the audio, amplitude and bubbles
let audio, amplitude;
let colored_bubbles = [];
// Colors for the bubbles
let colors = [ "#FF007F",
                   "#FFFF00",
                   "#FF0000",
                   "#009900"
]

function preload() {  // Load the audio file
  audio = loadSound('vlog-music-beat-trailer-showreel-promo-background-intro-theme-274290.mp3'); 
}

function setup() {
  createCanvas(550, 550);
  amplitude = new p5.Amplitude();
  audio.play();
  // Produce 48 bubbles
  for(let i = 0; i < 48; i++) { 
    colored_bubbles.push({
      x: random(width),
      y: random(height),
      size: random(10, 50),
      speed: random(0.2, 0.7),
      colors: color(random(90, 240), random(80, 250), random(130, 200), 240)
    });
  }
  colorMode(RGB, 255, 255, 255, 255);
  noStroke();
}

function draw() {
  background(255, 209, 223);
  
  // Animate and draw bubbles background
  for (let bubbles of colored_bubbles) {
    fill(bubbles.colors);
    ellipse(bubbles.x, bubbles.y, bubbles.size);
    bubbles.y -= bubbles.speed;
    // Reset bubbles after they escape the canvas
    if (bubbles.y < - bubbles.size) bubbles.y = height + bubbles.size;
  }
  // Draw a circle in the center of the canvas that reacts to the audio loudness
  let Level = amplitude.getLevel();
  let Size = map(Level, 0, 0.3, 50, 250);
  fill(random(colors));
  ellipse(width/2, height/2, Size);
}

