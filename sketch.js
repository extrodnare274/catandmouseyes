var cat
var bgImg
var mouse
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png")
    mouseimg2 = loadAnimation("images/mouse2.png")
    catimg3 = loadAnimation("images/cat3.png")
    mouseimg3 = loadAnimation("images/mouse3.png")
    catimg4 = loadAnimation("images/cat4.png")
    mouseimg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catSitting", catimg1)
    cat.scale = 0.2
    
    
   
   mouse = createSprite(200,600)
   mouse.addAnimation("mousegift", mouseimg1)
   mouse.scale = 0.2


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
              cat.velocityX = 0 
              cat.x = 400
              cat.addAnimation("catlick", catimg3)
              cat.scale = 0.2
              cat.changeAnimation("catlick")
              mouse.addAnimation("handsRaised", mouseimg2)
              mouse.scale = 0.15
              mouse.changeAnimation("handsRaised")


              
    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX = -3
    cat.addAnimation("catwalk",catimg2)
    cat.changeAnimation("catwalk")
    mouse.addAnimation("mouseLooking", mouseimg4);
    mouse.changeAnimation("mouseLooking")
    mouse.frameDelay = 25
}

}
