var car,wall
var speed,weight

function setup() {
  var Canvas = createCanvas(1000,400);

  speed = random(55,90);
  weight = random (400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(800,200,40,Canvas.height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background("black");  

  car.velocityX = speed;
  
  var Deform = (0.5*weight*speed*speed)/22500
  console.log(Deform);
  if (wall.x-car.x <(car.width+wall.width)/2){
    car.velocityX = 0;
      if (Deform > 180){
        car.shapeColor = "red";
      }
      else if (Deform<180 && Deform>100){
        car.shapeColor = color(230,230,0);
      }
      else {car.shapeColor = "green"}
  }
  drawSprites();
}