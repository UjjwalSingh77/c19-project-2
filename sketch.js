var firststage
var secondstageImg,laststageImg,obstacle
var score = 0
var bg
var space
var done
var moon
var obstacelesGroup
function preload(){

firststageImg  = loadImage("firststage.png")
secondstageImg = loadImage("secondstage.png")
laststageImg = loadAnimation("laststage.png")
spaceImg = loadImage("download.jpg")
obstacleImg = loadImage("obstacle.png")
endImg = loadImage("end2.png")
moonImg = loadImage("moon.png")
gameoverImg = loadImage("boom.png")
youwin = loadImage("you win.png")
}

function setup() {
   
     
createCanvas(windowWidth,windowHeight); 
text("Score:"+score,20,20) 
textSize(40)

  spaceshuttle = createSprite(400,500)
  spaceshuttle.addImage(firststageImg)
  spaceshuttle.scale = 0.5
  score = 0;
 obstacelesGroup = new Group()
 moonGroup  = new Group()
 
}

function draw() {
    
   background(spaceImg)
   textSize(40)
   fill("red")
    text("Score:"+score,30,30) 

   
    console.log(score)
    score = score + Math.round(getFrameRate()/60);
    

 if (frameCount % 120 ===0) {
    spawnObstacles()

 }
if (score>500) {
    
    spaceshuttle.addImage(secondstageImg)
    obstacelesGroup.velocityYEach = +4
}
if (score>1000) {
    
    spaceshuttle.addImage(thirdstageImg)
    obstacelesGroup.velocityYEach = +7
}
if (score>1500) {
   spawnMoon();
   
}

  if (spaceshuttle.isTouching(obstacelesGroup)) {
    obstacelesGroup.destroyEach()
  end = createSprite(300,300)
    end.addImage(gameoverImg)
    textSize(30)
    fill("red")
    text("GAME OVER",widht/2,height/2)
    
    
    spaceshuttle.destroy()
    obstacelesGroup.velocityYEach = 0
    text.depth>bg.depth
    text.depth = text.depth+1
    obstacelesGroup.destroyEach()
}

if (spaceshuttle.isTouching(moonGroup)) {
    done = createSprite(300,300,300,300)
    done.addImage("youwin")
    done.scale = 0.9
    moonGroup.destroy()
    spaceshuttle.destroy()
}





spaceshuttle.x = World.mouseX
  

drawSprites();

}
if (gamestate === end) {
    spaceshuttle.changeImage(endImg)
obstacle.destroy()


}


function spawnObstacles() { 

obstacle = createSprite(width,10,20,20) 
obstacle.x = Math.round(random(50,width-50));
obstacle.addImage(obstacleImg)
obstacle.scale = 0.5
obstacle.velocityY = +3
obstacelesGroup.add(obstacle)
}  
function spawnMoon(){
    moon = createSprite(width/2,height/2)
    moon.addImage(moonImg)
moon.velocityY = 1
moonGroup.add(moon)
moon.depth>bg.depth
moon.depth = moon.depth+1
}