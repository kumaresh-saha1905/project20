var car ,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  car.shapeColor="lightblue";
  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1500,200,60,200);
  wall.shapeColor="pink";
  car.velocityX=speed;
}

function draw() {
  background("white");  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/2;
  }
  if(deformation>180){
    car.shapeColor="red";
  }
  if(deformation>100 && deformation<180){
    car.shapeColor="yellow";
  }
  if(deformation<100){
    car.shapeColor="green";
  }
  drawSprites();
}