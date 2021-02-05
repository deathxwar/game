class Player{
    constructor(x,y){
        this.player = createSprite(x,y,20,20)
        this.imageRight = loadAnimation("PlayerRight/playerRight.png","PlayerRight/2.png","PlayerRight/3.png")
        this.imagetop = loadAnimation("PlayerUp/pu.png","PlayerUp/pu2.png","PlayerUp/pu3.png")
        this.imagedown = loadAnimation("PlayerDown/pd.png","PlayerDown/pd2.png","PlayerDown/pd3.png")
        this.imageleft = loadAnimation("PlayerLeft/pl.png","PlayerLeft/pl2.png","PlayerLeft/pl3.png")
    }
    moveleft(){
      this.player.x-=10
      this.player.changeAnimation('left')
    }
    movedown(){
      this.player.y+=10
      this.player.changeAnimation('down')
    }
    moveright(){
      this.player.x+=10
      this.player.changeAnimation('right')
    }
    movetop(){
      this.player.y-=10
      this.player.changeAnimation('top')
    }
    
    display(){
       this.player.addAnimation('right',this.imageRight)
       this.player.addAnimation('left',this.imageleft)
       this.player.addAnimation('down',this.imagedown)
       this.player.addAnimation('top',this.imagetop)
       this.player.scale=1.0
    }
}