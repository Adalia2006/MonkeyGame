var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var score=0;
var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  banana = createSprite(400,200,20,20);
  banana.y = Math.round(random(400,200));
   banana.addImage(bananaImage);
   banana.scale=0.05;
  banana.velocityX = -3;
  
  obstacle = createSprite(800,315,20,20);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-3;
  obstacle.x = Math.round(random(800,200));
  
  score=0;
  SurvivalTime=0;
  
  FoodGroup = new Group();
  ObstacleGroup = new Group();
  
}


function draw() {
background(255);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:"+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+survivalTime,100,50);
  
  if(ground.x<0){
   ground.x = ground.width /2; 
  }
  
  if(keyDown("space")){
    monkey.velocityY =-12;  
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  Food();
  Obstacle();  
  monkey.collide(ground);
  
  if(monkey.isTouching(FoodGroup)){
    score=score+1;
  }
  if(monkey.isTouching(ObstacleGroup)){
    score=0;
    survivalTime=0; 
  }
  drawSprites();  
}
function Food(){
   if (frameCount % 80 === 0){ 
   var banana = createSprite(400,200,20,20);  
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.05; 
   banana.velocityX = -3;
   banana.lifetime = 300;
   FoodGroup.add(banana);
   }
}


function Obstacle(){
   if (frameCount % 300 === 0){ 
   var Obstacle = createSprite(800,315,20,20);  
   Obstacle.x = Math.round(random(800,200));
   Obstacle.addImage(obstaceImage);
   Obstacle.scale=0.2; 
   Obstacle.velocityX = -3;
   Obstacle.lifetime = 300;
   ObstacleGroup.add(obstacle);
   }
}

















