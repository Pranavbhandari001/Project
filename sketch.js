

var bot,virus, Obstacle , ground ,edges, bots,Obstacles,Snakes,Viruses,Pines,anime,backgrounds;






function preload(){

Snakes=loadImage("Snakes.png");

Viruses=loadImage("Virus.png");
Pines=loadImage("Pines.png");
Obstacles=loadImage("Obstacles.png");

bots = loadImage("botss.png");
anime = loadImage("anime.jpg");

}
function setup(){
    createCanvas(1000,400);
  bot = createSprite(250,300,90,90)  
  bot.addImage(bots);
  bot.scale=0.6;

edges=createEdgeSprites();

//background = createSprite(0,0,1000,400);
//background.addImage(anime);
//  background.scale=5;
}
function draw(){
background(256);

bot.collide(edges);

background.velocityX = -2;
if (background.x < 0){
   background.x = background.width/2;
 }
botjump();

 spawnObstacles();
spawnViruses();
   drawSprites();

}
 
function botjump(){
   if(keyDown("space")){
      bot.velocityY=-7;
      
   }
   bot.velocityY = bot.velocityY + 0.8;

}



function spawnObstacles(){
if (frameCount % 200 === 0){
    Obstacle = createSprite(1000,400,90,80);

var rand = Math.round(random(1,3))
switch(rand){
   case 1:Obstacle.addImage(Snakes)
   break;
   case 2:Obstacle.addImage(Pines)
   break;
   case 3:Obstacle.addImage(Obstacles);
   break;
   default:break;
}
Obstacle.scale = 0.5;
Obstacle.velocityX = -2;



}

};


function spawnViruses(){
 if(frameCount % 60 ===0) {
    virus = createSprite(800,150,50,50);
    virus.y = random(50,200);
    virus.velocityX=-5;
    virus.shapeColor="black";
    virus.lifetime = 200;
 }

}