let mySound;

function preload() {
  mySound = loadSound("song.mp3");
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer")
}

function draw() {
  background(220);
  text("Click here to play", 10, 20);
}

function mousePressed() {
  if(mySound.isPlaying() != true){
    mySound.play();
  }
  
}