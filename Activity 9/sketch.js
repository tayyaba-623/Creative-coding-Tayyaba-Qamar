// Benin Population data from 2016 to 2013
let Population_data = [
  {year: 2016, population: 11697842},
  {year: 2017, population: 12039780},
  {year: 2018, population: 12383347}, 
  {year: 2019, population: 12726755},
  {year: 2020, population: 13070169},
  {year: 2021, population: 13413417},
  {year: 2022, population: 13759501},
  {year: 2023, population: 14111034},
];

// Let colors of the bars
let bar_colors = [ "#FF007F",
                   "#FFFF00",
                   "#FF0000",
                   "#009900",
                   "#660066",
                   "#FF8000",
                   "#009999",
                   "#006600"
]

function setup() {
  createCanvas(900, 500);
  background(255);
  textAlign(CENTER);
}

function draw() {
  background(245);
  let margin = 100;
  let chart_width = width - 2 * margin;  // Width of the bar
  let chart_height = height - 2 * margin;  // Height of the bar
  let bar_width = chart_width / Population_data.length;
  
  // Maximum population
  let Maximum_population = max(Population_data.map(d => d.population));
  
  strokeWeight(1);
  line(margin, margin, margin, height - margin); // Draw Y-axis
  line(margin, height- margin, width - margin, height - margin); // Draw Y-axis
  
  // Bars 
  for(let i = 0; i < Population_data.length; i++) {
    let x = margin + i * bar_width;
    let bar_height = map(Population_data[i].population, 0,  Maximum_population, 0, chart_height);
    fill(bar_colors[i % bar_colors.length]);  // Adding different colors in the bar
    rect(x, height - margin - bar_height, bar_width * 0.7, bar_height);
    
    // Year markers
    fill("#000000");
    text(Population_data[i].year, x + bar_width * 0.5, height - margin +  13);
  }
  
  // Chart title
  fill("#000000");
  textSize(21);
  text("Benin Population Growth (2016-2023)", width / 2, 35);
  
  for(let i = 0; i <= 6; i++) {
    let population = (Maximum_population * i) /6;
    let v = map(population, 0, Maximum_population, height - margin, margin);
    textSize(13);             // Set size before drawing text
    fill("#000000");
    text((population / 1e6).toFixed(1) + "M", margin - 34, v + 4);  // Show   population numbers on the left side of the bar
    textSize(12);  // Text size of the years mention below the bars
    stroke(170);
    line(margin - 4, v, width - margin, v);  // Draw horizontal line grid to show the population range
  }
  
}