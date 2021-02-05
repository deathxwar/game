class Bullet{
    constructor(x,y,bulletDir){
        this.body = createSprite(x,y,5,5)
        this.imageright = loadImage("bulletright.png")
        this.imageleft = loadImage("bulletleft.png")
        this.imageup = loadImage("bulletup.png")
        this.imagedown = loadImage("bulletdown.png")
        this.bulletDir= bulletDir
    }
    display(){
        
        if(this.bulletDir===0){
            this.body.velocityX = -15
            this.body.addImage(this.imageleft)
        }
        else if(this.bulletDir===1){
            this.body.velocityX = 15
            this.body.addImage(this.imageright)
        }
        else if(this.bulletDir===2){
            this.body.velocityY=-15
            this.body.addImage(this.imageup)
        }
        else if(this.bulletDir===3){
            this.body.velocityY = 15
            this.body.addImage(this.imagedown)
        }
        this.body.scale=0.5
    }
}