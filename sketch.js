var path, pathImage;
var track, trackImage; 
var runner, runner_running;

function preload(){
  //pre-load images
  pathImage.loadAnimation("path.png");
  runner_running.loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addAnimation(pathImage);
  path.velocityY = 4;
  path.scale=1.2;

  runner.addAnimation(runner_running);

}

function draw() {
  background(0);
  if (path.y > 400){
    path.y = height/2;
  }
   drawSprites();
}
