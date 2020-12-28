var thickness ;
var wall;
var speed;
var weight;
var bullet;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
bullet=createSprite(50, 200, 50, 50);
thickness=random(22, 83);
speed=random(223, 321);
weight=random(30, 52);
wall=createSprite(1200, 200, height/2);
}

function draw() {
  background(255,255,255);  
  if (hasCollided(bullet, wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor=color(255, 0, 0);
}
if(damage<10){
  wall.shapeColor=color(0, 255, 0);
}
  }
  bullet.display();
  wall.display();
  drawSprites();
}
function hasCollided(wall, bullet)
{
  bulletRightEdge=bullet.x + bullet.width;
  wall.leftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
