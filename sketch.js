let l;
let f;
let x0;
let y0;
let s;


function setup() {
  createCanvas(600, 600);
  f = (1 + sqrt(5)) / 2;
  l = 200;
  slider0 = createSlider(0, 1, 1 / f, 0.001);
  slider0.position(width - 200, 10);
  slider0.style('width', '150px');
  slider = createSlider(0.1, 3, 1, 0.001);
  slider.position(width - 200, 30);
  slider.style('width', '150px');
  x0 = 100;
  y0 = 200;
  s = slider.value()
}

function draw() {
  background(220);
  noStroke();
  fill(30,144,255);
  rect(x0, y0, 20, l * (1 - slider0.value()));
  fill(255,99,71);
  rect(x0, y0 + l * (1 - slider0.value()), 20, l * slider0.value());
  
  fill(30,144,255);
  rect(mouseX, mouseY, 20, l* (1 - slider0.value()) * slider.value());
  fill(255,99,71);
  rect(mouseX, mouseY + l * (1 - slider0.value()) * slider.value(), 20, l * slider0.value() * slider.value());
  s = slider.value()
  fill(0)
  text(s, 10, 30);
}