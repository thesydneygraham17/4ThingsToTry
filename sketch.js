let x = 200;
let speed = 50;
let diameter = 40;
let moving = true;
function setup() {
  createCanvas(1250, 600);
  let gray = 124;
}

function draw() {
  background("lavender");
  
  ellipse( x, height/2, diameter);
  rect(x, 200, 30, 30);
  fill(gray);
  if (x >= width || x <= 0) {
    speed= speed * -1;
    
  }
  x+= speed;
}

function mouseClicked(){
  if(moving == true){
    noLoop();
    moving = false;
    gray = random(255);
  } else{
    loop();
    moving = true;
  }
  }
 









 
