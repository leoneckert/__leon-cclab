let noiseCounter = 0;
let x = 0;
let deg = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
  
  background(20, 50, 130);
  
}

function draw() {
  deg = deg + 0.1;
  let rad = radians(deg);
  let r = map(sin(rad), -1, 1, 0, 255);
  
  fill(r, 0, 0);
  noStroke();
  
  let y = map( noise(noiseCounter), 0, 1, 150, 250);
  
  
  circle(x, y, 2);
  
  let step = 0.02;
  noiseCounter = noiseCounter + step;
  
  x = x + 1;
  
  if(x>width){
    x = 0;
  }
  
}