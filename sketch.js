var cat , mouse ;
var gardenImg , garden ;
var catAni , catImg ,catImg2;
var mouseAni , mouseImg , mouseImg2;
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catAni = loadAnimation("images/cat2.png","images/cat3.png");
    mouseAni = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat4.png");
    mouseImg2 = loadImage("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(250,675,50,50);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1 ;
    mouse.width = 100 ;
    cat = createSprite(750,675,50,50);
    cat.addImage(catImg);
    cat.scale = 0.15;
    cat.width = 150 ;
    
    console.log(cat.width);
    console.log(mouse.width);
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2 ){
        cat.velocityX = 0;
        mouse.velocityX = 0;
        cat.addImage("catRunning",catImg2);
        mouse.addImage("mouseTeasing",mouseImg2);
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseAni);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 15;
  }
  if(keyCode === LEFT_ARROW){
      cat.addAnimation("catRunning",catAni);
      cat.changeAnimation("catRunning");
      cat.velocityX = -1 ;
  } 

}
