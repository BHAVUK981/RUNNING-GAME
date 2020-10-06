var player,playerImage,playerCollide
var coin,coinImage,virus,virusImage,virusGroup;
var backImage,ground,invisibleGround
var score=0;
var v=collectSound,lossSound;


function preload(){
playerImage=loadImage("player.png");
coinImage=loadImage("coin1.png")  
backImage=loadImage("backImage.jpg")
playerCollide=loadImage("player.png")
 virusImage=loadImage("virus.png") 
collectSound=loadSound("collect.mp3")
  lossSound=loadSound("sound.mp3")
}

function setup() {
createCanvas(800,400)
coinGroup=new Group()
 virusGroup=new Group() 
  
  ground=createSprite(0,0,800,400);
  ground.addImage("backImage",backImage);
 ground.scale=2.0;
  ground.x=ground.width/2;
  ground.velocityX=-5;
  
  player=createSprite(0,350,50,50);
  player.addImage("player",playerImage)
  player.changeAnimation("player.png",playerImage)
  player.scale=0.03
  player.velocityX=2
  
  invisibleGround=createSprite(20,400,1500,7)
  invisibleGround.visible=false;
  
  score=0
}

function draw() {
background(600)

 if(ground.x<0){
  ground.x=ground.width/2;
  player.x=ground.width/3
    
 }
  if(keyDown("space")&&player.y>=150){
    player.velocityY=-8
  }
player.velocityY=player.velocityY+0.5
  
  if(coinGroup.isTouching(player)){
    coinGroup.destroyEach()
    score=score+1
    collectSound.play()
  }
  if(virusGroup.isTouching(player)){
    virusGroup.destroyEach()
    player.scale=0.02;
    score=score-2
    lossSound.play()
  }
  
  switch(score){
  case 10: player.scale=0.04; 
      break;
  case 20: player.scale=0.05; 
      break;
   case 30: player.scale=0.06; 
      break;
   case 40: player.scale=0.07; 
      break;
      default: break;
  }
  
    
  switch(score){
  case 10: monkey.scale=0.12; 
      break;
  case 20: monkey.scale=0.14; 
      break;
   case 30: monkey.scale=0.16; 
      break;
   case 40: monkey.scale=0.18; 
      break;
      default: break;
  }
  
  
  
  
spawnCoin()
 spawnVirus() 

player.collide(invisibleGround)

 
 
  
 drawSprites() 
 stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);  
}

 function spawnCoin(){
   
if (frameCount%130===0){

var coin=createSprite(600,random(80,200),10,10);
coin.addImage("coin1",coinImage);
coin.scale=0.06;
coin.velocityX=-2;
coin.lifetime=400;
  
  coinGroup.add(coin);
    }}

  function spawnVirus(){
    if (frameCount%200===0){
var virus=createSprite(600,random(200,400))
      virus.addImage("virus",virusImage)
      virus.scale=0.08;
virus.velocityX=-2
      virus.lifetime=220;
      virusGroup.add(virus);
    }
  }