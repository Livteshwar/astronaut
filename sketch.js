var issImg,iss;
var bathImg,brushImg,drinkImg,eatImg,gymImg,gymImg2,moveImg,sleepImg;
var ast;



function preload(){
  issImg=loadImage("iss.png");
  bathImg=loadAnimation("bath1.png","bath2.png");
  brushImg=loadAnimation("brush.png");
  drinkImg=loadAnimation("drink1.png","drink2.png");
  eatImg=loadAnimation("eat1.png","eat2.png");
  gymImg=loadAnimation("gym1.png","gym2.png");
  gymImg2=loadAnimation("gym11.png","gym12.png");
  moveImg=loadAnimation("move.png","move1.png");
  sleepImg=loadAnimation("sleep.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200);
  iss.addImage(issImg);
  iss.scale=0.2;

  ast=createSprite(400,200);
  ast.addAnimation("sleeping",sleepImg);
  ast.scale=0.1;
  
}

function draw() {
  background(255,255,255);  

  if(keyDown("UP_ARROW")){
    ast.addAnimation("bathing",bathImg);
    ast.changeAnimation("bathing",bathImg);
    ast.y=350;
    ast.velocityX=0;
    ast.velocityY=0;
  }
  if(keyDown("down")){
    ast.addAnimation("brushing",brushImg);
    ast.changeAnimation("brushing",brushImg);
  }
  if(keyDown("left")){
    ast.addAnimation("drink",drinkImg);
    ast.changeAnimation("drink",drinkImg);
  }
  if(keyDown("right")){
    ast.addAnimation("eating",eatImg);
    ast.changeAnimation("eating",eatImg);
  }
  if(keyDown("q")){
    ast.addAnimation("gyming",gymImg);
    ast.changeAnimation("gyming",gymImg);
  }
  if(keyDown("w")){
    ast.addAnimation("gyming2",gymImg2);
    ast.changeAnimation("gyming2",gymImg2);
  }
  if(keyDown("e")){
    ast.addAnimation("moveing",moveImg);
    ast.changeAnimation("moveing",moveImg);
  }
  if(keyDown("r")){
    ast.addAnimation("sleeping",sleepImg);
    ast.changeAnimation("sleeping",sleepImg);
  }
  drawSprites();
}