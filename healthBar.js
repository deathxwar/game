class HealthBar{
    constructor(){
        this.bar = createSprite(100,100,100,35)
    }
    damage(){
        this.bar.width-=10
    }
    display(){
        
    }
    changeColorToGreen(){
        this.bar.shapeColor = 'green'
    }
    changeColor(){
        this.bar.shapeColor = 'yellow'
    }
    changeColorToRed(){
        this.bar.shapeColor = 'red'
    }
}