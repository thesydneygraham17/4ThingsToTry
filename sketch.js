let x = 200;
let speed = 50;
let diameter = 40;
let moving = true;
function setup() {
  createCanvas(1250, 600);
}

function draw() {
  background("lavender");
  ellipse( x, height/2, diameter);
  if (x >= width || x <= 0) {
    speed= speed * -1;
    
  }
  x+= speed;
}
function mouseClicked(){
  if(moving == true){
    noLoop();
    moving = false;
  } else{
    loop();
    moving = true;
  }
  }










 
