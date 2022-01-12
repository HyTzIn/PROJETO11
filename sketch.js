var runner;
var runnerImg;
var rua;
var ruaImg;
var bordainvisivel1;
var bordainvisivel2;

function preload(){


  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");

  ruaImg = loadImage("path.png");

}

function setup(){

  createCanvas(400,400);


  rua=createSprite(200,200);
  rua.velocityY = 5;
  rua.addImage(ruaImg);
  rua.scale=1.2;

 runner=createSprite(180,340,30,30);
 runner.addAnimation("correndo",runnerImg);
 runner.scale = 0.1;

 bordainvisivel1 = createSprite(0,0,100,800);
 bordainvisivel1.visible = false;

 bordainvisivel2 = createSprite(410,0,100,800);
 bordainvisivel2.visible = false;
}

function draw() {
  background("black");

  
   
  if(rua.y > 400){

   rua.y = height/2;}
  
  runner.x = World.mouseX;

  runner.collide(bordainvisivel1);
  runner.collide(bordainvisivel2);



drawSprites();
}
