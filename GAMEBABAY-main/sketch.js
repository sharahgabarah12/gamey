var astorid,rocket,space,gameOver;
var Travel = 0
//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){

  rocket =loadAnimation("rocket_ship.webp");
  gameOver =loadAnimation("game_over.jpeg");
  astorid =loadAnimation("astorid.png");
}
function setup(){

//create the canvas and adjust the window sizes to suit the device 
createCanvas(windowWidth, windowHeight);

space=createSprite(width/2,200);
space.addImage(2019-deep-space-background.jpeg);
space.velocityX = -4;

}

function draw() {

  console.log("Hello!");
  if(gameState===PLAY){

  background(0);

  //code to reset the background
if (space.x > 0) {
  space.x = 2,200;
}
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Space Travel: "+ SpaceTravel,width+150,30);
  }

function createCash() {
   // Modify the positions of cash 
   if (World.frameCount % 200 == 0) {
    var astorid = createSprite(Math.round(random(1150, 50),40, 10, 10));
    astorid.addImage(astoridImg);
  astorid.scale=0.12;
  astorid.velocityX = 6;
  astorid.lifetime = 200;
  astoridG.add(cash);
   }
}
