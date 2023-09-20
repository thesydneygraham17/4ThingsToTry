let x = 200;
let speed = 50;
let diameter = 40;
let moving = true;
function setup() {
  createCanvas(1250, 600);
  let gray = 124;
}

function draw() {
  if (millis() > 10000){
    background("green");
  } else{
  background("lavender");
  } 

rect(x, 200, 30, 30);
  //same with the rectangle fading in, couldn't get it to separate from the ellipse and everything was mixed up and not fading//
  ellipse( x, height/2, diameter);
  fill(gray);
  if (x >= width || x <= 0) {
    speed= speed * -1;
    
  }
  x+= speed;
}
//could not figure out for the life of me how to separate the circle and rectangle, need clarification on some of the numbers and what they mean//

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
  function keyPressed(){
    if(key == 'k'|| key == 'K'){
    }
  }
  function keyPressed(){
    console.log("you pressed a key!");
  }
 









 
