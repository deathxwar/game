class Zombie{
    constructor(x,y){
        this.zombie = createSprite(x,y,20,20)
        this.zombie.rotateToDirection = true
        //this.imageright = loadAnimation("walkingzombie/0.png","walkingzombie/1.png","walkingzombie/2.png","walkingzombie/3.png"
        //,"walkingzombie/4.png","walkingzombie/5.png","walkingzombie/6.png","walkingzombie/7.png","walkingzombie/8.png"
        //,"walkingzombie/9.png","walkingzombie/10.png","walkingzombie/11.png","walkingzombie/12.png"
        //,"walkingzombie/13.png","walkingzombie/14.png","walkingzombie/15.png","walkingzombie/16.png")
        this.imageright = loadAnimation("walkingzombie/0.png","playerDown/pd.png")
    }
    stop(){
        this.zombie.velocityX = 0;
        this.zombie.velocityY = 0;
    }
    display(){
        this.zombie.addAnimation('right',this.imageright);
        //this.zombie.addImage('left',this.imageleft)
       // this.zombie.addImage('down',this.imagedown)
       // this.zombie.addImage('up',this.imageup)
        this.zombie.scale=1.0

    }
}