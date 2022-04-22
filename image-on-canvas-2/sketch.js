
let frogImg;
let princeImg;


function preload(){
  frogImg = loadImage("assets/frog.png")
  princeImg = loadImage("assets/prince.png")

}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer");

  rec
}

function draw() {
  background(220);
  
  if(mouseIsPressed){
    image(princeImg, 0, 50, 100*4, 60*4)
  }else{
    image(frogImg, 0, 0)
  }
 
}

