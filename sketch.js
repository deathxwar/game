const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player;
var zombieArr=[],zombieArr2 = [];
var Background;
var bulletArr=[];
var bullet;
var bulletDir=1;
var wall1,wall2,wall3,wall4,wall6,wall7,wall8,wall9,wall10,wall11,wall12;  
var healthbar;
var zombie,zombie2;
var zombieAttackimg,zombieAttack;
var bgsound;
var score = 0;
var flag = 0
var pistolSound;
var frame = 500;
var gameOver,gameOverImage;
var zombieBite;
var PLAY;
var END;
var gameState = PLAY
function preload(){
    Background =loadImage("zombieBackground.gif")
    //zombieAttackimg = loadAnimation("zombieattack/0.png","zombieattack/1.png","zombieattack/2.png",
    //"zombieattack/3.png","zombieattack/4.png","zombieattack/5.png","zombieattack/6.png",
   // "zombieattack/7.png","zombieattack/8.png")
    bgsound = loadSound("sound/background.wav")
    pistolSound = loadSound("sound/pistol.wav")
    gameOverImage = loadImage("images.png")
    zombieBite =  loadSound("sound/zombieBite.wav")
    
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-150);
    healthbar = new HealthBar();
    player = new Player(500,200)
    wall1   = createSprite(730,80,1030,30)
    wall2   = createSprite(730,610,1030,30)
    wall3   = createSprite(250,480,30,280)
    wall4   = createSprite(250,150,30,100)
    wall5   = createSprite(1260,480,30,280)
    wall6   = createSprite(1260,140,30,150)
    wall7 = createSprite(100,170,300,30)
    wall8 = createSprite(100,340,300,30)
    wall9 = createSprite(1380,170,270,30)
    wall10 = createSprite(1380,340,270,30)
    wall11 = createSprite(1500,320,100,230)
    wall12 = createSprite(0,340,100,270)

    wall1.visible=false
    wall2.visible=false
    wall3.visible=false   
    wall4.visible=false
    wall5.visible=false
    wall6.visible=false
    wall7.visible=false
    wall8.visible=false
    wall9.visible=false
    wall10.visible=false
    wall11.visible=false
    wall12.visible=false

    
}

function draw(){
    background(Background)
    //health bar
    textSize(20)
    fill(211,94,96)
    text('HealthBar',60,70)
    // wall
    player.player.collide(wall1)
    player.player.collide(wall2)
    player.player.collide(wall3)
    player.player.collide(wall4)
    player.player.collide(wall5)
    player.player.collide(wall7)
    player.player.collide(wall8)
    player.player.collide(wall9)
    player.player.collide(wall10)
    player.player.collide(wall11)
    player.player.collide(wall12)
    if(gameState === PLAY){
        if(frameCount%frame===0){
            zombie=new Zombie(20,290)
            zombieArr.push(zombie)
            zombie.zombie.setCollider('circle',0,0,40)
            flag =0 
           // zombie.zombie.velocityX = player.player.velocityX
            //zombie.zombie.velocityY = player.player.velocityY
        }
        if(frameCount%frame===0){
             zombie2 = new Zombie(1475,290)
             zombieArr2.push(zombie2)
             zombie2.zombie.setCollider('circle',0,0,40)
             flag = 0
        }
        for(var i = 0;i<zombieArr.length;i++){
            zombieArr[i].display();
            zombieArr[i].zombie.attractionPoint(0.5,player.player.x,player.player.y)
            zombieArr[i].zombie.collide(wall1)
            zombieArr[i].zombie.collide(wall2)
            zombieArr[i].zombie.collide(wall3)
            zombieArr[i].zombie.collide(wall4)
            zombieArr[i].zombie.collide(wall5)
            zombieArr[i].zombie.collide(wall6)
            zombieArr[i].zombie.collide(wall7)
            zombieArr[i].zombie.collide(wall8)
            zombieArr[i].zombie.collide(wall9)
            zombieArr[i].zombie.collide(wall10)
            zombieArr[i].zombie.collide(wall11)
            zombieArr[i].zombie.collide(wall12)

            if(zombieArr[i].zombie.collide(player.player)&&flag===0){
                healthbar.damage();
                zombieBite.play();
                flag = 1
            }
          }  
          for(var i = 0;i<zombieArr.length;i++){
            zombieArr2[i].display();
            zombieArr2[i].zombie.attractionPoint(0.5,player.player.x,player.player.y)
            zombieArr2[i].zombie.collide(wall1)
            zombieArr2[i].zombie.collide(wall2)
            zombieArr2[i].zombie.collide(wall3)
            zombieArr2[i].zombie.collide(wall4)
            zombieArr2[i].zombie.collide(wall5)
            zombieArr2[i].zombie.collide(wall6)
            zombieArr2[i].zombie.collide(wall7)
            zombieArr2[i].zombie.collide(wall8)
            zombieArr2[i].zombie.collide(wall9)
            zombieArr2[i].zombie.collide(wall10)
            zombieArr2[i].zombie.collide(wall11)
            zombieArr2[i].zombie.collide(wall12)
            if(zombieArr2[i].zombie.collide(player.player)&&flag===0){
                healthbar.damage();
                zombieBite.play();
                flag = 1
            }
          }  
          for(var i = 0;i<zombieArr2.length;i++){
            zombieArr2[i].display();
          }  
        if(keyWentDown('space')){
            if(bulletDir===1){
                bullet = new Bullet(player.player.x+50,player.player.y+33,bulletDir)
                pistolSound.play();
            }
            if(bulletDir===0){
                bullet = new Bullet(player.player.x-40,player.player.y-33,bulletDir)
                pistolSound.play();
            }
            if(bulletDir===2){
                bullet = new Bullet(player.player.x+34,player.player.y-55,bulletDir)
                pistolSound.play();
            }
            if(bulletDir===3){
                bullet = new Bullet(player.player.x-32,player.player.y+40,bulletDir)
                pistolSound.play();
            }
            bulletArr.push(bullet)
        }
        for(var i = 0;i<bulletArr.length;i++){
            bulletArr[i].display();
          }  
        player.display();
            //player movement
        if(keyDown("a")){
            player.moveleft();
            bulletDir=0
        }
        if(keyDown("d")){
            player.moveright();
            bulletDir=1
        }
        if(keyDown("w")){
            player.movetop();
            bulletDir=2
        }
        if(keyDown("s")){
            player.movedown();
            bulletDir=3
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall1)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall2)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall3)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall4)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall5)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall6)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall7)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall8)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall9)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall10)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall11)){
                bulletArr[o].body.destroy();
            }
        }
        for(o=0;o<bulletArr.length;o++){
            if(bulletArr[o].body.isTouching(wall12)){
                bulletArr[o].body.destroy();
            }
        }
       for(i =0;i<=zombieArr.length-1;i++){
           for(o=0;o<bulletArr.length;o++){
               if(zombieArr[i].zombie.isTouching(bulletArr[o].body)){
                   zombieArr[i].zombie.destroy();
                   bulletArr[o].body.destroy();
                   score++
               }
           }
       }
       for(i =0;i<=zombieArr2.length-1;i++){
            for(o=0;o<bulletArr.length;o++){
                if(zombieArr2[i].zombie.isTouching(bulletArr[o].body)){
                    zombieArr2[i].zombie.destroy();
                    bulletArr[o].body.destroy();
                    score++
                }
            }
        }
        if (healthbar.bar.width>=50){
            healthbar.changeColorToGreen();
        }
          if (healthbar.bar.width<=50){
            healthbar.changeColor();
          }
          if (healthbar.bar.width<=20){
            healthbar.changeColorToRed();
          }
    }
    

    //score
    textSize(50)
    fill(255,0,0)
    text("Kills:"+score,1310,100)
    //spawn zombies

   if(score%5 ===0){
       if(frame>200){
        frame-=10
       }
   }
    //bullet fire

    //bullet,zombie,and player display
      if(gameState === END){
          gameOver = createSprite(width/2,height/2,50,50)
          gameOver.visible = false;
          gameOver.addImage(gameOverImage)
      }

      if(healthbar.bar.width <= 0){
          gameOver.visible = true;
          for(i=0;i<=zombieArr.length-1;i++){
            zombieArr[i].zombie.destroy();
          }
          for(i=0;i<=zombieArr2.length-1;i++){
            zombieArr2[i].zombie.destroy();
          }
          for(i=0;i<=bulletArr.length-1;i++){
            bulletArr[i].body.destroy();
        }
          player.player.destroy();
          healthbar.bar.destroy();
          gameState === END
      }
  

    drawSprites();
}   