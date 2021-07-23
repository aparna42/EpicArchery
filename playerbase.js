class Playerbase {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        //Here, Bodies starts with a capital B
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        //Changed the file name since there was no assets folder
        this.image = loadImage("base1.png")

        World.add(world, this.body)

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
        
    }
}