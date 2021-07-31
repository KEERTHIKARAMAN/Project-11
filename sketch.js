var jacksonImg,jackson;
var pathImg,path;

function preload(){

  pathImg = loadImage("path.png");
  jacksonImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

//creating boy running
jackson = createSprite(180,340,30,30);
jackson.scale =0.09;
jackson.addAnimation("running",jacksonImg);
}


function draw() {
  background(0);
  
  if(path.y>400){

    path.y=height/2;
  }

  drawSprites();

}