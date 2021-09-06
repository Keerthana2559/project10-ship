var ship, ship_moving;
var sea;
var invisibleSea;
function preload() {
  shipImg1 = loadAnimation(
    "ship-1.png",
    "ship-2.png",
    "ship-3.png",
    "ship-4.png"
  );

  seaImage = loadImage("sea.png");
}
function setup() {
  createCanvas(900, 900);

  //creating sea and adding animation to it
  sea = createSprite(200, 200, 100, 100);
  sea.addImage("sea", seaImage);
  sea.scale = 0.5;

  //creating ship and adding animation to it
  ship = createSprite(50, 160, 20, 50);

  ship.addAnimation("moving", shipImg1);
  edges = createEdgeSprites();

  //adding scale and position to the ship
  ship.scale = 0.5;
  ship.x = 200;

  //creating invisible sea
  invisibleSea = createSprite(70, 160, 10, 10);
  invisibleSea.visible = false;
}

function draw() {
  //creating a background colour
  background = "blue";

  drawSprites();
}
