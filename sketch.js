var bullet;
var wall;
var speed;
var weight;
var deformation;
var thickness;
var damage
function setup() {
  createCanvas(1600,400);
  speed =   Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83))
  wall = createSprite(900,200, thickness, height);
  wall.shapeColor = "grey";
  bullet = createSprite(400,400,20,20);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;
  damage = 0.5 * weight * speed * speed /(thickness*thickness*thickness);
}

function draw() {
  background("white");  
  drawSprites();
  textSize(20)
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
      if(damage<10){
        wall.shapeColor = "green"
        fill("green")
        text("This material is accepted for making the wall",400,200)
        text("Reload this site to check again",400,300)
      }
      if(damage>10){
        wall.shapeColor = "red"
        fill("red")
        text("This material is rejected for making the wall",400,200)
        text("Reload this site to check again",400,300)
      }
  }
  fill("brown")
  textSize(15)
  text(thickness,120,200)
  text(speed,120,250)
  text(weight,120,300)
  text("Thickness :",40,200)
  text("Speed : ",50,250)
  text("Weight :",50,300)
  textSize(30)
  fill("blue")
  text("Reliability Of The Walls When Bullets Hit Them.",200,50)

}

